import * as fs from 'fs';
const data:any = fs.readFileSync('./data/db.json');
let books = JSON.parse(data);

function findAllBooks(){
    return new Promise ((resolve,reject)=>{
        resolve(books)
    })
} 

function findBook(id:number){
    // return new Promise ((resolve,reject)=>{
        
    //     books.forEach(element => {
    //         if(element.id == id){
    //             resolve(element);
    //         }
    //     });
    // })
}

function deleteBook(id:number){
    return new Promise ((resolve,reject)=>{
        let array : any [] =[];
        for(let element of books.books) {


            if(element.id !== id){

                array.push(element);
        
            }
        }

        let newBooks={"books":array}
        fs.writeFileSync('./data/db.json' ,JSON.stringify(newBooks));
        resolve("deleted");
    })
}

//console.log("hello");
export { findAllBooks , findBook, deleteBook }