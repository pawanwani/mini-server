"use strict";
exports.__esModule = true;
exports.findBook = exports.findAllBooks = void 0;
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
    return new Promise(function (resolve, reject) {
        books.forEach(function (element) {
            if (element.id == id) {
                resolve(element);
            }
        });
    });
}
exports.findBook = findBook;
