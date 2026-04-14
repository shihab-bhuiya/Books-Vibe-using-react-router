import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({children}) => {
    const [storeBooks, setStoreBooks] = useState([]);
    const [wishList,setWishList] = useState([]);

     const handleMarkAsRead = (currentBook) => {
        // console.log("handle Book ID",id);
        const isExist = storeBooks.find(book => book.bookId == currentBook.bookId);
        console.log(currentBook,"Curren Book")
        if(isExist){
            toast.error("Already Read");
        }
        else{
            setStoreBooks([...storeBooks,currentBook]);
            toast.success(`${currentBook.bookName} is Added to Read`)
        }
    }

    const handleWishList = (currentBook) => {

        const isExitReadList = storeBooks.find(book => book.bookId == currentBook.bookId);
        if(isExitReadList){
            toast.error(`${isExitReadList.bookName} is already read`);
            return;
        }

        const isExistInWishList = wishList.find(book =>book.bookId  == currentBook.bookId);
        if(isExistInWishList){
            toast.error(`${isExistInWishList.bookName} is already in wishlist`);
        }
        else{
            toast.success( `${currentBook.bookName} is added to wishlist`);
            setWishList([...wishList,currentBook]);
        }

    }

    const context = {
        setStoreBooks,storeBooks,handleMarkAsRead,handleWishList,
    }
    
    return (
        <div>
            <BookContext.Provider value={context}>
                {children}
            </BookContext.Provider>
        </div>
    );
};

export default BookProvider;