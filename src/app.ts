import express from "express";
import morgan from "morgan";
import booksRouter from "./books/books.router";
import { requireApiKey } from "./middleware/requireApiKey";

const app = express();

app.use(morgan("dev"));
app.use(requireApiKey);

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/status", (req, res) => {
    res.status(200).json({success: true, message: "Server is running"})
})

app.use("/books", booksRouter);

export default app;