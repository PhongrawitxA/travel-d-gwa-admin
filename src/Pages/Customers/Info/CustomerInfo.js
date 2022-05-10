import React , {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './CustomerInfo.css'
import DefaultUserImage from '../../../Assets/Images/default_user.jpg'
import axios from 'axios'

import { Button, Modal, render} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { GrFormPrevious } from 'react-icons/gr'
import { HiArrowCircleUp } from 'react-icons/hi'
import { FaTrash } from 'react-icons/fa'

export const CustomerInfo = () => {
  const {id} = useParams();
  const [data,setData] = useState([]);
  const getUserInfo = (id) => {
    axios({
        method : "GET",
        url: "https://traveldgwa.herokuapp.com/admin/getuser/" + id,
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
    <div className='Customer-info'>
      <div className='Head'>
        <h2>
          <a href="javascript:javascript:history.go(-1)"><GrFormPrevious size={50} /></a>
          {'ผู้ใช้'} / ข้อมูล
        </h2>
        <div className="Button">
          <>
            <a onClick={handleShow2} className='CustomerUpgrade'><HiArrowCircleUp size={40} />&nbsp; <div>อัปเกรดเป็นบทบาทแอดมิน</div></a>
            <Modal show={show2} onHide={handleClose2} backdrop="static" keyboard={false} className='modal'>
              <Modal.Header className='modalHeader'>
                <Modal.Title className='modalTitle'>คุณต้องการอัปเกรดผู้ใช้เป็นแอดมิน ?</Modal.Title>
              </Modal.Header>
              <Modal.Body className='modalBody'>
                  ชื่อผู้ใช้ : {data.realname} <br/>
                  อีเมล : {data.email}
              </Modal.Body>
              <Modal.Footer className='modalFooter'>
                <Button variant="secondary" onClick={handleClose2} className='modalButtonSecondary'>ยกเลิก</Button>
                <Button variant="primary" onClick={() => {promoteUser(id.original._id)}} className='modalButtonPrimary'>ยืนยัน</Button>
              </Modal.Footer>
            </Modal>
          </>
          <>
            <a onClick={handleShow} className ='CustomerDelete'><FaTrash size={40} />&nbsp; <div>ลบข้อมูล</div></a>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className='modal'>
              <Modal.Header className='modalHeader'>
                <Modal.Title className='modalTitle'>คุณต้องการลบข้อมูลผู้ใช้ ?</Modal.Title>
              </Modal.Header>
              <Modal.Body className='modalBody'>
                  ชื่อผู้ใช้ : {data.realname} <br/>
                  อีเมล : {data.email}
              </Modal.Body>
              <Modal.Footer className='modalFooter'>
                <Button variant="secondary" onClick={handleClose} className='modalButtonSecondary'>ยกเลิก</Button>
                <Button variant="primary" onClick={() => {deleteUser(id.original._id)}} className='modalButtonPrimary'>ยืนยัน</Button>
              </Modal.Footer>
            </Modal>
          </>
        </div>
      </div>
      <div className='Container'>
        <div className='Left'>
          <h4>ข้อมูลทั่วไป</h4>
          <div className='Info'>
            <img src={DefaultUserImage} alt="รูปโปรไฟล์" width="300" height="300" />
            <ul className='Info-text'>
              <li className='Row'><div className='Title'>ชื่อ</div><div className='User-info'>{data.realname}</div></li>
              <li className='Row'><div className='Title'>นามสกุล</div><div className='User-info'>{data.surname}</div></li>
              <li className='Row'><div className='Title'>บทบาท</div><div className='User-info'>{data.role}</div></li>
              {/* <li className='Row'><a href={'upgrade_'} id='Upgrade'><HiArrowCircleUp size={50} />&nbsp; <div>อัปเกรดเป็นบทบาทแอดมิน</div></a></li> */}
            </ul>               
          </div>
          <div className='Contact'>
            <h4>รายละเอียดติดต่อ</h4>
            <ul className='Info-text'>
              <li className='Row'><div className='Title'>เบอร์โทรศัพท์</div><div className='User-info'>{data.phone}</div></li>
              <li className='Row'><div className='Title'>อีเมล</div><div className='User-info'>{data.email}</div></li>
            </ul>               
          </div>
        </div> 
        <div className='Right'>       
          <div className='Address'>
            <h4>ข้อมูลที่อยู่</h4>
            <ul className='Info-text'>
              <li className='Row'><div className='Title'>ประเทศ</div><div className='User-info'>{'ไทย'}</div></li>
              <li className='Row'><div className='Title'>จังหวัด</div><div className='User-info'>{'กรุงเทพมหานคร'}</div></li>
              <li className='Row'><div className='Title'>เขต/อำเภอ</div><div className='User-info'>{'ภาษีเจริญ'}</div></li>
              <li className='Row'><div className='Title'>แขวง/ตำบล</div><div className='User-info'>{'บางด้วน'}</div></li>
              <li className='Row'><div className='Title'>บ้านเลขที่</div><div className='User-info'>{'28 ซอยเพชรเกษม 48 แยก 17'}</div></li>
            </ul>               
          </div>
          <div className='Card'>
            <h4>ข้อมูลบัตรชำระเงิน</h4>
            <ul className='Info-text'>
              <li className='Row'><div className='Title'>เลขที่บัตรที่ 1</div><div className='User-info'>{'0000 0000 0000 1234'}</div></li>
              <li className='Row'><div className='Title'>ชื่อบนบัตรที่ 1</div><div className='User-info'>{'วัฒนศิริ อุปรักขิตานนท์'}</div></li>

            </ul>               
          </div>
        </div>               
      </div>
    </div>
  )
}