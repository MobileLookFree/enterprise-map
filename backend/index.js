const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static('resources/tiles'));

app.get('/', (req, res) => {
  res.send('Map tiles server is working');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));