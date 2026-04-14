import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';

const ListedReadList = () => {
     const {storeBooks} = useContext(BookContext);


     if(storeBooks.length === 0){
       return <div className='bg-gray-300 text-center text-4xl'>
            <h2>No Data Found</h2>
        </div>
     }

    return (
        <div>
            <h2>Listed Read List</h2>


<div className="max-w-5xl mx-auto space-y-6">
  {storeBooks.map((book) => (
    <div
      key={book.bookId}
      className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm"
    >
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Book Image */}
        <div className="w-full md:w-44 flex justify-center">
          <img
            src={book.image}
            alt={book.bookName}
            className="w-40 h-52 object-cover rounded-xl shadow"
          />
        </div>

        {/* Book Details */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {book.bookName}
          </h2>

          <p className="text-gray-700 text-lg mb-4">
            By : <span className="font-medium">{book.author}</span>
          </p>

          {/* Tags + Year */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-semibold text-gray-800">Tag</span>

            {book.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}

            <span className="text-gray-600 text-sm">
              📍 Year of Publishing: {book.yearOfPublishing}
            </span>
          </div>

          {/* Publisher + Pages */}
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm mb-6">
            <span>👥 Publisher: {book.publisher}</span>
            <span>📄 Page {book.totalPages}</span>
          </div>

          <hr className="border-gray-200 mb-6" />

          {/* Bottom Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="px-5 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
              Category: {book.category}
            </button>

            <button className="px-5 py-2 rounded-full bg-orange-100 text-orange-500 text-sm font-medium">
              Rating: {book.rating}
            </button>

            <button className="px-6 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white font-medium transition">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
    );
};

export default ListedReadList;