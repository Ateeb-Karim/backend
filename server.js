const express = require('express');

const app = express();

app.get("/", (request, response) => {
    response.send("hello world from the server")
})

app.listen(3000)