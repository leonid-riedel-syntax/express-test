import { NextFunction, Request, Response } from "express";

export class BookNotFoundError extends Error {
    constructor(bookId: number) {
        super(`Book not found: ${bookId}`)
        this.name = this.constructor.name;
    }
}

export function handleBookErrors(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof BookNotFoundError) {
        return res.status(404).json({ success: false, error: err.message });
    }
    next(err);
}