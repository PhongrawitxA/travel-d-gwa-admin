import React , {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './ActivityInfo_1.css'

import { GrFormPrevious } from 'react-icons/gr'
import { HiArrowCircleUp } from 'react-icons/hi'
import { Button } from 'react-bootstrap';


export const ActivityInfo_1 = () => {
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
    <div className='ActivityPartner-info-1'>
        <div className='Head'>
            <h2>
              <a href="/activity-partner"><GrFormPrevious size={50} /></a>
              พาร์ทเนอร์กิจกรรม / ข้อมูล-1
            </h2>
        </div>
        <div className='Container'>
            <div className='Left'>
                <div className='Detail'>
                    <h4>ข้อมูลส่วนตัว</h4>
                    <ul className='Info-text'>
                        <li className='Row'><div className='Title'>ชื่อผู้ใช้</div><div className='User-info'>{data.realname}</div></li>
                        <li className='Row'><div className='Title'>นามสกุล</div><div className='User-info'>{data.surname}</div></li>
                        <li className='Row'><div className='Title'>อีเมล</div><div className='User-info'>{data.email}</div></li>
                        <li className='Row'><div className='Title'>เบอร์โทรศัพท์</div><div className='User-info'>{data.phone}</div></li>
                    </ul>     
                </div>
            </div> 
            <div className='Right'>
            <h4>ข้อมูลเกี่ยวกับกิจกรรม</h4>
                <ul className='Info-text'>
                    <li className='Row'><div className='Title'>ชื่อสถานที่</div><div className='User-info'>{'Health Land Pradit Manutham Spa Treatments'}</div></li>
                    <li className='Row'><div className='Title'>จังหวัด</div><div className='User-info'>{'กรุงเทพมหานคร'}</div></li>
                    <li className='Row'><div className='Title'>เขต/อำเภอ, แขวง/ตำบล</div><div className='User-info'>{'ภาษีเจริญ'}, {'บางด้วน'}</div></li>
                    <li className='Row'><div className='Title'>รายละเอียดกิจกรรม</div><div className='User-info'>จองช่วงเวลาที่คุณต้องการได้อย่างง่ายดายเพื่อเพลิดเพลินกับทรีตเมนต์ที่ดีที่สุดที่ Health Land ฟื้นฟูร่างกาย จิตใจ และจิตวิญญาณด้วยการนวดผ่อนคลายโดยใช้เทคนิคไทย อโรมา หรืออายุรเวทคืนความอ่อนเยาว์ให้กับผิวหน้าด้วยทรีตเมนต์พิเศษที่เน้น ดวงตา ริ้วรอย ร่องลึก และอื่นๆ สัมผัสความสมบูรณ์แบบของสุขภาพและความสมบูรณ์ของร่างกายที่ Health Land Spa ใกล้บ้านคุณทั่วประเทศ</div></li>
                    <li className='Row'><div className='Title'>ราคา</div><div className='User-info'>{'THB 600'}</div></li>
                    <li className='Row'><div className='Title'>วันที่เปิดทำการ</div><div className='User-info'>{'จันทร์ - อาทิตย์'}</div></li>
                    <li className='Row'><div className='Title'>เวลาที่เปิดทำการ</div><div className='User-info'>{'09:00 - 21:00'} น.</div></li>
                </ul>    
            </div>   
        </div>       
        <div className='Footer'>
            <Button className='Button' id='Back' href={'/Activity-partner/info-2/' + id} disabled>ย้อนกลับ</Button>
            <Button className='Button' id='Next' href={'/Activity-partner/info-4/' + id} disabled><span>ถัดไป</span></Button>
        </div>    
    </div>
  )
}