import { createServer, IncomingMessage, Server, ServerResponse } from "node:http";   

const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
   // console.log(req.url); 
   // console.log(req.method);
   const url = req.url;
   const method = req.method;

    if (url === "/" && method === "GET") {
       // console.log("This is root route");
       res.writeHead(200, { "Content-Type": "text/html" });
       res.write("<h1>Welcome to the root route</h1>");
       res.end();
    } 
    else if (url?.startsWith("/about")) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>This is About Us</h1>");
        res.end();
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 Not Found</h1>");
        res.end();
    }

});
server.listen(3000, () => {
   console.log("Server is running on port 3000");
});
