const express = require('express');
const app = express();
const route = require('./routes/index');
const port =process.env.PORT || 3001;


app.use(express.json());
app.use('/api', route); 
// app.use('/read', route); 

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})