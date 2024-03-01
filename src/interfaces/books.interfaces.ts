import { Request, Response } from "express";

export interface IBook {
    id: number;
    name: string;
    pages: number;
    category?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IBooksServices {
    post(body: TCreateBody): IBook;
    get(): IBook[];
    getOne(book: IBook): IBook;
    patch(body: TUpdateBody, id: number): IBook;
    delete(id: number): void;
}

export interface IBooksControllers {
    create(req: Request, res: Response):Response;
    read(req: Request, res: Response):Response;
    readOne(req: Request, res: Response):Response;
    update(req: Request, res: Response):Response;
    delete(req: Request, res: Response):Response;
}

export type TCreateBody = Omit<IBook, "id" | "createdAt" | "updatedAt" >;
export type TUpdateBody = Partial<TCreateBody>;