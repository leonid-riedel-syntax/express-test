import express from "express";
import booksRouter from "./books/books.router";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/status", (req, res) => {
    res.status(200).json({success: true, message: "Server is running"})
})

app.use("/books", booksRouter);

export default app;