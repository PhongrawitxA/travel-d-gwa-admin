import React , {useState,useEffect,useContext} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import './RentcarInfo_1.css'

import { GrFormPrevious } from 'react-icons/gr'
import { HiArrowCircleUp } from 'react-icons/hi'
import { Button } from 'react-bootstrap';
import {SampleContext} from '../../contexts/SampleContext';

export const RentcarInfo_1 = () => {
    const {Url} = useContext(SampleContext)
    const {id} = useParams();
    const [carInfo,setCarInfo] = useState([])
    const getPartnerInfo = (id) => {
        axios({
            method : "GET",
            url: Url+"/admin/getrentcarpartner/" + id,
        }).then((res) => {
            console.log(res.data[0])
            setCarInfo(res.data[0]);
        });
    }

    // const show = () => {
    //     console.log(carInfo.PartnerID.email);
    // }

    useEffect(()=> {
        (async () => {
            await getPartnerInfo(id);
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
                            <li className='Row'><div className='Title'>ชื่อบริษัท</div><div className='User-info'>{carInfo.car_partnername}</div></li>
                            <li className='Row'><div className='Title'>ที่อยู่บริษัท</div><div className='User-info'>{carInfo.car_location}</div></li>
                            <li className='Row'><div className='Title'>ชื่อผู้ใช้</div><div className='User-info'>{carInfo.nameOfUser}</div></li>
                            {/* <li className='Row'><div className='Title'>นามสกุล</div><div className='User-info'>{'surname'}</div></li> */}
                            <li className='Row'><div className='Title'>อีเมล</div><div className='User-info'>{(carInfo.PartnerID || []).email}</div></li>
                            <li className='Row'><div className='Title'>เบอร์โทรศัพท์</div><div className='User-info'>{(carInfo.PartnerID || []).phone}</div></li>
                        </ul>     
                    </div>
                </div> 
                <div className='Right'>
                <h4>ข้อมูลเกี่ยวรถ รับ - ส่ง</h4>
                    <ul className='Info-text'>
                        <li className='Row'><div className='Title'>รุ่นของรถ</div><div className='User-info'>{carInfo.car_brand + ' ' +carInfo.car_name}</div></li>
                        <li className='Row'><div className='Title'>จำนวน</div><div className='User-info'>{carInfo.car_counting+' คัน'}</div></li>
                        <li className='Row'><div className='Title'>ราคาต่อวัน</div><div className='User-info'>{'THB '+carInfo.car_price}</div></li>
                        <li className='Row'><div className='Title'>ข้อมูลรถ</div><div className='User-info'>ปีจดทะเบียน {carInfo.car_registration_year} <br/> จำนวนผู้โดยสาร {carInfo.car_nunber_sit} <br/> กระเป๋าใบใหญ่ {carInfo.car_nunber_bigbag} <br/> กระเป๋าใบเล็ก {carInfo.car_nunber_smallbag}</div></li>
                        <li className='Row'><div className='Title'>อุปกรณ์ภายในรถ</div><div className='User-info'>{(carInfo.car_service || []).map((item) => {return <div>{item}</div>})} </div></li>
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