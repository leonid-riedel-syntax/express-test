import { Router } from "express";
import { getAllBooksHandler, getBookByIdHandler } from "./books.controller";

const router = Router();

router.get("/", getAllBooksHandler);
router.get("/:id", getBookByIdHandler);

export default router;