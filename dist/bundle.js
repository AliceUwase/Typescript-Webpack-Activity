/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
let exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
// represents a book in the library
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
// stores all the reviews added during runtime
const reviews = [];
// creates a new review object and adds it to the reviews array
function addReview(bookId, rating, comment) { reviews.push({ bookId, rating, comment }); }
// function to display book info
function displayBook(book) {
    const bookList = document.getElementById("book-list");
    if (!bookList)
        return;
    const bookDiv = document.createElement("div");
    bookDiv.innerHTML = `
    <h2>${book.title}</h2>
    <p>By ${book.author}, ${book.year}</p>`;
    bookList.appendChild(bookDiv);
}
// create some book objects
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
// display the books
displayBook(book1);
displayBook(book2);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsbUNBQW1DO0FBQ25DLE1BQU0sSUFBSTtJQUtOLFlBQVksS0FBYSxFQUFFLE1BQWMsRUFBRSxJQUFZO1FBRW5ELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Q0FDSjtBQVFELDhDQUE4QztBQUM5QyxNQUFNLE9BQU8sR0FBYSxFQUFFLENBQUM7QUFFN0IsK0RBQStEO0FBQy9ELFNBQVMsU0FBUyxDQUFFLE1BQWMsRUFBRSxNQUFjLEVBQUUsT0FBZSxJQUM1RCxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUduRCxnQ0FBZ0M7QUFDaEMsU0FBUyxXQUFXLENBQUUsSUFBVTtJQUM1QixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RELElBQUksQ0FBQyxRQUFRO1FBQUUsT0FBTztJQUV0QixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLE9BQU8sQ0FBQyxTQUFTLEdBQUc7VUFDZCxJQUFJLENBQUMsS0FBSztZQUNSLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDO0lBQ3hDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFbEMsQ0FBQztBQUVELDJCQUEyQjtBQUMzQixNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN4RSxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFcEUsb0JBQW9CO0FBQ3BCLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQixXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LXdlYnBhY2stYWN0aXZpdHkvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZXByZXNlbnRzIGEgYm9vayBpbiB0aGUgbGlicmFyeVxyXG5jbGFzcyBCb29rIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBhdXRob3I6IHN0cmluZztcclxuICAgIHllYXI6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgeWVhcjogbnVtYmVyKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuYXV0aG9yID0gYXV0aG9yO1xyXG4gICAgICAgIHRoaXMueWVhciA9IHllYXI7XHJcbiAgICB9XHJcbn1cclxuLy8gYW4gaW50ZXJmYWNlIHRoYXQgZGVzY3JpYmVzdGhlIHNoYXBlIG9mIGEgcmV2aWV3XHJcbmludGVyZmFjZSBSZXZpZXcge1xyXG4gICAgYm9va0lkOiBudW1iZXI7XHJcbiAgICByYXRpbmc6IG51bWJlcjtcclxuICAgIGNvbW1lbnQ6IHN0cmluZztcclxufVxyXG5cclxuLy8gc3RvcmVzIGFsbCB0aGUgcmV2aWV3cyBhZGRlZCBkdXJpbmcgcnVudGltZVxyXG5jb25zdCByZXZpZXdzOiBSZXZpZXdbXSA9IFtdO1xyXG5cclxuLy8gY3JlYXRlcyBhIG5ldyByZXZpZXcgb2JqZWN0IGFuZCBhZGRzIGl0IHRvIHRoZSByZXZpZXdzIGFycmF5XHJcbmZ1bmN0aW9uIGFkZFJldmlldyAoYm9va0lkOiBudW1iZXIsIHJhdGluZzogbnVtYmVyLCBjb21tZW50OiBzdHJpbmcpOiBcclxudm9pZCB7IHJldmlld3MucHVzaCh7IGJvb2tJZCwgcmF0aW5nLCBjb21tZW50IH0pOyB9XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gdG8gZGlzcGxheSBib29rIGluZm9cclxuZnVuY3Rpb24gZGlzcGxheUJvb2sgKGJvb2s6IEJvb2spOiB2b2lkIHtcclxuICAgIGNvbnN0IGJvb2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib29rLWxpc3RcIik7XHJcbiAgICBpZiAoIWJvb2tMaXN0KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgYm9va0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBib29rRGl2LmlubmVySFRNTCA9IGBcclxuICAgIDxoMj4ke2Jvb2sudGl0bGV9PC9oMj5cclxuICAgIDxwPkJ5ICR7Ym9vay5hdXRob3J9LCAke2Jvb2sueWVhcn08L3A+YDtcclxuICAgIGJvb2tMaXN0LmFwcGVuZENoaWxkKGJvb2tEaXYpO1xyXG5cclxufVxyXG5cclxuLy8gY3JlYXRlIHNvbWUgYm9vayBvYmplY3RzXHJcbmNvbnN0IGJvb2sxID0gbmV3IEJvb2soXCJUaGUgR3JlYXQgR2F0c2J5XCIsIFwiRi4gU2NvdHQgRml0emdlcmFsZFwiLCAxOTI1KTtcclxuY29uc3QgYm9vazIgPSBuZXcgQm9vayhcIlRvIEtpbGwgYSBNb2NraW5nYmlyZFwiLCBcIkhhcnBlciBMZWVcIiwgMTk2MCk7XHJcblxyXG4vLyBkaXNwbGF5IHRoZSBib29rc1xyXG5kaXNwbGF5Qm9vayhib29rMSk7XHJcbmRpc3BsYXlCb29rKGJvb2syKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9