const express = require('express');
const app = express();

app.get('/', (request, response) => {});
app.get('/main', (request, response) => {});
app.use((request, response) => {});
app.listen(3000, () => {
  console.log('localhost:3000 start.');
});
