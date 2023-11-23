"use client";
import Books from "@/components/pages/books/books";
import Navbar from "@/components/shared/navbar/navbar";
import React from "react";

type Props = {};

const BooksPage = (props: Props) => {
    return (
        <div>
            <Books />
        </div>
    );
};

export default BooksPage;
