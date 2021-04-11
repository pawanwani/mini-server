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
        for (var _i = 0, _a = books.books; _i < _a.length; _i++) {
            var ele = _a[_i];
            if (ele.id == id) {
                resolve(ele);
            }
        }
    });
}
exports.findBook = findBook;
