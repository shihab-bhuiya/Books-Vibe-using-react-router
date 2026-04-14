import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../Component/ListedBookList/ListedReadList';
import ListedWishList from '../../Component/ListedBookList/ListedWishList';


const Books = () => {
        const {storeBooks,wishList} = useContext(BookContext);
        console.log(storeBooks);
        console.log(wishList);


    return (
        <div className='container mx-auto my-4'>
         
         <div className='bg-gray-300 my-6 p-5'>
            <h1 className='text-5xl font-extrabold text-center'>Books</h1>
         </div>
           
             <Tabs>
    <TabList>
      <Tab>Read List ({storeBooks.length})</Tab>
      <Tab>Wish List ({wishList.length})</Tab>
    </TabList>

    <TabPanel>
    
        <ListedReadList/>
    </TabPanel>
    <TabPanel>
     
        <ListedWishList/>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Books;