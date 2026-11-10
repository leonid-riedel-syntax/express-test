import express from "express";
import { count } from "node:console";
import { json } from "node:stream/consumers";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/status", (req, res) => {
    res
        .status(200)
        .json(
            {
                success: true,
                message: "Server is running"
            }
        )
})

const books = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
]

app.get("/books", (req, res) => {
    res.status(200).json({
        success: true,
        count: books.length,
        data: books
    })
})

app.get("/books/:id", (req, res) => {
    const { id } = req.params;
    const data = books.find(book => book.id === Number(id))
    if (!data) return res.status(404).json({ success: false, message: `No book with id ${id} found!`});
    res.status(200).json({
        success: true,
        count: books.length,
        data: books
    })
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));