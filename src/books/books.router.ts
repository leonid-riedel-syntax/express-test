import { Router } from "express";
import { getAllBooksHandler, getBookByIdHandler } from "./books.controller";
import { handleBookErrors } from "./books.errors";

const router = Router();

router.get("/", getAllBooksHandler);
router.get("/:id", getBookByIdHandler);

router.use(handleBookErrors);

export default router;