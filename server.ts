import * as http from "http";
import {getAllBooks , getSpecificBook, deleteSpecificBook} from './controllers/controllers';


let server = http.createServer((req, res) => {
  if (req.url) {
    const myParams = new URLSearchParams(req.url.split('?')[1]);
    //to get all books
    if (req.url === "/books" && req.method === "GET") {
      getAllBooks(req,res);
      // res.end("get request");
    }
    //to create a new book 
    else if (req.url === "/books" && req.method === "POST") {
      res.end("post request");
    } 
    //to get a book based on id
      else if (req.url?.match(/\/books\/[0-9]+/) && req.method === "GET") {
      let id = req.url?.split("/")[2];
      getSpecificBook(req,res,parseInt(id));
      //res.end(`get book by id=${id}`);
    } else if (myParams.has('q') && req.method === "GET") {
      res.end(`simple text=${myParams.get("q")}`);
    } else if (myParams.has("author") && req.method === "GET") {
      res.end(`simple text=${myParams.get("author")}`);
    } else if (myParams.has("price") && req.method === "GET") {
      res.end(`simple text=${myParams.getAll("price")}`);
    }
    //to update a book 
    else if (req.url?.match(/\/books\/[0-9]+/) && req.method === "PUT") {
      let id = req.url?.split("/")[2];
      res.end(`get book by id=${id}`);
    } else if (req.url?.match(/\/books\/[0-9]+/) && req.method === "DELETE") {
      let id = req.url?.split("/")[2];
      deleteSpecificBook(req,res,parseInt(id));
     // res.end(`get book by id=${id}`);
    } else res.end("URL not found");
  }
});

const port = 5000;
server.on("error", (err) => console.log(err.message));
server.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
