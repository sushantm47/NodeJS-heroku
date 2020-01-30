const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "/test"), {}, err => {
//   if (err) throw err;
//   console.log("FOLDER created...");
// });

fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "lorem ipsum dolor",
  err => {
    if (err) throw err;
    console.log("file created...");

    //append
    fs.appendFile(path.join(__dirname, "/test", "hello.txt"), "opopos", err => {
      if (err) throw err;
      console.log("Data added...");
    });
    //readfile
    fs.readFile(
      path.join(__dirname, "/test", "hello.txt"),
      "utf8",
      (err, data) => {
        if (err) throw err;
        console.log(data);
      }
    );
  }
);
