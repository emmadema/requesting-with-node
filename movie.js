//export function named get(movieTitle)
//use the request libiary
//parse something from each move into the console
'use strict'
	const apiKey = require('./env');
	const id = require('./id');
	var movieTitle = "argo";
	const request = require('request');
	//const apiUrl = "https://www.googleapis.com/customsearch/v1?key=" + apiKey + "&cx=" + id + "&q=face+off+movie";
	
function get(movieTitle) {
	const apiUrl = ("https://www.googleapis.com/customsearch/v1?key="+apiKey+"&cx="+id+"&q="+movieTitle);
	request(apiUrl, function (error, repsponse, body){
		console.log("The movie is", JSON.parse(body).items[0].title);
	});
}

module.exports = get;


