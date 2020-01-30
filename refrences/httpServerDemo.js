const http = require("http");

http
  .createServer((req, res) => {
    res.write("hello Bro");
    res.end();
  })
  .listen(5000, () => console.log("ServerRunning BRO.."));
