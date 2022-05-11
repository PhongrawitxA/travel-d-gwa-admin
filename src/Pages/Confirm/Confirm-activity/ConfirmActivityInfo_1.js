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

    const getActivityPartnerInfo = (id) => {
        axios({
            method : "GET",
            url: Url + "/admin/getactivitypartner/" + id,
        }).then( res => {
                setData(res.data);
        });
    }
    useEffect(()=> {
        (async () => {
            await getActivityPartnerInfo(id);
        })();
    },[]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [show2, setShow2] = useState(false);
  
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const approveActivityPartner = (id) => {
        axios({
            method : "PUT",
            url: Url+"/admin/activityregister/approve/" + id,
          }).then( res => {
            window.location.href='/confirm-partner/activity';
          });
    }

    const rejectActivityPartner = (id) => {
        axios({
            method : "DELETE",
            url: Url+"/admin/activityregister/reject/" + id,
          }).then( res => {
            window.location.href='/confirm-partner/activity';
          });
    }

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
                                ชื่อผู้ใช้ : {(data.usernameID || []).realname + ' ' + (data.usernameID || []).surname} <br/>
                                อีเมล : {(data.usernameID || []).email}
                            </Modal.Body>
                            <Modal.Footer className="modalFooter">
                                <Button variant="secondary" className="modalButtonSecondary" onClick={handleClose}>ยกเลิก</Button>
                                <Button variant="primary" className="modalButtonPrimary" onClick={() => {rejectActivityPartner(id)}}>ยืนยัน</Button>
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
                                ชื่อผู้ใช้ : {(data.usernameID || []).realname + ' ' + (data.usernameID || []).surname} <br/>
                                อีเมล : {(data.usernameID || []).email}
                            </Modal.Body>
                            <Modal.Footer className="modalFooter">
                                <Button variant="secondary" className="modalButtonSecondary" onClick={handleClose2}>ยกเลิก</Button>
                                <Button variant="primary" className="modalButtonPrimary" onClick={() => {approveActivityPartner(id)}}>ยืนยัน</Button>
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
                            <li className='Row'><div className='Title'>ชื่อผู้ใช้</div><div className='User-info'>{(data.usernameID || []).realname}</div></li>
                            <li className='Row'><div className='Title'>นามสกุล</div><div className='User-info'>{(data.usernameID || []).surname}</div></li>
                            <li className='Row'><div className='Title'>อีเมล</div><div className='User-info'>{(data.usernameID || []).email}</div></li>
                            <li className='Row'><div className='Title'>เบอร์โทรศัพท์</div><div className='User-info'>{(data.usernameID || []).phone}</div></li>
                            <li className='Row'><div className='Title'>ชื่อสถานที่</div><div className='User-info'>{data.name}</div></li>
                            <li className='Row'><div className='Title'>ที่อยู่</div><div className='User-info'>{data.location}</div></li>
                        </ul>     
                    </div>
                </div> 
                <div className='Right'>
                <h4>ข้อมูลเกี่ยวกับกิจกรรม</h4>
                    <ul className='Info-text'>
                        {/* <li className='Row'><div className='Title'>ชื่อสถานที่</div><div className='User-info'>{'Health Land Pradit Manutham Spa Treatments'}</div></li>
                        <li className='Row'><div className='Title'>จังหวัด</div><div className='User-info'>{'กรุงเทพมหานคร'}</div></li>
                        <li className='Row'><div className='Title'>เขต/อำเภอ, แขวง/ตำบล</div><div className='User-info'>{'ภาษีเจริญ'}, {'บางด้วน'}</div></li> */}
                                                <li className='Row'><div className='Title'>รายละเอียดกิจกรรม</div><div className='User-info'>{(data.hilight || []).map((item) => {return <div>{item}</div>})}</div></li>
                        <li className='Row'><div className='Title'>สิ่งอำนวยความสะดวก</div><div className='User-info'>{(data.service || []).map((item) => {return <div>{item}</div>})}</div></li>
                        <li className='Row'><div className='Title'>ราคา</div><div className='User-info'>{'THB ' + data.price}</div></li>
                        <li className='Row'><div className='Title'>วันที่เปิดทำการ</div><div className='User-info'>{data.open_day}</div></li>
                        <li className='Row'><div className='Title'>เวลาที่เปิดทำการ</div><div className='User-info'>{data.open_time} น.</div></li>
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