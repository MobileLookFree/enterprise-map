const express = require('express');
const MBTiles = require('@mapbox/mbtiles');
const path = require('path');

const { TFSearch } = require('./search');
const enterprises = require('./resources/addresses/addresses.json');

const app = express();
const PORT = 8080;

const tfSearch = new TFSearch();
tfSearch.loadModal()
  .then(() => console.log('Model loaded!'));

app.get('/', (req, res) => {
  res.send('<h1>Server is working!</h1>');
});

app.get('/:source/:z/:x/:y.png', (req, res) => {
  new MBTiles(path.join(__dirname, '/resources/tiles', req.params.source + '.mbtiles'), (error, mbtiles) => {
    mbtiles.getTile(req.params.z, req.params.x, req.params.y, (error, tile, headers) => {
      if (error) {
        res.set({ "Content-Type": "text/plain" });
        res.status(404).send('Tile rendering error: ' + error + '\n');
      } else {
        res.set(headers);
        res.set({ "Access-Control-Allow-Origin": "*" });
        res.set({ "Content-Type": "image/png" });
        res.send(tile);
      }
    });
    if (error) {
      console.log(error);
    }
  });
});

app.get('/api/get-enterprises', (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  res.set({ 'Content-Type': 'application/json' });
  res.send(JSON.stringify(enterprises));
});

app.get('/search/:query', async (req, res) => {
  const query = decodeURIComponent(req.params.query)
  const { type, prediction } = await tfSearch.getType(query);
  res.set({ 'Access-Control-Allow-Origin': '*' });
  res.set({ 'Content-Type': 'application/json' });
  res.send(JSON.stringify({ query, type, prediction }));
});

// Starts up the server on port
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));