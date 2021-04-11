"use strict";
exports.__esModule = true;
var http = require("http");
var controllers_1 = require("./controllers/controllers");
var server = http.createServer(function (req, res) {
    var _a, _b, _c, _d, _e, _f;
    if (req.url) {
        var myParams = new URLSearchParams(req.url.split('?')[1]);
        //to get all books
        if (req.url === "/books" && req.method === "GET") {
            controllers_1.getAllBooks(req, res);
            // res.end("get request");
        }
        //to create a new book 
        else if (req.url === "/books" && req.method === "POST") {
            res.end("post request");
        }
        //to get a book based on id
        else if (((_a = req.url) === null || _a === void 0 ? void 0 : _a.match(/\/books\/[0-9]+/)) && req.method === "GET") {
            var id = (_b = req.url) === null || _b === void 0 ? void 0 : _b.split("/")[2];
            controllers_1.getSpecificBook(req, res, parseInt(id));
            //res.end(`get book by id=${id}`);
        }
        else if (myParams.has('q') && req.method === "GET") {
            res.end("simple text=" + myParams.get("q"));
        }
        else if (myParams.has("author") && req.method === "GET") {
            res.end("simple text=" + myParams.get("author"));
        }
        else if (myParams.has("price") && req.method === "GET") {
            res.end("simple text=" + myParams.getAll("price"));
        }
        //to update a book 
        else if (((_c = req.url) === null || _c === void 0 ? void 0 : _c.match(/\/books\/[0-9]+/)) && req.method === "PUT") {
            var id = (_d = req.url) === null || _d === void 0 ? void 0 : _d.split("/")[2];
            res.end("get book by id=" + id);
        }
        else if (((_e = req.url) === null || _e === void 0 ? void 0 : _e.match(/\/books\/[0-9]+/)) && req.method === "DELETE") {
            var id = (_f = req.url) === null || _f === void 0 ? void 0 : _f.split("/")[2];
            controllers_1.deleteSpecificBook(req, res, parseInt(id));
            // res.end(`get book by id=${id}`);
        }
        else
            res.end("URL not found");
    }
});
var port = 5000;
server.on("error", function (err) { return console.log(err.message); });
server.listen(port, function () {
    return console.log("Server listening at http://localhost:" + port);
});
