const url = require("url");

const myUrl = url.parse(
  "https://mywebsite.com/hello.html?id=100&status=active"
);

console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.href);
console.log(myUrl.search);

var qdata = myUrl.query;
console.log(qdata);
