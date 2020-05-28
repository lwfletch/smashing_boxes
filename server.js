let express = require('express');
let app = express();
let port = 8080

app.get('/healthcheck', (req, res) => {
    res.json('App is alive')
})
app.use(express.static('public'))
app.use('/', (req, res) => {
    res.sendFile("index.html")
})

app.use('/hello', (req, res) => {
    res.sendFile("hello.html")
})

let server = app.listen(port);
console.log(`Server listening on port ${port}`)

module.exports = app;