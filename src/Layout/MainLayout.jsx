import React from 'react';
import NavBar from '../Component/shared/NaBar/NavBar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;