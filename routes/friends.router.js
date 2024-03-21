const express = require('express');

const friendsController = require('../controllers/friends.controller');

const friendsRouter = express.Router();

//we can set a middleware for a specific router only
friendsRouter.use((req, res, next) => {
    console.log('ip address:', req.ip); // output ip address: ::1       where ::1 ( IpV6 sintax) is another way of localhost or 127.0.0.1(IPv4 sintax) but both pint to a local machine
    next();
});

//friendsRouter.post('/friends', friendsController.postFriend); no need anymore to use friends in path ('/friends)
friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriend);

module.exports = friendsRouter;