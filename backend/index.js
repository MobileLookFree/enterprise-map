const express = require("express");
const MBTiles = require("@mapbox/mbtiles");
const path = require("path");

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Server is working!');
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

app.get('/search/:query', (req, res) => {
  console.log(req.params.query);
});


// Starts up the server on port
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));