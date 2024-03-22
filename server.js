const express = require('express');
const path = require('path');
const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
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
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});
//when we want to support a HTML page we use our express static middelware
//because we mounted this path /site static fieles from index.hbs file will look into the site/css/style.css or site/images/skymountain.webp
app.use('/site', express.static(path.join(__dirname, 'public'))); 

//register our JSON parse middleware that will parse our post body in json format
// becayse we do app.use(express.json()) in app.post() method we will be able to get the body as an object and acces its params like req.body.name even if name is null
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', {
        title: 'My Friends Are VERYY Clever',
        caption: 'Let\'s go skiing!'
    });
});

app.use('/friends', friendsRouter); // use friendsRouter middleware

app.use('/messages', messagesRouter);

app.listen(PORT, () =>{
    console.log(`Listening on ${PORT}...`);
})