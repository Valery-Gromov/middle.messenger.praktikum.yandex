// eslint-disable-next-line
const express = require('express');

const app = express();
// eslint-disable-next-line
const path = require('path');

// Папка для хранения статических файлов
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
