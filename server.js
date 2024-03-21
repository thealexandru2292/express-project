const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: 'Albert Einstein'
    },
    {
        id: 1,
        name: 'Sir Isaac Newtoon'
    }
];

//express automatically sets the Content-Type for us, in this case will set to text/html; charset=utf-8

/* app.get('/', (req, res) => { 
    res.send('Heeeeeellooooo'); 
}) */

//but in this case Express will set the Content-Type to application/json; charset=utf-8 for us/

app.get('/friends', (req, res) => {
    res.json(friends);
})

//GET /friends/22
app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if(friend)
    {
        res.status(200).json(friend);
    }
    else
    {
        res.status(404).json({
            error: "Friend does not exist"
        });
    }
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