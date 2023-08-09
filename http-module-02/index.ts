import http, { IncomingMessage, Server, ServerResponse } from "http";
import url from "url";
const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.write("hello world!");
    res.end();
  }
);
// write header
const writeHeader: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("hello world!");
    res.end();
  }
);

// read query parameters
const readQueryParam: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(req.url);
    res.end();
  }
);

//  split query parameters

const splitQueryParam: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const urlb = req.url as string;
    var q = url.parse(urlb, true).query;

    console.log(q);
    var txt = q.year + " " + q.month;
    res.end(txt);
  }
);

splitQueryParam.listen(8080);

console.log("Server running at http://127.0.0.1:8080/");
