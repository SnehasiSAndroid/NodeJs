const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.get('/favicon.ico', (req, res) => res.status(204));

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})


app.listen(3000);