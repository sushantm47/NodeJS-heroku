const EventEmiter = require("events");
const uuid = require("uuid");

class MyEmitter extends EventEmiter {}

const myEmitter = new MyEmitter();

myEmitter.on("event", () => console.log("event fired!!"));

myEmitter.emit("event");
