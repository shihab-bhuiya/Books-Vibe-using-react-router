import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({book}) => {
    console.log("Book",book);
    return (
        <Link to={`/bookDetails/${book.bookId}`}  className='mb-5'>
            <div className="card bg-base-100  shadow-sm">
  <figure  className='p-10'>
    <img
      src={book.image}
      alt={book.bookName} className='rounded-2xl h-90' />
  </figure >
  <div className="card-body">

    <div className='flex items-center gap-2'> 
    {
        book.tags.map((tag,idx) => {
            return(
             <div className="badge badge-soft badge-success text-lg" key={idx}>{tag}</div>

            )
        })
    }</div>
      
    <h2 className="card-title text-2xl font-bold">
      {book.bookName}
    </h2>

    <p className='font-semibold text-lg'> By: {book.author}</p>


    <div className="card-actions justify-between border-t-2 pt-4">
      <div className="badge font-semibold text-xl">{book.category}</div>
      <div className="badge text-xl ">{book.rating} <FaRegStar /></div>
    </div>
  </div>
</div>
        </Link>
    );
};

export default Book;