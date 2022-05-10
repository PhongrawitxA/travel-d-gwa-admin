import React ,{ useState,useContext } from 'react'
import axios from "axios";

import './RentcarAction.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Modal, render} from 'react-bootstrap';

import { AiFillInfoCircle } from 'react-icons/ai'
import { IoChatboxEllipses } from 'react-icons/io5'
import { FaTrash } from 'react-icons/fa'
import {SampleContext} from '../../contexts/SampleContext';



export const RentcarAction = ({id}) => {
    const {Url} = useContext(SampleContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteRentcarPartner = (id) => {
        axios({
            method : "DELETE",
            url: Url+"/admin/deleterentcarpartner/" + id,
          }).then( res => {
            window.location.href='/rentcar-partner';
          });
    }
 
    return (
        <td id='Button'>
            <a href={'rentcar-partner/info-1/' + id.original._id} id='RentcarInfo'><AiFillInfoCircle size={40} />&nbsp; <div>ดูข้อมูล</div></a>
            <a href={'rentcar-partner/info-1/' + id.original._id} id='RentcarMessage'><IoChatboxEllipses size={40} />&nbsp; <div>ส่งการแจ้งเตือน</div></a>

            <a onClick={handleShow} id='RentcarDelete'><FaTrash size={40} />&nbsp; <div>ลบพาร์ทเนอร์</div></a>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="modal">
                <Modal.Header className="modalHeader">
                    <Modal.Title className="modalTitle">คุณต้องการลบพาร์ทเนอร์กิจกรรม ?</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody">
                    ชื่อผู้ใช้ : {id.original.usernameID.realname + ' ' + id.original.usernameID.surname} <br/>
                    อีเมล : {id.original.email}
                </Modal.Body>
                <Modal.Footer className="modalFooter">
                    <Button variant="secondary" className="modalButtonSecondary" onClick={handleClose}>ยกเลิก</Button>
                    <Button variant="primary" className="modalButtonPrimary" onClick={() => {deleteRentcarPartner(id.original._id)}}>ยืนยัน</Button>
                </Modal.Footer>
            </Modal>
        </td> 
    )
}