var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
 
// Running Server Details.
var server = app.listen(8085, function () {
});
 
 
app.get('', function (req, res) {
  var html='';
  html +="<body>";
  html += "<form action='/result'  method='post' name='form1'>";
  html += "<p>FEEDBAK FORM</p>";
  html += "Name:<input type= 'text' name='name'><br>";
  html += "Comment:<br>";
  html += "<textarea name='cmt' rows='10' cols='30'></textarea><br>";
  html += "<input type='submit' value='submit'>";
  html += "<INPUT type='reset'  value='reset'>";
  html += "</form>";
  html += "</body>";
  res.send(html);
});
 
app.post('/result', urlencodedParser, function (req, res){
  var reply='';
  reply += req.body.name+":";
  reply += req.body.cmt;

  res.send(reply);
 });