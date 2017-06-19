
var express = require('express');
var request = require("request");

//var app = express();
// app.listen(3003,function(){

// 	console.log("testing json parse");
// }
// 	);

request.get("http://ergast.com/api/f1/current/last/results.json", function (err, res, body) {
    if (!err) {
        var resultsObj = JSON.parse(body);
        //Just an example of how to access properties:
        console.log("JSON response is :"+resultsObj.MRData);
    }
});