import http, { IncomingMessage, ServerResponse } from "http";
import url from "url";
import fs from "fs";

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const urlP = req.url as string;
    const q = url.parse(urlP, true);

    const pagePath = "pages" + q.path;

    fs.readFile(pagePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(200, { "Content-Type": "text/html" });

        res.write("404 file not found");
        res.end();
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
);

server.listen(8080);

console.log("server listening:http://localhost:8080");
