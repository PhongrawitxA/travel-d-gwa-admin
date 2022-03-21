import React ,{useState} from 'react'
import './ConfirmAction.css'

import { AiFillInfoCircle } from 'react-icons/ai'
import { FaTrash, FaWindowClose, FaCheckSquare } from 'react-icons/fa'
import { Button, Modal, render} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";

export const ConfirmAction = ({id}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);


return (
  <td id='Button'>
      <a href={'customer/info/' + id.original._id} id='Info'><AiFillInfoCircle size={40} />&nbsp; <div>ดูข้อมูล</div></a>
      <>
      <a onClick={handleShow} id='Decline'><FaWindowClose size={40} />&nbsp; <div>ปฏิเสธ</div></a>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Do you want to delete {id.original.email} ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            This is {id.original.email}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
      <a onClick={handleShow2} id='Accept'><FaCheckSquare size={40} />&nbsp; <div>อนุมัติ</div></a>
      <Modal
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Do you want to promote {id.original.email} to admin?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            This is {id.original.email}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary">Promote</Button>
        </Modal.Footer>
      </Modal>
  </td> 
)
}