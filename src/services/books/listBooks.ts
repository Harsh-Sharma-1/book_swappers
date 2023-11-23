import { BookCardType } from "@/components/types/book";
import axios from "axios";

export interface Result {
    id: number;
    title: string;
    authors: Author[];
    translators: Translator[];
    subjects: string[];
    bookshelves: string[];
    languages: string[];
    copyright: boolean;
    media_type: string;
    formats: Formats;
    download_count: number;
}

export interface Author {
    name: string;
    birth_year: number;
    death_year: number;
}

export interface Translator {
    name: string;
    birth_year?: number;
    death_year?: number;
}

export interface Formats {
    "application/x-mobipocket-ebook": string;
    "application/epub+zip": string;
    "text/html": string;
    "application/octet-stream"?: string;
    "image/jpeg": string;
    "text/plain"?: string;
    "text/plain; charset=us-ascii"?: string;
    "application/rdf+xml": string;
    "text/html; charset=utf-8"?: string;
    "text/plain; charset=utf-8"?: string;
    "text/html; charset=iso-8859-1"?: string;
    "text/plain; charset=iso-8859-1"?: string;
}

export const listBooks = async (
    page: number = 1,
    category: string | null = null
) => {
    if (!category) {
        return axios.get<Result[]>(
            `https://book-data-f2ug.onrender.com/data/?_page=${page}&_limit=10`
        );
    } else {
        return axios.get<Result[]>(
            `https://book-data-f2ug.onrender.com/data/?_page=${page}&_limit=10&subjects_like=${category}`
        );
    }
};

export const getBookById = async (id: string) => {
    return axios.get<Result[]>(
        `https://book-data-f2ug.onrender.com/data/?id=${id}`
    );
};

export const getBookBySearch = async (searchString: string) => {
    return axios.get<Result[]>(
        `https://book-data-f2ug.onrender.com/data/?title_like=${searchString}`
    );
};

export function bookDataConvertor(book: Result): BookCardType {
    return {
        title: book.title,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus massa ante, consequat ut enim ac..",
        imageLink: book.formats["image/jpeg"],
        id: book.id,
        author:
            book.authors && book.authors.length > 0
                ? book.authors[0].name
                : "Author",
    };
}
