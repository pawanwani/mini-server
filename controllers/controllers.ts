import { findAllBooks , findBook } from "../model/bookModel";

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

export { getAllBooks , getSpecificBook}