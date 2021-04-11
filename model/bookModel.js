"use strict";
exports.__esModule = true;
exports.deleteBook = exports.findBook = exports.findAllBooks = void 0;
var fs = require("fs");
var data = fs.readFileSync('./data/db.json');
var books = JSON.parse(data);
function findAllBooks() {
    return new Promise(function (resolve, reject) {
        resolve(books);
    });
}
exports.findAllBooks = findAllBooks;
function findBook(id) {
    // return new Promise ((resolve,reject)=>{
    //     books.forEach(element => {
    //         if(element.id == id){
    //             resolve(element);
    //         }
    //     });
    // })
}
exports.findBook = findBook;
function deleteBook(id) {
    return new Promise(function (resolve, reject) {
        var array = [];
        for (var _i = 0, _a = books.books; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.id !== id) {
                array.push(element);
            }
        }
        var newBooks = { "books": array };
        fs.writeFileSync('./data/db.json', JSON.stringify(newBooks));
        resolve("deleted");
    });
}
exports.deleteBook = deleteBook;
