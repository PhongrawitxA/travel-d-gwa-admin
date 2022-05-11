import React ,{ useState } from 'react'
import axios from "axios";
import './ConfirmAction.css'

import { Button, Modal, render} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { AiFillInfoCircle } from 'react-icons/ai'
import { FaTrash, FaWindowClose, FaCheckSquare } from 'react-icons/fa'

export const ConfirmActivityAction = ({id}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [show2, setShow2] = useState(false);
  
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    return (
        <td id='Button'>
            <a href={'activity/info-1/' + id.original._id} id='Info'><AiFillInfoCircle size={40} />&nbsp; <div>ดูข้อมูล</div></a>
            <>
                <a onClick={handleShow} id='Decline'><FaWindowClose size={40} />&nbsp; <div>ปฏิเสธ</div></a>

                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="modal" >
                    <Modal.Header className="modalHeader">
                        <Modal.Title  className="modalTitle">คุณต้องการปฏิเสธพาร์ทเนอร์กิจกรรม ?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modalBody">
                        ชื่อผู้ใช้ : {id.original.realname} <br/>
                        อีเมล : {id.original.email}
                    </Modal.Body>
                    <Modal.Footer className="modalFooter">
                        <Button variant="secondary" className="modalButtonSecondary" onClick={handleClose}>ยกเลิก</Button>
                        <Button variant="primary" className="modalButtonPrimary" onClick={handleClose}>ยืนยัน</Button>
                    </Modal.Footer>
                </Modal>
            </>
            <>
                <a onClick={handleShow2} id='Accept'><FaCheckSquare size={40} />&nbsp; <div>อนุมัติ</div></a>

                <Modal show={show2} onHide={handleClose2} backdrop="static" keyboard={false} >
                    <Modal.Header className="modalHeader">
                        <Modal.Title  className="modalTitle">คุณต้องการอนุมัติพาร์ทเนอร์กิจกรรม ?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modalBody">
                        ชื่อผู้ใช้ : {id.original.realname} <br/>
                        อีเมล : {id.original.email}
                    </Modal.Body>
                    <Modal.Footer className="modalFooter">
                        <Button variant="secondary" className="modalButtonSecondary" onClick={handleClose2}>ยกเลิก</Button>
                        <Button variant="primary" className="modalButtonPrimary" onClick={handleClose2}>ยืนยัน</Button>
                    </Modal.Footer>
                </Modal>
            </>
        </td> 
    )
}