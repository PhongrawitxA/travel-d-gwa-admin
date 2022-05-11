import React , {useState,useEffect,useContext} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {SampleContext} from '../../contexts/SampleContext';

import './ShuttleInfo_1.css'
import { Button, Modal, render} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { GrFormPrevious } from 'react-icons/gr'
import { AiFillEdit } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa';


export const ShuttleInfo_1 = () => {
  const {Url} = useContext(SampleContext)
  const {id} = useParams();
  const [shuttle,setShuttle] = useState([]);
  const getShuttlePartnerInfo = (id) => {
    axios({
        method : "GET",
        url: Url+"/admin/getshuttlepartner/" + id,
      }).then( (res) => {
            console.log(res.data);
            setShuttle(res.data);
      });
  }
  useEffect(()=> {
    (async () => {
        await getShuttlePartnerInfo(id);
    })();
  },[]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='ShuttlePartner-info-1'>
        <div className='Head'>
            <h2>
              <a href="/shuttle-partner"><GrFormPrevious size={50} /></a>
              พาร์ทเนอร์รถ รับ-ส่ง / ข้อมูล-1
            </h2>
            <div className='Button'>
              <>
                <a className='Edit'><AiFillEdit size={40} />&nbsp; <div>แก้ไขข้อมูล</div></a>
              </>
              <>
                <a onClick={handleShow} className='Delete'><FaTrash size={40} />&nbsp; <div>ลบพาร์ทเนอร์</div></a>

                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                  <Modal.Header className="modalHeader">
                    <Modal.Title  className="modalTitle">คุณต้องการลบพาร์ทเนอร์รถ รับ - ส่ง ?</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="modalBody">
                    ชื่อผู้ใช้ : {(shuttle.usernameID || []).realname + ' ' + (shuttle.usernameID || []).surname} <br/>
                    อีเมล : {shuttle.email}
                  </Modal.Body>
                  <Modal.Footer className="modalFooter">
                    <Button variant="secondary" className="modalButtonSecondary" onClick={handleClose}>ยกเลิก</Button>
                    <Button variant="primary" className="modalButtonPrimary" onClick={handleClose}>ยืนยัน</Button>
                  </Modal.Footer>
                </Modal>
              </>
            </div>
        </div>
        <div className='Container'>
            <div className='Left'>
                <div className='Detail'>
                    <h4>ข้อมูลส่วนตัว</h4>
                    <ul className='Info-text'>
                        <li className='Row'><div className='Title'>ชื่อผู้ใช้</div><div className='User-info'>{(shuttle.usernameID || []).realname + ' ' + (shuttle.usernameID || []).surname}</div></li>
                        <li className='Row'><div className='Title'>อีเมล</div><div className='User-info'>{shuttle.email}</div></li>
                        <li className='Row'><div className='Title'>เบอร์โทรศัพท์</div><div className='User-info'>{(shuttle.usernameID || []).phone}</div></li>
                    </ul> 
                    <h4>ข้อมูลเกี่ยวรถ รับ - ส่ง</h4>
                    <ul className='Info-text'>
                        <li className='Row'><div className='Title'>บริเวณที่รับ - ส่ง</div><div className='User-info'>{shuttle.province + " - " + shuttle.district}</div></li>
                        <li className='Row'><div className='Title'>รุ่นของรถที่ขับ</div><div className='User-info'>{shuttle.car_brand}</div></li>
                        <li className='Row'><div className='Title'>ทะเบียนรถ</div><div className='User-info'>{shuttle.car_registration}</div></li>
                    </ul>       
                </div>
            </div> 
            <div className='Right'>
            </div>   
        </div>       
        <div className='Footer'>
        <button className='Button' id='Back' href='#' disabled>ย้อนกลับ</button>
                <button className='Button' id='Next' href={'/Activity-partner/info-2/' + id} disabled><span>ถัดไป</span></button>
        </div>    
    </div>
  )
}