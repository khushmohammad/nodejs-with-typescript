import http from "http";
import events from "events";
// const server: http.Server = http.createServer(
//   (req: http.IncomingMessage, res: http.ServerResponse) => {
//     res.write("hello world");
//     res.end();
//   }
// );

var eventEmitter: events = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log("I hear a scream!");
};

//Assign the event handler to an event:
eventEmitter.on("scream", myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit("scream");

// console.log("server listening on port :http://localhost:8080");
