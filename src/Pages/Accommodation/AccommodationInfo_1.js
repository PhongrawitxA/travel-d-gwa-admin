import React , {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import MapImage from '../../Assets/Images/Map.png'
import axios from 'axios'
import './AccommodationInfo_1.css'

import { GrFormPrevious } from 'react-icons/gr'
import { HiArrowCircleUp } from 'react-icons/hi'
import { Button } from 'react-bootstrap';


export const AccommodationInfo_1 = () => {
  const {id} = useParams();
  const [data,setData] = useState([]);
  const getUserInfo = (id) => {
    axios({
        method : "GET",
        url: "http://localhost:8080/admin/getuser/" + id,
      }).then( res => {
            setData(res.data);
            console.log(data);
      });
  }
  useEffect(()=> {
    (async () => {
        await getUserInfo(id);
    })();
  },[]);

  return (
    <div className='AccommodationPartner-info-1'>
        <div className='Head'>
            <h2>
              <a href="/accommodation-partner"><GrFormPrevious size={50} /></a>
              พาร์ทเนอร์ที่พัก / ข้อมูล-1
            </h2>
        </div>
        <div className='Container'>
            <div className='Left'>
                <ul className='Info-text'>
                    <li className='Row'><div className='Title'>อีเมล</div><div className='User-info'>{data.email}</div></li>
                    <li className='Row'><div className='Title'>ชื่อผู้ใช้</div><div className='User-info'>{data.realname}</div></li>
                    <li className='Row'><div className='Title'>นามสกุล</div><div className='User-info'>{data.surname}</div></li>
                    <li className='Row'><div className='Title'>หมวดหมู่</div><div className='User-info'>{'วิลล่า'}</div></li>
                </ul>    
                <div className='Address'>
                    <h4>ข้อมูลที่อยู่</h4>
                    <ul className='Info-text'>
                        <li className='Row'><div className='User-info'>{'123 Home ห้อง 104 จังหวัด กรุงเทพฯ (10600)'}</div></li>
                    </ul>               
                </div>
                <div className='Detail'>
                    <h4>รายละเอียด</h4>
                    <ul className='Info-text'>
                        <li className='Row'><div className='Detail-info'>{'ขนาดของที่พัก 100 ตร.ม'}</div></li>
                        <li className='Row'> <div className='Detail-info'>{'จำนวนผู้เข้าห้องพัก 5'}</div></li>
                        <li className='Row'> <div className='Detail-info'>{'จำนวนห้องน้ำ 5'}</div></li>
                        <li className='Row'> <div className='Detail-info'>{'จำนวนห้องนอน 5'}</div></li>
                        <li className='Row'> <div className='Detail-info'>{'เตียงควีนไซต์ 3, เตียงเดี่ยว 2'}</div></li>
                    </ul>               
                </div>
            </div> 
            <div className='Right'>
                <div className='Map'>
                    <h4>ที่ตั้ง</h4>
                    <img src={MapImage} alt="รูปแผนที่" width="500" height="500" />
                </div>
            </div>   
        </div>       
        <div className='Footer'>
            <Button className='Button' id='Back' href='#' disabled>ย้อนกลับ</Button>
            <Button className='Button' id='Next' href={'/accommodation-partner/info-2/' + id}><span>ถัดไป</span></Button>
        </div>    
    </div>
  )
}