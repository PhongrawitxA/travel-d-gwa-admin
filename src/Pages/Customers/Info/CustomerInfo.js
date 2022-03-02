import React from 'react'
import './CustomerInfo.css'
import DefaultUserImage from '../../../Assets/Images/default_user.jpg'

import { GrFormPrevious } from 'react-icons/gr'
import { HiArrowCircleUp } from 'react-icons/hi'

export const CustomerInfo = () => {
  return (
    <div className='Customer-info'>
        <div className='Head'>
            <h2>
              <a href="javascript:javascript:history.go(-1)"><GrFormPrevious size={50} /></a>
              {'ผู้ใช้'} / ข้อมูล
            </h2>
            <div className='Container'>
              <div className='Left'>
                <h4>ข้อมูลทั่วไป</h4>
                <div className='Info'>
                  <img src={DefaultUserImage} alt="รูปโปรไฟล์" width="300" height="300" />
                  <ul className='Info-text'>
                    <li className='Row'><div className='Title'>ชื่อ</div><div className='User-info'>{'วัฒนศิริ'}</div></li>
                    <li className='Row'><div className='Title'>นามสกุล</div><div className='User-info'>{'อุปรักขิตานนท์'}</div></li>
                    <li className='Row'><div className='Title'>บทบาท</div><div className='User-info'>{'ผู้ใช้ทั่วไป'}</div></li>
                    <li className='Row'><a href={'upgrade_'} id='Upgrade'><HiArrowCircleUp size={50} />&nbsp; <div>อัปเกรดเป็นบทบาทแอดมิน</div></a></li>
                  </ul>               
                </div>
                <div className='Contact'>
                  <h4>รายละเอียดติดต่อ</h4>
                  <ul className='Info-text'>
                    <li className='Row'><div className='Title'>เบอร์โทรศัพท์</div><div className='User-info'>{'0970405681'}</div></li>
                    <li className='Row'><div className='Title'>อีเมล</div><div className='User-info'>{'wattanasiri.449@mail.kmutt.ac.th'}</div></li>
                  </ul>               
                </div>
              </div> 
              <div className='Right'>       
                <div className='Address'>
                  <h4>ข้อมูลที่อยู่</h4>
                  <ul className='Info-text'>
                    <li className='Row'><div className='Title'>ประเทศ</div><div className='User-info'>{'ไทย'}</div></li>
                    <li className='Row'><div className='Title'>จังหวัด</div><div className='User-info'>{'กรุงเทพมหานคร'}</div></li>
                    <li className='Row'><div className='Title'>เขต/อำเภอ</div><div className='User-info'>{'ภาษีเจริญ'}</div></li>
                    <li className='Row'><div className='Title'>แขวง/ตำบล</div><div className='User-info'>{'บางด้วน'}</div></li>
                    <li className='Row'><div className='Title'>บ้านเลขที่</div><div className='User-info'>{'28 ซอยเพชรเกษม 48 แยก 17'}</div></li>
                  </ul>               
                </div>
                <div className='Card'>
                  <h4>ข้อมูลบัตรชำระเงิน</h4>
                  <ul className='Info-text'>
                    <li className='Row'><div className='Title'>เลขที่บัตรที่ 1</div><div className='User-info'>{'0000 0000 0000 1234'}</div></li>
                    <li className='Row'><div className='Title'>ชื่อบนบัตรที่ 1</div><div className='User-info'>{'วัฒนศิริ อุปรักขิตานนท์'}</div></li>

                  </ul>               
                </div>
              </div>               
            </div>
        </div>
    </div>
  )
}