const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   if (req.url === "/") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "index.html"),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.writeHead(200, { "Content-type": "text/html" });
  //         res.end(content);
  //       }
  //     );
  //   }
  //   if (req.url === "/about") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "about.html"),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.writeHead(200, { "Content-type": "text/html" });
  //         res.end(content);
  //       }
  //     );
  //   }
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  //extension
  let extname = path.extname(filePath);

  //content-type
  let contentType = "text/html";

  //check ext and set content type

  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if ((err.code = "ENDOENT")) {
        //pageNotFound
        fs.readFile(
          path.join(__dirname, "public", "err.html"),
          (err, content) => {
            res.writeHead(200, { "Content-type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        //server error
        res.writeHead(5000);
        res.end(`Server ERROR:${err.code}`);
      }
    } else {
      //success
      res.writeHead(200, { contentType: contentType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
