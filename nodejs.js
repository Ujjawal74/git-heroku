const express = require('express');

const expo = express();
const port = 8000;

expo.get('/', (req,res)=>{
    res.send('<h1>Hello World, Home!</h1>');
});
expo.get('/about',(req,res)=>{
    res.send('Hello from About Us Page');
});
expo.get('/privacy',(req,res)=>{
    res.send('Hello from Privacy Page');
});
expo.listen(8000, ()=>{
    console.log(`Listening to the port ${port}`);
});