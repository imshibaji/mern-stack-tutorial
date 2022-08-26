var express = require('express');

var app = express();

app.get('/',(req, res)=>{
    console.log(req.query);
    res.send('Home Page Url. Welcome '+ (req.query.name || 'Guest'));
});

// app.get('/about',(req, res)=>{
//     res.send('About Page Url.');
// });

// app.get('/contact',(req, res)=>{
//     res.send('Contact Page Url.');
// });

// app.get('/products',(req, res)=>{
//     res.send('Products URL');
// });

// app.get('/products/:id',(req, res)=>{
//     console.log(req.params.id);
//     res.send('Product Details URL');
// });

app.listen(3000, function () {
    console.log('Server is live...');
})