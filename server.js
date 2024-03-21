const express = require('express');

const app = express();

const PORT = 3000;
//express automatically sets the Content-Type for us, in this case will set to text/html; charset=utf-8

/* app.get('/', (req, res) => { 
    res.send('Heeeeeellooooo'); 
}) */

//but in this case Express will set the Content-Type to application/json; charset=utf-8 for us/

app.get('/', (req, res) => {
    res.send({
        id: 1,
        name: 'Sir Isaac Newton'
    });
})

app.get('/messages', (req, res) => {
    res.send('<ul> <li> Hello Albert!</li></ul>');
})

app.post('/messages', (req, res) => {
    console.log('Updating messages...')
})

app.listen(PORT, () =>{
    console.log(`Listening on ${PORT}...`);
})