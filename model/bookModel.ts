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
        
        books.forEach(element => {
            if(element.id == id){
                resolve(element);
            }
        });
    })
}

console.log("hello");
export { findAllBooks , findBook }