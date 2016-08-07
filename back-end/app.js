var express = require('express');
var path = require('path');
var app =express();


app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, '../client-ui/source')));
app.set('views', path.join(__dirname, '../client-ui/source'));
app.use('/bower_components', express.static(path.join(__dirname, '../client-ui/bower_components')));


app.get('/',function(req,res) {
    res.render('index');
});
// app.get('/home',function(req,res) {
//     res.render('error/err');
// });

app.listen(3000,function() {
    console.log('listening on server 3000');
})
///
