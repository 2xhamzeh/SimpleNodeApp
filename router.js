const htmlContentType = {
    "Content-Type": "text/html"
};

const routes = {
    "GET": {},
    "POST": {}
};

exports.handle = (req, res) => {
    try {
        if(routes[req.method][req.url]){
            routes[req.method][req.url](req,res);
        } else {
            res.writeHead(404, htmlContentType);
            res.end("<h1>No such file exists 404</h1>")
        }
    } catch(ex) {
        console.log("Error: " + ex);
    }
};

exports.get = (url, action) => {
    routes["GET"][url] = action;
};

exports.post = (url, action) => {
    routes["POST"][url] = action;
};
