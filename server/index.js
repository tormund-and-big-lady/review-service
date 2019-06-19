const express = require('express');
const parser = require('body-parser');
const port = process.env.PORT || 3004;
const path = require('path');
const router = require('./router.js');
const app = express();


app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router);

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
})