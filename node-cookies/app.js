var express = require('express');
var cookieParser= require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get("/", function(req,resp)
{
	resp.cookie("testCookie","hello");
	resp.end(" Ending response");
});

app.listen(3003,function(){

	console.log("testing express cookie");
}
	);