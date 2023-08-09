import http, { IncomingMessage, Server, ServerResponse } from "http";
import fs from "fs";

// Read files
// Create files
// Update files
// Delete files
// Rename files

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    fs.readFile("files/demo.html", { encoding: "utf8" }, (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });      
      res.write(data);
      res.end();
    });
  }
);

// createfile
const createFile: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    fs.appendFile("files/demoCreate.html", "Hello World", (err) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });

      res.end();
    });
  }
);

server.listen(8080);
createFile.listen(8081);
console.log("server listening on:http://localhost:8081");
