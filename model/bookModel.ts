import * as fs from "fs";
const data: any = fs.readFileSync("./data/db.json");
let books = JSON.parse(data);

function findAllBooks() {
  return new Promise((resolve, reject) => {
    resolve(books);
  });
}

function findBook(id: number) {
  /*  return new Promise ((resolve,reject)=>{
        
        books.forEach((element:any) => {
            if(element.id == id){
                resolve(element);
            }
        });
    })  */
}

function findBookBySimpleText(searchText: string) {
  return new Promise((resolve, reject) => {
    let shortListedBooks: any[] = [];
    for (let b of books.books) {
      if (b.title.toLowerCase().indexOf(searchText.toLowerCase()) != -1)
        shortListedBooks.push(b);
      else if (b.author.toLowerCase().indexOf(searchText.toLowerCase()) != -1)
        shortListedBooks.push(b);
      else if (
        b.description.toLowerCase().indexOf(searchText.toLowerCase()) != -1
      )
        shortListedBooks.push(b);
    }
    resolve(shortListedBooks);
  });
}

function findBookByAuthorName(authorName: string) {
  return new Promise((resolve, reject) => {
    let shortListedBooks: any[] = [];
    for (let b of books.books) {
      if (b.author.toLowerCase().indexOf(authorName.toLowerCase()) != -1)
        shortListedBooks.push(b);
    }
    resolve(shortListedBooks);
  });
}

function findBookByPriceRange(priceArray: string[]) {
    return new Promise((resolve, reject) => {
      let shortListedBooks: any[] = [];
      let low:string=priceArray[0]
      let high:string=priceArray[1]
      for (let b of books.books) {
        if (b.price<=high && b.price>=low)
          shortListedBooks.push(b);
      }
      resolve(shortListedBooks);
    });
  }

export { findAllBooks, findBook, findBookBySimpleText, findBookByAuthorName,findBookByPriceRange };
