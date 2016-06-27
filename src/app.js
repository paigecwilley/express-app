'use strict';

var express = require('express');
var posts = require('./mock/posts.json');

var app =  express(); //Will be extended and altered as I continue

// debugger;

//GET Request: Used to make a request of the url from the client
//Route to the root of the server
app.get('/', function(req, res){
//Use a send message to send a string to the client
res.send('<h1>Hey there!</h1>');
});

app.get('/blog/:title?', function(req, res){ //? mark tells Express parameter is optional, so can visit the /blog/ root page
//How to create url params based on data
	//Express route parameters allow you to request different data simply by changing the URL
	var title = req.params.title;
	//This sets the parameter = title of a posts.json object
	if (title === undefined){
		res.status(503); //This renders page with status of 503 rather than 200
		res.send("This page is under construction"); //What server sends to client
	}else {
		var post = posts[title]; //"posts" refers to posts.json
		res.send(post);
	}
	
});






















//Set up development server using the "listen" method
var port = 3000;
app.listen(port, function(){
	console.log('listening to port ' + port);
});