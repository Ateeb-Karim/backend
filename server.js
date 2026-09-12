const express = require('express');

const app = express();

app.get("/", (request, response) => {
    response.send("hello world from the server")
    // this message will be seen on the screen in the website http://localhost:3000
})

app.listen(3000)