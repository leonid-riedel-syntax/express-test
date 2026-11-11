import express, { NextFunction, Response, Request } from "express";
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

app.get("/crash", async (req, res) => {
    throw new Error("alles ist kaputt!")
})

app.use((req, res) => {
    res.status(404).json({ success: false, error: "Route not found!" })
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error("[Global Error]:", err.stack);   // nur intern loggen!
    res.status(500).json({ success: false, error: "Internal Server Error" });
})

export default app;