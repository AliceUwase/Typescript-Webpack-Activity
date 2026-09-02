// represents a book in the library
class Book {
    title: string;
    author: string;
    year: number;

    constructor(title: string, author: string, year: number) {
        
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
// an interface that describesthe shape of a review
interface Review {
    bookId: number;
    rating: number;
    comment: string;
}

// stores all the reviews added during runtime
const reviews: Review[] = [];

// creates a new review object and adds it to the reviews array
function addReview (bookId: number, rating: number, comment: string): 
void { reviews.push({ bookId, rating, comment }); }


// function to display book info
function displayBook (book: Book): void {
    const bookList = document.getElementById("book-list");
    if (!bookList) return;

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
