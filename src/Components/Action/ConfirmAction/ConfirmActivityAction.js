import React ,{ useState , useContext} from 'react'
import axios from "axios";
import './ConfirmAction.css'

import { Button, Modal, render} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { AiFillInfoCircle } from 'react-icons/ai'
import { FaTrash, FaWindowClose, FaCheckSquare } from 'react-icons/fa'
import { SampleContext} from '../../../contexts/SampleContext';

export const ConfirmActivityAction = ({id}) => {
    const {Url} = useContext(SampleContext)

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
        <td id='Button'>
            <a href={'activity/info-1/' + id.original._id} id='Info'><AiFillInfoCircle size={40} />&nbsp; <div>ดูข้อมูล</div></a>
            <>
                <a onClick={handleShow} id='Decline'><FaWindowClose size={40} />&nbsp; <div>ปฏิเสธ</div></a>

                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="modal" >
                    <Modal.Header className="modalHeader">
                        <Modal.Title  className="modalTitle">คุณต้องการปฏิเสธพาร์ทเนอร์กิจกรรม ?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modalBody">
                        ชื่อผู้ใช้ : {id.original.usernameID.realname + ' ' + id.original.usernameID.surname} <br/>
                        อีเมล : {id.original.usernameID.email}
                    </Modal.Body>
                    <Modal.Footer className="modalFooter">
                        <Button variant="secondary" className="modalButtonSecondary" onClick={handleClose}>ยกเลิก</Button>
                        <Button variant="primary" className="modalButtonPrimary" onClick={() => {rejectActivityPartner(id)}}>ยืนยัน</Button>
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
                        ชื่อผู้ใช้ : {id.original.usernameID.realname + ' ' + id.original.usernameID.surname} <br/>
                        อีเมล : {id.original.usernameID.email}
                    </Modal.Body>
                    <Modal.Footer className="modalFooter">
                        <Button variant="secondary" className="modalButtonSecondary" onClick={handleClose2}>ยกเลิก</Button>
                        <Button variant="primary" className="modalButtonPrimary" onClick={() => {approveActivityPartner(id)}}>ยืนยัน</Button>
                    </Modal.Footer>
                </Modal>
            </>
        </td> 
    )
}