'use strict';

var express = require('express');
var posts = require('./mock/posts.json')

var app =  express(); //Will be extended and altered as I continue



//GET Request: Used to make a request of the url from the client
//Route to the root of the server
app.get('/', function(req, res){
//Use a send message to send a string to the client
res.send('<h1>Hey there!</h1>')
})

app.get('/blog', function(req, res){
	res.send(posts);
})






















//Set up development server using the "listen" method
var port = 3000;
app.listen(port, function(){
	console.log('listening to port ' + port);
});