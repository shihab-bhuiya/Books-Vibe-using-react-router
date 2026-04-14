import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';

const Books = () => {
        const {storeBooks} = useContext(BookContext);
        console.log(storeBooks);


    return (
        <div>
            <h2>This is Book</h2>
        </div>
    );
};

export default Books;