import * as fs from 'fs';
const data:any = fs.readFileSync('./data/db.json');
let books = JSON.parse(data);

function findAllBooks(){
    return new Promise ((resolve,reject)=>{
        resolve(books)
    })
} 

function findBook(id:number){
    return new Promise ((resolve,reject)=>{
        for( let ele of books.books){
            if(ele.id == id){
                resolve(ele);
            }
        }
    })
}
export { findAllBooks , findBook }