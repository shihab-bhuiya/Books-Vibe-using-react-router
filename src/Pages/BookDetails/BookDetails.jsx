import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const params = useParams();
    console.log("id of",params);

    const books = useLoaderData();
    // console.log(books); 

    const expectedBooks = books.find((book) => book.bookId == params)
    console.log(expectedBooks,"my BOok")
    return (
        <div>
            Book Details
        </div>
    );
};

export default BookDetails;