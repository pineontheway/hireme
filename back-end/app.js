var express = require('express');
var path = require('path');
var app =express();

app.set('views', path.join(__dirname, '../app/source'));
app.get('/',function(req,res) {
    res.render('index');
});

app.set('view engine','ejs');

app.listen(3000,function() {
    console.log('listening on server 3000');
})
///
