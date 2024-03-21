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

//midlware = a function that is running between the request and our server that takes some actions: validation, checking if the user is authorized, etc. 
app.use((req, res, next) => {
    //the start time of the request begins here and finishes after next, when next is executed it finds our routing url, 
    //let's say app.get('/friends) executes it, respondes and after next() all the actions ends
    const start = Date.now();
    next(); // this is mandatory to call if we want to responde to client
    //actions go here ...
    //this is the last change to measure our lasting time of our request. 
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
})

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