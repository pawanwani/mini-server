import { findAllBooks , findBook,findBookBySimpleText,findBookByAuthorName,findBookByPriceRange} from "../model/bookModel";

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

async function getBooksBySimpleSearch(req:any, res:any, searchText:string){
    try{
        const book = await findBookBySimpleText(searchText);
        res.writeHead(200,{'content-type':'application/json'})
        res.end(JSON.stringify(book))

    }catch(error){
        console.log(error);
    }
}

async function getBooksByAuthorName(req:any, res:any, authorName:string){
    try{
        const book = await findBookByAuthorName(authorName);
        res.writeHead(200,{'content-type':'application/json'})
        res.end(JSON.stringify(book))

    }catch(error){
        console.log(error);
    }
}

async function getBooksInPriceRange(req:any, res:any, priceArray:string[]){
    try{
        const book = await findBookByPriceRange(priceArray);
        res.writeHead(200,{'content-type':'application/json'})
        res.end(JSON.stringify(book))

    }catch(error){
        console.log(error);
    }
}




export { getAllBooks , getSpecificBook, getBooksBySimpleSearch,getBooksByAuthorName,getBooksInPriceRange}