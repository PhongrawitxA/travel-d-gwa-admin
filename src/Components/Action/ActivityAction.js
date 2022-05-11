import React ,{ useState } from 'react'
import axios from "axios";

import './ActivityAction.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Modal, render} from 'react-bootstrap';

import { AiFillInfoCircle, AiFillEdit } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'


export const ActivityAction = ({id}) => {

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
        <td id='Button' className='Confirm'>
            <a href={'activity-partner/info-1/' + id.original._id} id='ActivityInfo'><AiFillInfoCircle size={40} />&nbsp; <div>ดูข้อมูล</div></a>
            <a href={'activity-partner/info-1/' + id.original._id} id='ActivityMessage'><AiFillEdit size={40} />&nbsp; <div>แก้ไขข้อมูล</div></a>

            <a onClick={handleShow} id='ActivityDelete'><FaTrash size={40} />&nbsp; <div>ลบพาร์ทเนอร์</div></a>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="modal">
                <Modal.Header className="modalHeader">
                    <Modal.Title className="modalTitle">คุณต้องการลบพาร์ทเนอร์กิจกรรม ?</Modal.Title>
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