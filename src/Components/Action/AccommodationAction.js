import React ,{ useState } from 'react'
import axios from "axios";

import './AccommodationAction.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Modal, render} from 'react-bootstrap';

import { AiFillInfoCircle } from 'react-icons/ai'
import { IoChatboxEllipses } from 'react-icons/io5'
import { FaTrash } from 'react-icons/fa'


export const AccommodationAction = ({id}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteUser = (id) => {
        axios({
            method : "DELETE",
            url: "http://localhost:8080/admin/deleteuser/" + id,
          }).then( res => {
            window.location.href='/customer';
          });
    }
 
    return (
        <td id='Button'>
            <a href={'accommodation-partner/info-1/' + id.original._id} id='AccommodationInfo'><AiFillInfoCircle size={40} />&nbsp; <div>ดูข้อมูล</div></a>
            <a href={'accommodation-partner/info-1/' + id.original._id} id='AccommodationMessage'><IoChatboxEllipses size={40} />&nbsp; <div>ส่งการแจ้งเตือน</div></a>

            <a onClick={handleShow} id='AccommodationDelete'><FaTrash size={40} />&nbsp; <div>ลบพาร์ทเนอร์</div></a>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="modal">
                <Modal.Header className="modalHeader">
                    <Modal.Title className="modalTitle">คุณต้องการลบพาร์ทเนอร์ที่พัก ?</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody">
                    ชื่อผู้ใช้ : {id.original.realname} <br/>
                    อีเมล : {id.original.email}
                </Modal.Body>
                <Modal.Footer className="modalFooter">
                    <Button variant="secondary" className="modalButtonSecondary" onClick={handleClose}>ยกเลิก</Button>
                    <Button variant="primary" className="modalButtonPrimary" onClick={() => {deleteUser(id.original._id)}}>ยืนยัน</Button>
                </Modal.Footer>
            </Modal>
        </td> 
    )
}