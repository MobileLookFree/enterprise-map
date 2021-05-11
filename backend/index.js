const express = require('express');
const MBTiles = require('@mapbox/mbtiles');
const path = require('path');

const { TFSearch } = require('./search');
const enterprises = require('./resources/addresses/addresses.json');
const { DEFAULT_HEADERS } = require('./const');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = 8080;

const tfSearch = new TFSearch();
tfSearch.loadModal()
  .then(() => console.log('Model loaded!'));

app.get('/', (req, res) => {
  res.send('<h1>Server is working!</h1>');
});

app.get('/api/map/:source/:z/:x/:y.png', (req, res) => {
  new MBTiles(path.join(__dirname, '/resources/tiles', req.params.source + '.mbtiles'), (error, mbtiles) => {
    mbtiles.getTile(req.params.z, req.params.x, req.params.y, (error, tile, headers) => {
      if (error) {
        res.set({ 'Content-Type': 'text/plain' });
        res.status(404).send('Tile rendering error: ' + error + '\n');
      } else {
        res.set(headers);
        res.set({ 'Access-Control-Allow-Origin': '*' });
        res.set({ 'Content-Type': 'image/png' });
        res.send(tile);
      }
    });
    if (error) {
      console.log(error);
    }
  });
});

app.get('/api/get-enterprises', (req, res) => {
  res.set(DEFAULT_HEADERS);
  res.send(JSON.stringify(
    enterprises
      .filter(enterprise => enterprise.dadata.geo_lat && enterprise.dadata.geo_lon)
      .map(enterprise => ({
        ...enterprise,
        lat: +enterprise.dadata.geo_lat,
        lon: +enterprise.dadata.geo_lon
      })))
  );
});

app.post('/api/search-enterprises', async (req, res) => {
  const { query } = req.body;
  const { type, prediction } = await tfSearch.getType(query);
  res.set(DEFAULT_HEADERS);
  res.send(JSON.stringify({ query, type, prediction }));
});

app.get('/api/download-enterprises', (req, res) => {
  const filePath = path.join(__dirname, '/resources/addresses/rawAddresses.xlsx');
  const fileName = 'rawAddresses.xlsx';
  res.set({ 'Content-disposition': `attachment; filename=${fileName}` });
  res.set({ 'Content-type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  res.download(filePath, fileName);
});

// Starts up the server on port
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));