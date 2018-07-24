const express = require('express');
const app = express();

app.get('/', (req, res)=> { // route handler
  res.send({by: 'buddy' });

});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
