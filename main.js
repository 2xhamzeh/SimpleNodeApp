const port = 3000,
http = require("http"),
fs = require('fs'),
router = require("./router");

const htmlContentType = {
    "Content-Type": "text/html"
};

const customReadFile = (file, res) => {
    fs.readFile(`./${file}`, (error, data) => {
        if(error){
            console.log("Error reading the file...")
        } 
        res.end(data);
    });
};

router.get("/", (req, res) => {
    res.writeHead(200, htmlContentType);
    customReadFile("views/index.html", res);
});

router.get("/index.html", (req, res) => {
    res.writeHead(200, htmlContentType);
    customReadFile("views/index.html", res);
});

router.get("/about.html", (req, res) => {
    res.writeHead(200, htmlContentType);
    customReadFile("views/about.html", res);
});

router.get("/contact.html", (req, res) => {
    res.writeHead(200, htmlContentType);
    customReadFile("views/contact.html", res);
});

http.createServer(router.handle).listen(3000);