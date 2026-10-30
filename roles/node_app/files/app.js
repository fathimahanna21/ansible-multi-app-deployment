const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/") {
        res.end(JSON.stringify({
            application: "Node.js App",
            message: "Hello! Deployed using Ansible."
        }));
    } else if (req.url === "/health") {
        res.end(JSON.stringify({
            status: "healthy"
        }));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({
            error: "Not found"
        }));
    }
});

server.listen(PORT, "127.0.0.1", () => {
    console.log(`Node.js app running on port ${PORT}`);
});
