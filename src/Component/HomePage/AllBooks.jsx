import React, { use } from 'react';
import Book from './Book';

const booksPromise = fetch("/booksData.json").then(res => res.json());

const AllBooks = () => {
    const books = use(booksPromise);
    console.log(books,"Books");
    return (
        <div className='my-12  container mx-auto '>
            <h2 className='text-center font-bold text-3xl mb-5'>Books</h2>

            <div className='grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                 
                books.map((book,idx) => {
                    return(
                        <Book key={idx} book={book} />
                    )
                })
                
            }</div>
        </div>
    );
};

export default AllBooks;