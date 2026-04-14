import React, { useContext} from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../Context/BookContext';

const BookDetails = () => {
    const { id } = useParams();
    const books = useLoaderData();

    const {handleWishList ,handleMarkAsRead} = useContext(BookContext);



    const expectedBooks = books.find(
        (book) => book.bookId == id
    );

    if (!expectedBooks) {
        return <p className="text-center mt-10">Book not found</p>;
    }

   

    const {
        image,
        bookName,
        author,
        category,
        review,
        tags,
        totalPages,
        publisher,
        yearOfPublishing,
        rating
    } = expectedBooks;

    return (
        <div className="flex justify-center p-6">
            <div className="flex flex-col lg:flex-row gap-10 bg-base-100 shadow-xl rounded-2xl p-6 max-w-6xl">

                {/* IMAGE SECTION */}
                <div className="flex justify-center items-center">
                    <img
                        src={image}
                        alt={bookName}
                        className="w-135 h-180 object-cover rounded-xl shadow"
                    />
                </div>

                {/* DETAILS SECTION */}
                <div className="space-y-4 flex-1">

                    <h1 className="text-3xl font-bold">{bookName}</h1>

                    <p className="text-gray-600">By: {author}</p>

                    <p className="border-y py-2 font-medium">
                        {category}
                    </p>

                    <p className="text-sm text-gray-700">
                        <span className="font-semibold">Review:</span> {review}
                    </p>

                    {/* TAGS */}
                    <div className="flex gap-2 flex-wrap">
                        {tags?.map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* INFO GRID */}
                    <div className="border-t pt-4 space-y-2">

                        <div className="flex justify-between">
                            <span>Pages:</span>
                            <span>{totalPages}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Publisher:</span>
                            <span>{publisher}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Year:</span>
                            <span>{yearOfPublishing}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Rating:</span>
                            <span>{rating}</span>
                        </div>

                    </div>

                    {/* BUTTONS */}
                    <div className="flex gap-4 pt-4">
                        <button className="btn btn-outline" onClick={()=>handleMarkAsRead (expectedBooks)}>
                         Add to  Read
                        </button>
                        <button className="btn btn-primary" onClick={()=> handleWishList(expectedBooks)}>
                            Wishlist
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;