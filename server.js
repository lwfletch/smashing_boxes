let express = require('express');
let app = express();
let port = 8080

app.use('/', express.static('public'))

let server = app.listen(port);
console.log(`Server listening on port ${port}`)