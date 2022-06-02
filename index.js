const express = require('express');
const cors = require('cors');

const path = require('path');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.get('/.well-known/stellar.toml', (req, res, next) => {
    const options = {
      root: path.join(__dirname, 'public'),
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("content-type", "text/plain");
    res.sendFile('stellar.toml', options);
  })

app.get('/', (req, res) =>{
    res.send('hello world')
})


app.listen((PORT), () => console.log(`listening on port ${PORT}`));

