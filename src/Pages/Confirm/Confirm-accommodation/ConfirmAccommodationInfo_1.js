import React , { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import './ConfirmAccommodationInfo_1.css'
import { SampleContext } from '../../../contexts/SampleContext'
import MapImage from '../../../Assets/Images/Map.png'

import { Button, Modal, render} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { GrFormPrevious } from 'react-icons/gr'
import { FaWindowClose, FaCheckSquare } from 'react-icons/fa'

export const ConfirmAccommodationInfo_1 = () => {

    const {Url} = useContext(SampleContext)

    const {id} = useParams();
    const [data,setData] = useState([]);

    const getUserInfo = (id) => {
        axios({
            method : "GET",
            url: Url + "/admin/getuser/" + id,
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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [show2, setShow2] = useState(false);
  
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    return (
        <div className='ConfirmAccommodation-info-1'>
            <div className='Head'>
                <h2>
                    <a href="/confirm-partner/accommodation"><GrFormPrevious size={50} /></a>
                    อนุมัติพาร์ทเนอร์ที่พัก / ข้อมูล-1
                </h2>
                <div className='Button'>
                    <>
                        <a onClick={handleShow} className='Decline'><FaWindowClose size={40} />&nbsp; <div>ปฏิเสธ</div></a>

                        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="modal" >
                            <Modal.Header className="modalHeader">
                                <Modal.Title  className="modalTitle">คุณต้องการปฏิเสธพาร์ทเนอร์ที่พัก ?</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="modalBody">
                                ชื่อผู้ใช้ : {data.realname} <br/>
                                อีเมล : {data.email}
                            </Modal.Body>
                            <Modal.Footer className="modalFooter">
                                <Button variant="secondary" className="modalButtonSecondary" onClick={handleClose}>ยกเลิก</Button>
                                <Button variant="primary" className="modalButtonPrimary" onClick={handleClose}>ยืนยัน</Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                    <>
                        <a onClick={handleShow2} className='Accept'><FaCheckSquare size={40} />&nbsp; <div>อนุมัติ</div></a>

                        <Modal show={show2} onHide={handleClose2} backdrop="static" keyboard={false} >
                            <Modal.Header className="modalHeader">
                                <Modal.Title  className="modalTitle">คุณต้องการอนุมัติพาร์ทเนอร์ที่พัก ?</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="modalBody">
                                ชื่อผู้ใช้ : {data.realname} <br/>
                                อีเมล : {data.email}
                            </Modal.Body>
                            <Modal.Footer className="modalFooter">
                                <Button variant="secondary" className="modalButtonSecondary" onClick={handleClose2}>ยกเลิก</Button>
                                <Button variant="primary" className="modalButtonPrimary" onClick={handleClose2}>ยืนยัน</Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                </div>
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
                <button className='Button' id='Back' href='#' disabled>ย้อนกลับ</button>
                <a className='Button' id='Next' href={'/confirm-partner/accommodation/info-2/' + id}><span>ถัดไป</span></a>
            </div>    
        </div>
    )
}