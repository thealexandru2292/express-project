const express = require('express');

const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');

const app = express();

const PORT = 3000;


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
//register our JSON parse middleware that will parse our post body in json format
// becayse we do app.use(express.json()) in app.post() method we will be able to get the body as an object and acces its params like req.body.name even if name is null
app.use(express.json());

app.post('/friends', friendsController.postFriend);
//express automatically sets the Content-Type for us, in this case will set to text/html; charset=utf-8
/* app.get('/', (req, res) => { 
    res.send('Heeeeeellooooo'); 
}) */
//but in this case Express will set the Content-Type to application/json; charset=utf-8 for us/
app.get('/friends', friendsController.getFriends);
//GET /friends/22
app.get('/friends/:friendId', friendsController.getFriend);


app.get('/messages', messagesController.getMessages);
app.post('/messages', messagesController.postMessage)

app.listen(PORT, () =>{
    console.log(`Listening on ${PORT}...`);
})