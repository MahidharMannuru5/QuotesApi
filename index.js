const express  = require('express');
const app = express();
const Quotes=require("./quotes.json");


app.get('/Quotes',(req,res)=>{

    res.send(Quotes);
});


const port =process.env.PORT || 3000;
app.listen(port,() => console.log('listening on port 3000'));
