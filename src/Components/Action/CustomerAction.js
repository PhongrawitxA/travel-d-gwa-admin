import React ,{useState} from 'react'

import './CustomerAction.css'

import { AiFillInfoCircle } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'
import { HiArrowCircleUp } from 'react-icons/hi'
import { Button, Modal, render} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";

export const CustomerAction = ({id}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);



  const promoteUser = (id) => {
    axios({
        method : "POST",
        url: "http://localhost:8080/admin/promote/" + id,
      }).then( res => {
        window.location.href='/customer';
      });
  }
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
      <a href={'customer/info/' + id.original._id} id='CustomerInfo'><AiFillInfoCircle size={40} />&nbsp; <div>ดูข้อมูล</div></a>
      <a onClick={handleShow2} id='CustomerUpgrade'><HiArrowCircleUp size={40} />&nbsp; <div>อัปเกรดเป็นบทบาทแอดมิน</div></a>
      <Modal show={show2} onHide={handleClose2} backdrop="static" keyboard={false} className='modal'>
        <Modal.Header className='modalHeader'>
          <Modal.Title className='modalTitle'>คุณต้องการอัปเกรดผู้ใช้เป็นแอดมิน ?</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalBody'>
            ชื่อผู้ใช้ : {id.original.realname} <br/>
            อีเมล : {id.original.email}
        </Modal.Body>
        <Modal.Footer className='modalFooter'>
          <Button variant="secondary" onClick={handleClose2} className='modalButtonSecondary'>ยกเลิก</Button>
          <Button variant="primary" onClick={() => {promoteUser(id.original._id)}} className='modalButtonPrimary'>ยืนยัน</Button>
        </Modal.Footer>
      </Modal>
      <a onClick={handleShow} id='CustomerDelete'><FaTrash size={40} />&nbsp; <div>ลบข้อมูล</div></a>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className='modal'>
        <Modal.Header className='modalHeader'>
          <Modal.Title className='modalTitle'>คุณต้องการลบข้อมูลผู้ใช้ ?</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalBody'>
            ชื่อผู้ใช้ : {id.original.realname} <br/>
            อีเมล : {id.original.email}
        </Modal.Body>
        <Modal.Footer className='modalFooter'>
          <Button variant="secondary" onClick={handleClose} className='modalButtonSecondary'>ยกเลิก</Button>
          <Button variant="primary" onClick={() => {deleteUser(id.original._id)}} className='modalButtonPrimary'>ยืนยัน</Button>
        </Modal.Footer>
      </Modal>
  </td> 
)
}