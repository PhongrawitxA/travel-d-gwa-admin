import React , { useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import './ConfirmAccommodationInfo_3.css'
import { SampleContext } from '../../../contexts/SampleContext'

import { Button, Modal, render} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { GrFormPrevious } from 'react-icons/gr'
import { FaWindowClose, FaCheckSquare } from 'react-icons/fa'


export const ConfirmAccommodationInfo_3 = () => {

    const {Url} = useContext(SampleContext)

  const {id} = useParams();
  const [data,setData] = useState([]);
  const getUserInfo = (id) => {
    axios({
        method : "GET",
        url: Url + "/admin/getuser/" + id,
      }).then( res => {
            setData(res.data);
            console.log(data);
      });
  }
  useEffect(()=> {
    (async () => {
        await getUserInfo(id);
    })();
  },[]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <div className='ConfirmAccommodation-info-3'>
        <div className='Head'>
            <h2>
              <a href="/confirm-partner/accommodation"><GrFormPrevious size={50} /></a>
              อนุมัติพาร์ทเนอร์ที่พัก / ข้อมูล-3
            </h2>
            <div className='Button'>
                <>
                    <a onClick={handleShow} className='Decline'><FaWindowClose size={40} />&nbsp; <div>ปฏิเสธ</div></a>

                    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="modal" >
                        <Modal.Header className="modalHeader">
                            <Modal.Title  className="modalTitle">คุณต้องการปฏิเสธพาร์ทเนอร์ที่พัก ?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modalBody">
                            ชื่อผู้ใช้ : {data.realname} <br/>
                            อีเมล : {data.email}
                        </Modal.Body>
                        <Modal.Footer className="modalFooter">
                            <Button variant="secondary" className="modalButtonSecondary" onClick={handleClose}>ยกเลิก</Button>
                            <Button variant="primary" className="modalButtonPrimary" onClick={handleClose}>ยืนยัน</Button>
                        </Modal.Footer>
                    </Modal>
                </>
                <>
                    <a onClick={handleShow2} className='Accept'><FaCheckSquare size={40} />&nbsp; <div>อนุมัติ</div></a>

                    <Modal show={show2} onHide={handleClose2} backdrop="static" keyboard={false} >
                        <Modal.Header className="modalHeader">
                            <Modal.Title  className="modalTitle">คุณต้องการอนุมัติพาร์ทเนอร์ที่พัก ?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modalBody">
                            ชื่อผู้ใช้ : {data.realname} <br/>
                            อีเมล : {data.email}
                        </Modal.Body>
                        <Modal.Footer className="modalFooter">
                            <Button variant="secondary" className="modalButtonSecondary" onClick={handleClose2}>ยกเลิก</Button>
                            <Button variant="primary" className="modalButtonPrimary" onClick={handleClose2}>ยืนยัน</Button>
                        </Modal.Footer>
                    </Modal>
                </>
            </div>
        </div>
        <div className='Container'>
            <div className='Left'>
                <div className='Detail'>
                    <h4>ราคา</h4>
                    <ul className='Info-text'>
                        <li className='Row'><div className='Detail-info'>{'THB 2,000 จำนวนผู้เข้าพักสูงสุดไม่เกิน 5 ท่าน'}</div></li>
                    </ul>
                    <h4>วิธีการรับเงินค่าที่พัก</h4>
                    <ul className='Info-text'>
                        <li className='Row'><div className='Detail-info'>{'โอนเงินเข้าบัญชีธนาคารหลังจากที่ลูกค้าเช็คเอาต์เราจะโอนเงินเข้าบัญชีธนาคารของท่านโดยตรงด้วยระบบการชำระเงินที่ปลอดภัยของเรา'}</div></li>
                    </ul>
                    <h4>เงื่อนไขการจองที่พัก</h4>
                    <ul className='Info-text'>
                        <li className='Row'><div className='Detail-info'>{'- จองได้ทันที ผู้เข้าพักจองที่พักได้โดยไม่ต้องส่งคำขอจอง'}</div></li>
                        <li className='Row'><div className='Detail-info'>{'- ไม่กำหนดระยะเวลาที่ลูกค้าจองที่พักล่วงหน้าได้'}</div></li>
                        <li className='Row'><div className='Detail-info'>{'- จำนวนคืนขั้นต่ำต่อการเข้าพัก กำหนดขั้นต่ำไว้  1 คืน'}</div></li>
                        <li className='Row'><div className='Detail-info'>{'- ไม่จำกัดจำนวนคืนสูงสุดในการเข้าพัก'}</div></li>
                    </ul>       
                </div>
            </div> 
            <div className='Right'>
                <div className='Map'>
                    <h4>นโยบายการยกเลิกการจอง</h4>
                    <ul className='Info-text'>
                        <li className='Row'><div className='Detail-info'>{'ยืดหยุ่นให้ผู้เข้าพักสามารถยกเลิกการจองได้จนถึง 1 วันก่อนวันเช็คอิน โดยท่านจะได้รับเงินคืน 100% ในกรณีที่ลูกค้าไม่ไปเข้าพักท่านจะได้รับค่าจองที่พักคืน 100%'}</div></li>
                    </ul> 
                </div>
            </div>   
        </div>       
        <div className='Footer'>
            <a className='Button' id='Next' href={'/confirm-partner/accommodation/info-2/' + id}><span>ย้อนกลับ</span></a>
            <button className='Button' id='Next' href={'/confirm-partner/accommodation/info-4/' + id} disabled><span>ถัดไป</span></button>
        </div>    
    </div>
  )
}