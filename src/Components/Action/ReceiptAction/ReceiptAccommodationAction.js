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
                        <Modal.Title  className="modalTitle">ใบเสร็จจองที่พัก</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modalBody">
                        <div className='top-section'>
                            <div className='first'>
                                <span id='title'>Cape Dara Resort</span>
                                <span id='transaction-id'>#0001TH</span>
                            </div>
                            <div className='second'>
                                <span className='detail-title'>ข้อมูลเพิ่มเติม</span> <br/>
                                <span className='detail'>(1x) One grass suite</span> <br/>
                                <span className='detail'>วันที่เช็คอิน : 29 ธันวาคม พ.ศ. 2564 (14.00 น.)</span> <br/>
                                <span className='detail'>วันที่เช็คเอาท์ : 1 มกราคม พ.ศ. 2565 (12.00 น.)</span>
                            </div>                            
                        </div>
                        <div className='body-section'>
                            <table>
                                <tr>
                                    <th id='number'>ครั้งที่</th>
                                    <th id='detail'>รายละเอียด</th>
                                    <th id='price'>ราคา</th>
                                </tr>
                                <tr>
                                    <td className='number'>1</td>
                                    <td>(1x) One grass suite : 3 คืน</td>
                                    <td className='price'>3,300.00 THB</td>
                                </tr>
                                <tr className='total'>
                                    <td id='total-title' colspan='2'>รวม</td>
                                    <td className='price'>3,300.00 THB</td>
                                </tr>
                            </table>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="modalFooter">
                        <Button variant="secondary" className="modalButtonSecondary" onClick={handleClose}>ปิด</Button>
                    </Modal.Footer>
                </Modal>
            </>
        </td> 
    )
}