import React from 'react';
import Banner from '../../Component/HomePage/Banner';
import AllBooks from '../../Component/HomePage/AllBooks';

const HomePage = () => {
    return (
        <div>
            <h2>Home Page</h2>
            <Banner/>
            <AllBooks/>
        </div>
    );
};

export default HomePage;