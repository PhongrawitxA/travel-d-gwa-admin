import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const SidebarMenu = ({ item }) => {

    const [subroutes, setSubroutes] = useState(false);
    const showSubroutes = () => setSubroutes(!subroutes);

  return (
    <>
        <div>
            <Link className='row' to={item.link} onClick={item.subRoutes && showSubroutes}>
                <div id='icon'>{item.icon}</div>
                <div id='title'>{item.title}</div>
                <div id='dropdown'>
                    {item.subRoutes && subroutes 
                    ? item.iconOpened 
                    : item.subRoutes 
                    ? item.iconClosed
                    : null}
                </div>
            </Link>
            {subroutes && item.subRoutes.map((item, index) => {
                return (
                    <Link className='row-dropdown' to={item.Link} key={index}>
                        <div id='title'>{item.title}</div>
                    </Link>
                )
            })}
        </div>
    </>
  )
}

export default SidebarMenu