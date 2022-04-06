import React , {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './AccommodationInfo_3.css'

import { GrFormPrevious } from 'react-icons/gr'
import { HiArrowCircleUp } from 'react-icons/hi'
import { Button } from 'react-bootstrap';


export const AccommodationInfo_3 = () => {
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
    <div className='AccommodationPartner-info-3'>
        <div className='Head'>
            <h2>
              <a href="/accommodation-partner"><GrFormPrevious size={50} /></a>
              พาร์ทเนอร์ที่พัก / ข้อมูล-3
            </h2>
        </div>
        <div className='Container'>
            <div className='Left'>
                <div className='Detail'>
                    <h4>ราคา</h4>
                    <ul className='Info-text'>
                        <li className='Row'><div className='Detail-info'>{'THB 2,000 จำนวนผู้เข้าพักสูงสุดไม่เกิน 5 ท่าน'}</div></li>
                    </ul>
                    <h4>วิธีการรับเงินค่าที่พัก</h4>
                    <ul className='Info-text'>
                        <li className='Row'><div className='Detail-info'>{'โอนเงินเข้าบัญชีธนาคารหลังจากที่ลูกค้าเช็คเอาต์เราจะโอนเงินเข้าบัญชีธนาคารของท่านโดยตรงด้วยระบบการชำระเงินที่ปลอดภัยของเรา'}</div></li>
                    </ul>
                    <h4>เงื่อนไขการจองที่พัก</h4>
                    <ul className='Info-text'>
                        <li className='Row'><div className='Detail-info'>{'- จองได้ทันที ผู้เข้าพักจองที่พักได้โดยไม่ต้องส่งคำขอจอง'}</div></li>
                        <li className='Row'><div className='Detail-info'>{'- ไม่กำหนดระยะเวลาที่ลูกค้าจองที่พักล่วงหน้าได้'}</div></li>
                        <li className='Row'><div className='Detail-info'>{'- จำนวนคืนขั้นต่ำต่อการเข้าพัก กำหนดขั้นต่ำไว้  1 คืน'}</div></li>
                        <li className='Row'><div className='Detail-info'>{'- ไม่จำกัดจำนวนคืนสูงสุดในการเข้าพัก'}</div></li>
                    </ul>       
                </div>
            </div> 
            <div className='Right'>
                <div className='Map'>
                    <h4>นโยบายการยกเลิกการจอง</h4>
                    <ul className='Info-text'>
                        <li className='Row'><div className='Detail-info'>{'ยืดหยุ่นให้ผู้เข้าพักสามารถยกเลิกการจองได้จนถึง 1 วันก่อนวันเช็คอิน โดยท่านจะได้รับเงินคืน 100% ในกรณีที่ลูกค้าไม่ไปเข้าพักท่านจะได้รับค่าจองที่พักคืน 100%'}</div></li>
                    </ul> 
                </div>
            </div>   
        </div>       
        <div className='Footer'>
            <Button className='Button' id='Back' href={'/accommodation-partner/info-2/' + id}>ย้อนกลับ</Button>
            <Button className='Button' id='Next' href={'/accommodation-partner/info-4/' + id}><span>ถัดไป</span></Button>
        </div>    
    </div>
  )
}