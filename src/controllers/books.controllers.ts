import { Request, Response } from "express";
import { IBooksControllers } from "../interfaces/books.interfaces";
import { BooksServices } from "../services/books.services";

export class BooksControllers implements IBooksControllers {

    create(req: Request, res: Response): Response {
        const booksServices = new BooksServices();

        const create = booksServices.post(req.body);

        return res.status(201).json(create);
    }

    read(req: Request, res: Response): Response {
        const booksServices = new BooksServices();

        const read = booksServices.get();

        return res.status(200).json(read);
    }

    readOne(req: Request, res: Response): Response {
        const { book } = res.locals;

        const booksServices = new BooksServices();

        const readOne = booksServices.getOne(book);

        return res.status(200).json(readOne);
    }

    update(req: Request, res: Response): Response {
        const { id } = req.params;

        const booksServices = new BooksServices();

        const update = booksServices.patch(req.body, Number(id));

        return res.status(200).json(update);
    }

    delete(req: Request, res: Response): Response {
        const { id } = req.params;

        const booksServices = new BooksServices();

        booksServices.delete(Number(id));

        return res.status(204).json();
    }
}