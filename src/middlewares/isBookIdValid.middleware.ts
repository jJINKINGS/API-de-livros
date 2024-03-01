import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import { booksDatabase } from "../database/database";

export class IsBookIdValid {
    static execute(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;

        const existingBook = booksDatabase.find(book => book.id === Number(id));

        if(!existingBook){
            throw new AppError(404, "Book not found.");
        }

        res.locals.book = existingBook;

        next();
    }
}