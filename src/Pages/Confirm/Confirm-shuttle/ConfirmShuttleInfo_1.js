import React , { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import './ConfirmShuttleInfo_1.css'
import { SampleContext } from '../../../contexts/SampleContext'

import { Button, Modal, render} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { GrFormPrevious } from 'react-icons/gr'
import { FaWindowClose, FaCheckSquare } from 'react-icons/fa'


export const ConfirmShuttleInfo_1 = () => {

    const {Url} = useContext(SampleContext)

    const {id} = useParams();
    const [data,setData] = useState([]);
    const getShuttleInfo = (id) => {
        axios({
            method : "GET",
            url: Url + "/admin/getshuttlepartner/" + id,
        }).then( res => {
                setData(res.data);

        });
    }
    useEffect(()=> {
        (async () => {
            await getShuttleInfo(id);
        })();
    },[]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [show2, setShow2] = useState(false);
  
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const approveShuttlePartner = (id) => {
        axios({
            method : "PUT",
            url: Url+"/admin/shuttleregister/approve/" + id,
          }).then( res => {
            window.location.href='/confirm-partner/shuttle';
          });
    }

    const rejectShuttlePartner = (id) => {
        axios({
            method : "DELETE",
            url: Url+"/admin/shuttleregister/reject/" + id,
          }).then( res => {
            window.location.href='/confirm-partner/shuttle';
          });
    }

    return (
        <div className='ConfirmShuttle-info-1'>
            <div className='Head'>
                <h2>
                    <a href="/confirm-partner/shuttle"><GrFormPrevious size={50} /></a>
                    อนุมัติพาร์ทเนอร์รถ รับ-ส่ง / ข้อมูล-1
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
                                อีเมล : {data.email}
                            </Modal.Body>
                            <Modal.Footer className="modalFooter">
                                <Button variant="secondary" className="modalButtonSecondary" onClick={handleClose}>ยกเลิก</Button>
                                <Button variant="primary" className="modalButtonPrimary" onClick={() => {rejectShuttlePartner(id)}}>ยืนยัน</Button>
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
                                อีเมล : {data.email}
                            </Modal.Body>
                            <Modal.Footer className="modalFooter">
                                <Button variant="secondary" className="modalButtonSecondary" onClick={handleClose2}>ยกเลิก</Button>
                                <Button variant="primary" className="modalButtonPrimary" onClick={() => {approveShuttlePartner(id)}}>ยืนยัน</Button>
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
                            <li className='Row'><div className='Title'>ชื่อผู้ใช้</div><div className='User-info'>{(data.usernameID || []).realname + ' ' + (data.usernameID || []).surname}</div></li>
                            {/* <li className='Row'><div className='Title'>นามสกุล</div><div className='User-info'>{'data.surname'}</div></li> */}
                            <li className='Row'><div className='Title'>อีเมล</div><div className='User-info'>{data.email}</div></li>
                            <li className='Row'><div className='Title'>เบอร์โทรศัพท์</div><div className='User-info'>{data.phone}</div></li>
                        </ul> 
                        <h4>ข้อมูลเกี่ยวรถ รับ - ส่ง</h4>
                        <ul className='Info-text'>
                            <li className='Row'><div className='Title'>บริเวณที่รับ - ส่ง</div><div className='User-info'>{data.province + ' - '+data.district}</div></li>
                            <li className='Row'><div className='Title'>รุ่นของรถที่ขับ</div><div className='User-info'>{data.car_brand}</div></li>
                            <li className='Row'><div className='Title'>ทะเบียนรถ</div><div className='User-info'>{data.car_registration}</div></li>
                        </ul>       
                    </div>
                </div> 
                <div className='Right'>
                </div>   
            </div>       
            <div className='Footer'>
                <button className='Button' id='Next' href='#' disabled><span>ย้อนกลับ</span></button>
                <button className='Button' id='Next' href={'/Activity-partner/info-2/' + id} disabled><span>ถัดไป</span></button>
            </div>    
        </div>
    )
}