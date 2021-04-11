import { findAllBooks , findBook, deleteBook } from "../model/bookModel";

async function getAllBooks(req:any,res:any){
    try{
        const books = await findAllBooks();
        res.writeHead(200,{'content-type':'application/json'})
        res.end(JSON.stringify(books))
    }catch(error){
        console.log(error);
    }
}   

async function getSpecificBook(req:any,res:any,id:number){
    try{
        const book = await findBook(id);
        res.writeHead(200,{'content-type':'application/json'})
        res.end(JSON.stringify(book))
    }catch(error){
        console.log(error);
    }
} 

//description: Delete Product

async function deleteSpecificBook(req:any, res:any, id:number){
    try{
        const book = await deleteBook(id);
       // await book.remove(id)
        res.writeHead(200,{'content-type':'text/plain'})
        res.end("removed");
    }catch(error){
        console.log(error);
    }
}   

export { getAllBooks , getSpecificBook, deleteSpecificBook}