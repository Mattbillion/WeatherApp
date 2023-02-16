let express = require("express");
let app = express();
const port = 5000;
var bodyParser = require("body-parser");

app.listen(port, function () {
  console.log(`Server is running at ${port}`);
});

app.post('http://localhost:5000/weather', function (req, res) {
  res.write("Testing");
});
