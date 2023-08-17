const express = require('express');
const app = express();

app.get('/', (req, res)=>{  // message over the application
    res.send("Welcome to my awesome app!");
});

app.Listen(3000, function(){   // localport on 3000
    console.log("app listening port on 3000");
});

