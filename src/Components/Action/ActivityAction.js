import React ,{ useState , useContext } from 'react'
import axios from "axios";

import './ActivityAction.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Modal, render} from 'react-bootstrap';

import { AiFillInfoCircle, AiFillEdit } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'
import { SampleContext} from '../../contexts/SampleContext';


export const ActivityAction = ({id}) => {
    const {Url} = useContext(SampleContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const deleteActivityPartner = (id) => {
        axios({
            method : "DELETE",
            url: Url+"/admin/deleteactivitypartner/" + id,
          }).then( res => {
            window.location.href='/activity-partner';
          });
    }
 
    return (
        <td id='Button' className='Confirm'>
            <a href={'activity-partner/info-1/' + id.original._id} id='ActivityInfo'><AiFillInfoCircle size={40} />&nbsp; <div>ดูข้อมูล</div></a>
            <a href={'activity-partner/info-1/' + id.original._id} id='ActivityEdit'><AiFillEdit size={40} />&nbsp; <div>แก้ไขข้อมูล</div></a>

            <a onClick={handleShow} id='ActivityDelete'><FaTrash size={40} />&nbsp; <div>ลบพาร์ทเนอร์</div></a>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="modal">
                <Modal.Header className="modalHeader">
                    <Modal.Title className="modalTitle">คุณต้องการลบพาร์ทเนอร์กิจกรรม ?</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody">
                    ชื่อผู้ใช้ : {id.original.usernameID.realname + ' ' + id.original.usernameID.surname} <br/>
                    อีเมล : {id.original.usernameID.email}
                </Modal.Body>
                <Modal.Footer className="modalFooter">
                    <Button variant="secondary" className="modalButtonSecondary" onClick={handleClose}>ยกเลิก</Button>
                    <Button variant="primary" className="modalButtonPrimary" onClick={() => {deleteActivityPartner(id.original._id)}}>ยืนยัน</Button>
                </Modal.Footer>
            </Modal>
        </td> 
    )
}