const http = require("http");

const server = http.createServer((req, res) =>{
    if(req.url == "/")
    {
        res.write("<h1>This is the home page</h1>");
        res.end();
    }
    else if(req.url == "/blog")
    {
        res.write("<h1>This is the blog page</h1>");
        res.end();
    }
    else if(req.url == "/about")
    {
        res.write("<h1>This is the about us page</h1>");
        res.end();
    }
    else if(req.url == "/contact")
    {
        res.write("<h1>This is the contact us page</h1>");
        res.end();
    }

})

server.listen(5000, () => {
    console.log("Server is running on port 5000");
})