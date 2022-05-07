import React, { useState }  from 'react'
import "./Sidebar.css"
import SidebarMenu from './SidebarMenu'
import { SidebarData } from "./SidebarData" 
import { Link } from 'react-router-dom'

import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'

const Sidebar = () => {
 
  return (
    <div className='Sidebar'>
        <h1>TRAVELDGWA</h1>
        <div className='SidebarList'>
        {SidebarData.map((item, index) => {
            return <SidebarMenu item={item} key={index} />
        })}
        </div>
        {/* <ul className='SidebarList'>
            {SidebarData.map((val, key) => {
                return (
                    <li className='row' id={window.location.pathname === val.link ? "active" : ""} 
                    key={key}
                    onClick={() => {window.location.pathname = val.link; val.subRoutes && setSubroutes;}}>           
                        <div id='icon'>{val.icon}</div>
                        <div id='title'>{val.title}</div>
                        <div id='dropdown'>
                            {val.subRoutes && subroutes 
                            ? <RiArrowDropUpLine size={32} padding={0} /> 
                            : val.subRoutes 
                            ? <RiArrowDropDownLine size={32} />
                            : null}
                        </div>
                    </li>
                );
            })}
        </ul> */}
    </div>
  )
}

export default Sidebar