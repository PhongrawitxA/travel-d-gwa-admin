import React , {useState,useEffect,useContext} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './ShuttleInfo_1.css'

import { GrFormPrevious } from 'react-icons/gr'
import { HiArrowCircleUp } from 'react-icons/hi'
import { Button } from 'react-bootstrap';
import {SampleContext} from '../../contexts/SampleContext';


export const ShuttleInfo_1 = () => {
  const {Url} = useContext(SampleContext)
  const {id} = useParams();
  const [shuttle,setShuttle] = useState([]);
  const getShuttlePartnerInfo = (id) => {
    axios({
        method : "GET",
        url: Url+"/admin/getshuttlepartner/" + id,
      }).then( (res) => {
            console.log(res.data);
            setShuttle(res.data);
      });
  }
  useEffect(()=> {
    (async () => {
        await getShuttlePartnerInfo(id);
    })();
  },[]);

  return (
    <div className='ShuttlePartner-info-1'>
        <div className='Head'>
            <h2>
              <a href="/shuttle-partner"><GrFormPrevious size={50} /></a>
              พาร์ทเนอร์รถ รับ-ส่ง / ข้อมูล-1
            </h2>
        </div>
        <div className='Container'>
            <div className='Left'>
                <div className='Detail'>
                    <h4>ข้อมูลส่วนตัว</h4>
                    <ul className='Info-text'>
                        <li className='Row'><div className='Title'>ชื่อผู้ใช้</div><div className='User-info'>{(shuttle.usernameID || []).realname}</div></li>
                        <li className='Row'><div className='Title'>นามสกุล</div><div className='User-info'>{(shuttle.usernameID || []).surname}</div></li>
                        <li className='Row'><div className='Title'>อีเมล</div><div className='User-info'>{shuttle.email}</div></li>
                        <li className='Row'><div className='Title'>เบอร์โทรศัพท์</div><div className='User-info'>{(shuttle.usernameID || []).phone}</div></li>
                    </ul> 
                    <h4>ข้อมูลเกี่ยวรถ รับ - ส่ง</h4>
                    <ul className='Info-text'>
                        <li className='Row'><div className='Title'>บริเวณที่รับ - ส่ง</div><div className='User-info'>{shuttle.province + " - " + shuttle.district}</div></li>
                        <li className='Row'><div className='Title'>รุ่นของรถที่ขับ</div><div className='User-info'>{shuttle.car_brand}</div></li>
                        <li className='Row'><div className='Title'>ทะเบียนรถ</div><div className='User-info'>{shuttle.car_registration}</div></li>
                    </ul>       
                </div>
            </div> 
            <div className='Right'>
            </div>   
        </div>       
        <div className='Footer'>
            <Button className='Button' id='Back' href={'/shuttle-partner/info-2/' + id} disabled>ย้อนกลับ</Button>
            <Button className='Button' id='Next' href={'/shuttle-partner/info-4/' + id} disabled><span>ถัดไป</span></Button>
        </div>    
    </div>
  )
}