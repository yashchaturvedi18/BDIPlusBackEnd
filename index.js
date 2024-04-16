const express = require("express");
const cors = require('cors');
const config = require('./config');
const mainRoutes = require('./routes/mainRoutes');
const weatherRoutes = require('./routes/weatherRoutes');


const app =  express();
const port = config.port;


app.listen(port,()=>{
    console.log(`App is up on port ${port}`);
})
app.use(cors());
app.use('/',mainRoutes);
app.use('/weather',weatherRoutes);