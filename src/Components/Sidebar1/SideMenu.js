import React, { useEffect, useState } from 'react'
import './SideMenu.css'
import MenuItem from './MenuItem'
import { SideMenuData } from './SideMenuData'

import Logo_Short from '../../Assets/Images/Logo_Short.png'
import Logo_FullText from '../../Assets/Images/Logo_FullText.png'
import Logo from '../../Assets/Images/Logo.png'
import Logo_bg from '../../Assets/Images/Logo_bg.png'
import Logo_blue from '../../Assets/Images/Logo_blue.png'
import Logo_blue_plane from '../../Assets/Images/Logo_blue_plane.png'

import { HiMenu } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { MdDashboard } from 'react-icons/md'
import { FaUser, FaCarSide } from 'react-icons/fa'
import { IoCheckbox } from 'react-icons/io5'


const SideMenu = (props) => {

    const [inactive, setInactive] = useState(false)

    useEffect(() => {

        if(inactive){
            document.querySelectorAll('.sub-menu').forEach(el => {
                el.classList.add('inactive')
            })
        }

        props.onCollapse(inactive);
    })

  return (
    <div className={`SideMenu ${inactive ? "inactive" : ""}`}>
        <div className='top-section'>
            <div className='logo'>
                <img src={Logo_blue_plane} alt='webscript' />
            </div>      
            <div 
                className='toggle-menu' 
                onClick={() => {
                    setInactive(!inactive)
                }}
                >
                <HiMenu className='open-menu-icon' />
                <IoClose className='close-menu-icon' />
            </div>     
        </div>
        <div className='main-menu'>
            <ul>
                {SideMenuData.map((SideMenuData, index) => (
                    <MenuItem 
                    key={index} 
                    icon={SideMenuData.icon} 
                    title={SideMenuData.title} 
                    link={SideMenuData.link} 
                    subMenu={SideMenuData.subMenu || []} 
                    onClick={() => {
                        if(inactive){
                            setInactive(false)
                        }
                    }}
                    />
                ))}
            </ul>
        </div>
    </div>
  )
}

export default SideMenu