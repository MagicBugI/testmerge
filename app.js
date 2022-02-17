const express = require('express');

const app  = express();

app.use((req , res , next)=>{
    res.send('Hallow its mee');
    
})

app.listen(3000 , ()=> "server is running on port 3000");
