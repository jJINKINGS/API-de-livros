import { Router } from "express";
import { BooksControllers } from "../controllers/books.controllers";
import { IsBookNameValid } from "../middlewares/isBookNameValid.middleware";
import { IsBookIdValid } from "../middlewares/isBookIdValid.middleware";

export const booksRouter = Router();

const booksControllers = new BooksControllers();

booksRouter.post("/", IsBookNameValid.execute, booksControllers.create);
booksRouter.get("/", booksControllers.read);
booksRouter.get("/:id", IsBookIdValid.execute, booksControllers.readOne);
booksRouter.patch("/:id", IsBookIdValid.execute, IsBookNameValid.execute, booksControllers.update);
booksRouter.delete("/:id", IsBookIdValid.execute, booksControllers.delete);