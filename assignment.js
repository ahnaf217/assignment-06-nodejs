const http = require("http");

const server = http.createServer((req, res) =>{
    if(req.url == "/")
    {
        res.write("<h1>This is the home page</h1>");
        res.write("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>");
        res.write("<nav><ul> <li><a href='/blog'>Blog</a></li>  <li><a href='/about'>About Us</a></li>  <li><a href='/contact'>Contact Us</a></li> </ul></nav>")
        res.end();
    }
    else if(req.url == "/blog")
    {
        res.write("<h1>This is the blog page</h1>");
        res.write("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>");
        res.write("<nav><ul> <li><a href='/blog'>Blog</a></li>  <li><a href='/about'>About Us</a></li>  <li><a href='/contact'>Contact Us</a></li> </ul></nav>")
        res.end();
    }
    else if(req.url == "/about")
    {
        res.write("<h1>This is the about us page</h1>");
        res.write("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>");
        res.write("<nav><ul> <li><a href='/blog'>Blog</a></li>  <li><a href='/about'>About Us</a></li>  <li><a href='/contact'>Contact Us</a></li> </ul></nav>")
        res.end();
    }
    else if(req.url == "/contact")
    {
        res.write("<h1>This is the contact us page</h1>");
        res.write("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>");
        res.write("<nav><ul> <li><a href='/blog'>Blog</a></li>  <li><a href='/about'>About Us</a></li>  <li><a href='/contact'>Contact Us</a></li> </ul></nav>")
        res.end();
    }
    else{
        res.write("<h1>404 page not found</h1>");
        res.end();
    }

})

server.listen(5000, () => {
    console.log("Server is running on port 5000");
})