import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar/Sidebar';
import Topbar from '../Components/Topbar/Topbar';
import './AppLayout.css';

const AppLayout = () => {
  return (
    <div className='AppLayout'>
        <Sidebar />
        <Topbar />
        <Outlet />
    </div>
  )
}

export default AppLayout;