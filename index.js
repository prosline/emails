/**
 * Created by marciodasilva on 7/28/17.
 */
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000
app.listen(PORT);

