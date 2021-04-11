"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findBookByPriceRange = exports.findBookByAuthorName = exports.findBookBySimpleText = exports.findBook = exports.findAllBooks = void 0;
var fs = __importStar(require("fs"));
var data = fs.readFileSync("./data/db.json");
var books = JSON.parse(data);
function findAllBooks() {
    return new Promise(function (resolve, reject) {
        resolve(books);
    });
}
exports.findAllBooks = findAllBooks;
function findBook(id) {
    /*  return new Promise ((resolve,reject)=>{
          
          books.forEach((element:any) => {
              if(element.id == id){
                  resolve(element);
              }
          });
      })  */
}
exports.findBook = findBook;
function findBookBySimpleText(searchText) {
    return new Promise(function (resolve, reject) {
        var shortListedBooks = [];
        for (var _i = 0, _a = books.books; _i < _a.length; _i++) {
            var b = _a[_i];
            if (b.title.toLowerCase().indexOf(searchText.toLowerCase()) != -1)
                shortListedBooks.push(b);
            else if (b.author.toLowerCase().indexOf(searchText.toLowerCase()) != -1)
                shortListedBooks.push(b);
            else if (b.description.toLowerCase().indexOf(searchText.toLowerCase()) != -1)
                shortListedBooks.push(b);
        }
        resolve(shortListedBooks);
    });
}
exports.findBookBySimpleText = findBookBySimpleText;
function findBookByAuthorName(authorName) {
    return new Promise(function (resolve, reject) {
        var shortListedBooks = [];
        for (var _i = 0, _a = books.books; _i < _a.length; _i++) {
            var b = _a[_i];
            if (b.author.toLowerCase().indexOf(authorName.toLowerCase()) != -1)
                shortListedBooks.push(b);
        }
        resolve(shortListedBooks);
    });
}
exports.findBookByAuthorName = findBookByAuthorName;
function findBookByPriceRange(priceArray) {
    return new Promise(function (resolve, reject) {
        var shortListedBooks = [];
        var low = priceArray[0];
        var high = priceArray[1];
        for (var _i = 0, _a = books.books; _i < _a.length; _i++) {
            var b = _a[_i];
            if (b.price <= high && b.price >= low)
                shortListedBooks.push(b);
        }
        resolve(shortListedBooks);
    });
}
exports.findBookByPriceRange = findBookByPriceRange;
