const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

require('dotenv').config();
app.use(cors());
app.use(express.json());



async function run() {
    try {

    }
    finally {

    }
};
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('App is running');
});

app.listen(port);

module.exports = app;