const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const loginRoutes = require('./route/admin');
const messageRoutes = require('./route/message');


app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', loginRoutes);
app.use('/message', messageRoutes);

app.use((req,res,next) =>{
    res.status(404).send("<h1>Page not found</h1>");
});

app.listen(4000);