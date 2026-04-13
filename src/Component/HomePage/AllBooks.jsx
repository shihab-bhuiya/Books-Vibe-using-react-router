import React, { use } from 'react';

const booksPromise = fetch("/booksData.json").then(res => res.json());

const AllBooks = () => {
    const books = use(booksPromise);
    console.log(books,"Books");
    return (
        <div className='my-12 text-center'>
            <h2 className='font-bold text-3xl'>Books</h2>
        </div>
    );
};

export default AllBooks;