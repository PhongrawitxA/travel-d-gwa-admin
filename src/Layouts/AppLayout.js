import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from '../Components/Sidebar/SideMenu'
import Topbar from '../Components/Topbar/Topbar';

import './AppLayout.css';

const AppLayout = () => {

  const [inactive, setInactive] = useState(false);

  return (
    <div className={`AppLayout ${inactive ? "" : "active"}`}>
        <SideMenu  
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }} />
        <Topbar />
        <Outlet />
    </div>
  )
}

export default AppLayout;