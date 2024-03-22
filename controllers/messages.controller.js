const path = require('path');
//we need to avoid the different ways on using paths on different operatying systems with PATH module
// example on linux: /folder/file.jpg
// example on windows: \folder\file.jpg

function getMessages(req, res){
    res.render('messages', {
        title: 'Messages to my Friends',
        friend: 'Elon Musk'
    });
    //__dirname = current folder
    // '..' = one level up
    //res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skymountain.webp'))
    //res.send('<ul> <li> Hello Albert!</li></ul>');
}

function postMessage(req, res){
    console.log('Updating messages...');
}

module.exports = {
    getMessages,
    postMessage
}