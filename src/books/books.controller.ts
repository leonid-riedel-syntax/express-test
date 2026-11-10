import { Request, Response, NextFunction } from "express";
import { getAllBooks, getBookById } from "./books.service";

export async function getAllBooksHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const data = await getAllBooks();
        res.status(200).json({ success: true, data });
    } catch (error) {
        next(error);
    }
}

export async function getBookByIdHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const book = await getBookById(Number(id));
        if (!book) return res.status(404).json({ success: false, message: `No book with id ${id} found!`});
        res.status(200).json({ success: true, data: book });
    } catch (error) {
        next(error);
    }
}