import React from 'react';
import './Topbar.css';
import dropdownToggle from './Dropdown';
import Profile from '../../Assets/Images/ProfilePic.jpg';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

function Topbar() {
  return (
    <div className='Topbar'>
      <ul>
        {/* <li id='Chat'><a href='#'><ChatBubbleOutlineRoundedIcon style={{fontSize:30}} /></a></li>
        <li id='Notification'><a href='#'><NotificationsNoneRoundedIcon style={{fontSize:30}} /></a></li> */}
        <li id='Profile'>
          <div className='Action'>
            <div className='Profile' onClick={dropdownToggle}>
              <span style={{fontSize:18, fontWeight:700}}>Admin 1</span>
              <img src={Profile} alt="Avatar" class="Profile-pic"></img>
            </div>
            <div className='DropDown'>
              <h3>Admin1<br /><span>admin1@gmail.com</span></h3>
              <ul>
                {/* <li><AccountCircleOutlinedIcon className='Icon' /><a href='#'>โปรไฟล์</a></li>
                <li><HelpOutlineOutlinedIcon className='Icon' /><a href='#'>ความช่วยเหลือ</a></li> */}
                <li><LogoutOutlinedIcon className='Icon' /><a href='#'>ออกจากระบบ</a></li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Topbar