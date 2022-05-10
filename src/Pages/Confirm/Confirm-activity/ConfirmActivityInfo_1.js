import React , { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import './ConfirmActivityInfo_1.css'
import { SampleContext } from '../../../contexts/SampleContext'

import { Button, Modal, render} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { GrFormPrevious } from 'react-icons/gr'
import { FaWindowClose, FaCheckSquare } from 'react-icons/fa'

export const ConfirmActivityInfo_1 = () => {

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
        <div className='ConfirmActivity-info-1'>
            <div className='Head'>
                <h2>
                    <a href="/confirm-partner/activity"><GrFormPrevious size={50} /></a>
                    อนุมัติพาร์ทเนอร์กิจกรรม / ข้อมูล-1
                </h2>
                <div className='Button'>
                    <>
                        <a onClick={handleShow} className='Decline'><FaWindowClose size={40} />&nbsp; <div>ปฏิเสธ</div></a>

                        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="modal" >
                            <Modal.Header className="modalHeader">
                                <Modal.Title  className="modalTitle">คุณต้องการปฏิเสธพาร์ทเนอร์กิจกรรม ?</Modal.Title>
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
                                <Modal.Title  className="modalTitle">คุณต้องการอนุมัติพาร์ทเนอร์กิจกรรม ?</Modal.Title>
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
                <button className='Button' id='Next' href='#' disabled><span>ย้อนกลับ</span></button>
                <button className='Button' id='Next' href={'/Activity-partner/info-2/' + id} disabled><span>ถัดไป</span></button>
            </div>    
        </div>
    )
}