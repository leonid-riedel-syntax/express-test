import { BookNotFoundError } from "./books.errors";

interface Book {
    id: number;
    title: string;
    author: string;
}

const books = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
]

export async function getAllBooks() {
    return books;
}

export async function getBookById(id: number) {
    const book = books.find(book => book.id === id);
    if (!book) throw new BookNotFoundError(id);
    return book;
}