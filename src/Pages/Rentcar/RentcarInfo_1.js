import React , {useState,useEffect,useContext} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {SampleContext} from '../../contexts/SampleContext';

import './RentcarInfo_1.css'
import { Button, Modal, render} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { GrFormPrevious } from 'react-icons/gr'
import { AiFillEdit } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'

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

    useEffect(()=> {
        (async () => {
            await getPartnerInfo(id);
        })();
    },[]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='RentcarPartner-info-1'>
            <div className='Head'>
                <h2>
                    <a href="/rentcar-partner"><GrFormPrevious size={50} /></a>
                    พาร์ทเนอร์เช่ารถ / ข้อมูล-1
                </h2>
                <div className='Button'>
                    <>
                        <a className='Edit' href={'/rentcar-partner/edit/info/' + id}><AiFillEdit size={40} />&nbsp; <div>แก้ไขข้อมูล</div></a>
                    </>
                    <>
                        <a onClick={handleShow} className='Delete'><FaTrash size={40} />&nbsp; <div>ลบพาร์ทเนอร์</div></a>

                        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                            <Modal.Header className="modalHeader">
                                <Modal.Title  className="modalTitle">คุณต้องการลบพาร์ทเนอร์เช่ารถ ?</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="modalBody">
                                ชื่อบริษัท : {carInfo.car_partnername} <br/>
                                ชื่อผู้ใช้ : {carInfo.nameOfUser} <br/>
                                อีเมล : {(carInfo.PartnerID || []).email}
                            </Modal.Body>
                            <Modal.Footer className="modalFooter">
                                <Button variant="secondary" className="modalButtonSecondary" onClick={handleClose}>ยกเลิก</Button>
                                <Button variant="primary" className="modalButtonPrimary" onClick={handleClose}>ยืนยัน</Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                </div>
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
                <h4>ข้อมูลเกี่ยวรถเช่า</h4>
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
                <button className='Button' id='Back' href='#' disabled>ย้อนกลับ</button>
                <button className='Button' id='Next' href={'/Activity-partner/info-2/' + id} disabled><span>ถัดไป</span></button>
            </div>    
        </div>
    )
}