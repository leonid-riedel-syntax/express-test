import { Request, Response, NextFunction } from "express";

export async function requireApiKey(req: Request, res: Response, next: NextFunction) {
    const { apiKey } = req.query;

    if (apiKey !== "123456") {
        return res.status(401).json({ success: false, error: "API Key wrong or missing."})
    }

    next();
}