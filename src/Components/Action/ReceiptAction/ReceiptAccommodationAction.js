import React ,{ useState } from 'react'
import axios from "axios";
import './ReceiptAction.css'

import { Button, Modal, render} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { AiFillInfoCircle } from 'react-icons/ai'
import { FaTrash, FaWindowClose, FaCheckSquare } from 'react-icons/fa'

export const ReceiptAccommodationAction = ({id}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <td id='Button' className='receipt-accommodation'>
            <>
                <a onClick={handleShow} id='view-receipt' className='view-receipt'><div>ดูใบเสร็จ</div></a>

                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="modal" >
                    <Modal.Header className="modalHeader">
                        <Modal.Title  className="modalTitle">ใบเสร็จที่พัก</Modal.Title>
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
        </td> 
    )
}