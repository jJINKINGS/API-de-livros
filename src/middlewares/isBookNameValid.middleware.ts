import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import { booksDatabase } from "../database/database";

export class IsBookNameValid {
    static execute(req: Request, res: Response, next: NextFunction) {
        const bookSameName = booksDatabase.some(book => book.name === req.body.name);

        if(bookSameName){
            throw new AppError(409, "Book already registered.");
        }

        next();
    }
}