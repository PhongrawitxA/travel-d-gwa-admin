import React, { useEffect, useState } from 'react'
import './SideMenu.css'
import MenuItem from './MenuItem'
import { SideMenuData } from './SideMenuData'

import Logo_Short from '../../Assets/Images/Logo_Short.png'
import Logo_FullText from '../../Assets/Images/Logo_FullText.png'

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
                <img src={Logo_FullText} alt='webscript' />
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

            {/* <ul>
                <li>
                    <a className='menu-item'>
                        <div className='menu-icon'>
                            <MdDashboard />
                        </div>
                        <span>หน้าหลัก</span>
                    </a>
                </li>
                <li>
                    <a className='menu-item'>
                        <div className='menu-icon'>
                            <FaUser />  
                        </div>
                        <span>ผู้ใช้ & พาร์ทเนอร์</span>
                    </a>
                </li>
                <li>
                    <a className='menu-item'>
                        <div className='menu-icon'>
                            <IoCheckbox />
                        </div>
                        <span>อนุมัติพาร์ทเนอร์</span>
                    </a>
                    <ul className='sub-menu'>
                        <li>
                            <a>พาร์ทเนอร์ที่พัก</a>
                        </li>
                        <li>
                            <a>พาร์ทเนอร์เช่ารถ</a>
                        </li>
                        <li>
                            <a>พาร์ทเนอร์รถ รับ - ส่ง</a>
                        </li>
                        <li>
                            <a>พาร์ทเนอร์กิจกรรม</a>
                        </li>
                    </ul>
                </li>
            </ul> */}
        </div>
    </div>
  )
}

export default SideMenu