import { booksDatabase, generateId } from "../database/database";
import { IBook, IBooksServices, TCreateBody, TUpdateBody } from "../interfaces/books.interfaces";

export class BooksServices implements IBooksServices {

    post(body: TCreateBody): IBook {
        const date = new Date();

        const newBook = {
            id: generateId(),
            name: body.name,
            pages: body.pages,
            category: body.category,
            createdAt: date,
            updatedAt: date
        }

        booksDatabase.push(newBook);

        return newBook;
    }

    get(): IBook[] {
        return booksDatabase;
    }

    getOne(book: IBook): IBook {
        return book;
    }

    patch(body: TUpdateBody, id: number): IBook {
        const currentBook = booksDatabase.find(book => book.id === id) as IBook;

        const date = new Date();

        const newBook = { ...currentBook, ...body, updatedAt: date };

        const index = booksDatabase.findIndex(book => book.id === id);

        booksDatabase.splice(index, 1, newBook);
        
        return newBook;
    }

    delete(id: number): void {
        const index = booksDatabase.findIndex(book => book.id === id);
        
        booksDatabase.splice(index, 1);
    }
}