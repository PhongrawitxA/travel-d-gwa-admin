import React ,{ useState ,useContext } from 'react'
import axios from "axios";

import './ShuttleAction.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Modal, render} from 'react-bootstrap';

import { AiFillInfoCircle, AiFillEdit } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'
import {SampleContext} from '../../contexts/SampleContext';


export const ShuttleAction = ({id}) => {
    const {Url} = useContext(SampleContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteShuttlePartner = (id) => {
        axios({
            method : "DELETE",
            url: Url+"/admin/deleteshuttlepartner/" + id,
          }).then( res => {
            window.location.href='/shuttle-partner';
          });
    }
 
    return (
        <td id='Button'>
            <a href={'shuttle-partner/info-1/' + id.original._id} id='ShuttleInfo'><AiFillInfoCircle size={40} />&nbsp; <div>ดูข้อมูล</div></a>
            <a href={'shuttle-partner/info-1/' + id.original._id} id='ShuttleEdit'><AiFillEdit size={40} />&nbsp; <div>แก้ไขข้อมูล</div></a>

            <a onClick={handleShow} id='ShuttleDelete'><FaTrash size={40} />&nbsp; <div>ลบพาร์ทเนอร์</div></a>
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
                    <Button variant="primary" className="modalButtonPrimary" onClick={() => {deleteShuttlePartner(id.original._id)}}>ยืนยัน</Button>
                </Modal.Footer>
            </Modal>
        </td> 
    )
}