const EventEmiter = require("events");
const uuid = require("uuid");

class Logger extends EventEmiter {
  log(msg) {
    this.emit("message", { id: uuid.v4(), msg });
  }
}

module.exports = Logger;

// const Logger = require("./logger");
// const logger = new Logger();
// const fs = require("fs");
// const path = require("path");

// logger.on("message", data => {
//   console.log("called Listner", data);

//   fs.appendFile(
//     path.join(__dirname, "/test", "log.txt"),
//     data.id + "\n",
//     err => {
//       if (err) throw err;
//       console.log("Data added...");
//     }
//   );
// });

// logger.log("logadded");
