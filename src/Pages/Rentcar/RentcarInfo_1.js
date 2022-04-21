import React , {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './RentcarInfo_1.css'

import { GrFormPrevious } from 'react-icons/gr'
import { HiArrowCircleUp } from 'react-icons/hi'
import { Button } from 'react-bootstrap';


export const RentcarInfo_1 = () => {
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
    <div className='RentcarPartner-info-1'>
        <div className='Head'>
            <h2>
              <a href="/rentcar-partner"><GrFormPrevious size={50} /></a>
              พาร์ทเนอร์เช่ารถ / ข้อมูล-1
            </h2>
        </div>
        <div className='Container'>
            <div className='Left'>
                <div className='Detail'>
                    <h4>ข้อมูลบริษัท</h4>
                    <ul className='Info-text'>
                        <li className='Row'><div className='Title'>ชื่อบริษัท</div><div className='User-info'>{'คิทตี้ จำกัด มหาชน'}</div></li>
                        <li className='Row'><div className='Title'>ที่อยู่บริษัท</div><div className='User-info'>{'123/456 Home เขตธนบุรี จังหวัด กรุงเทพมหานคร 10600'}</div></li>
                        <li className='Row'><div className='Title'>ชื่อผู้ใช้</div><div className='User-info'>{data.realname}</div></li>
                        <li className='Row'><div className='Title'>นามสกุล</div><div className='User-info'>{data.surname}</div></li>
                        <li className='Row'><div className='Title'>อีเมล</div><div className='User-info'>{data.email}</div></li>
                        <li className='Row'><div className='Title'>เบอร์โทรศัพท์</div><div className='User-info'>{data.phone}</div></li>
                    </ul>     
                </div>
            </div> 
            <div className='Right'>
            <h4>ข้อมูลเกี่ยวรถ รับ - ส่ง</h4>
                <ul className='Info-text'>
                    <li className='Row'><div className='Title'>รุ่นของรถ</div><div className='User-info'>{'Honda'}</div></li>
                    <li className='Row'><div className='Title'>จำนวน</div><div className='User-info'>{'10 คัน'}</div></li>
                    <li className='Row'><div className='Title'>ราคาต่อวัน</div><div className='User-info'>{'THB 2,200'}</div></li>
                    <li className='Row'><div className='Title'>ข้อมูลรถ</div><div className='User-info'>ปีจดทะเบียน {'2020'} <br/> จำนวนผู้โดยสาร {'4'} <br/> กระเป๋าใบใหญ่ {'1'} <br/> กระเป๋าใบเล็ก {'2'}</div></li>
                    <li className='Row'><div className='Title'>อุปกรณ์ภายในรถ</div><div className='User-info'>{'FM/AM Radio, Bluetooth, USB/AUX, CD/MP3'}</div></li>
                </ul>    
            </div>   
        </div>       
        <div className='Footer'>
            <Button className='Button' id='Back' href={'/Rentcar-partner/info-2/' + id} disabled>ย้อนกลับ</Button>
            <Button className='Button' id='Next' href={'/Rentcar-partner/info-4/' + id} disabled><span>ถัดไป</span></Button>
        </div>    
    </div>
  )
}