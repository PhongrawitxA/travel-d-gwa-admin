import React , {useState,useEffect,useContext} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

import './ActivityInfo_1.css'
import { Button, Modal, render} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { GrFormPrevious } from 'react-icons/gr'
import { AiFillEdit } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'
import {SampleContext} from '../../contexts/SampleContext';


export const ActivityInfo_1 = () => {

    const {Url} = useContext(SampleContext)
    const {id} = useParams();
    const [data,setData] = useState([]);
    const getActivityInfo = (id) => {
        axios({
            method : "GET",
            url: Url+"/admin/getactivitypartner/" + id,
        }).then( res => {
                setData(res.data);
        });
    }
    useEffect(()=> {
        (async () => {
            await getActivityInfo(id);
        })();
    },[]);

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
        <div className='ActivityPartner-info-1'>
            <div className='Head'>
                <h2>
                    <a href="/activity-partner"><GrFormPrevious size={50} /></a>
                    พาร์ทเนอร์กิจกรรม / ข้อมูล-1
                </h2>
                <div className='Button'>
                    <>
                        <a className='Edit'><AiFillEdit size={40} />&nbsp; <div>แก้ไขข้อมูล</div></a>
                    </>
                    <>
                        <a onClick={handleShow} className='Delete'><FaTrash size={40} />&nbsp; <div>ลบพาร์ทเนอร์</div></a>

                        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                            <Modal.Header className="modalHeader">
                                <Modal.Title  className="modalTitle">คุณต้องการลบพาร์ทเนอร์กิจกรรม ?</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="modalBody">
                                ชื่อผู้ใช้ : {(data.usernameID || []).realname + ' ' + (data.usernameID || []).surname} <br/>
                                อีเมล : {(data.usernameID || []).email}
                            </Modal.Body>
                            <Modal.Footer className="modalFooter">
                                <Button variant="secondary" className="modalButtonSecondary" onClick={handleClose}>ยกเลิก</Button>
                                <Button variant="primary" className="modalButtonPrimary" onClick={() => {deleteActivityPartner(id)}}>ยืนยัน</Button>
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
                            <li className='Row'><div className='Title'>ชื่อผู้ใช้</div><div className='User-info'>{(data.usernameID || []).realname}</div></li>
                            <li className='Row'><div className='Title'>นามสกุล</div><div className='User-info'>{(data.usernameID || []).surname}</div></li>
                            <li className='Row'><div className='Title'>อีเมล</div><div className='User-info'>{(data.usernameID || []).email}</div></li>
                            <li className='Row'><div className='Title'>เบอร์โทรศัพท์</div><div className='User-info'>{(data.usernameID || []).phone}</div></li>
                            <li className='Row'><div className='Title'>ชื่อสถานที่</div><div className='User-info'>{data.name}</div></li>
                            {/* <li className='Row'><div className='Title'>จังหวัด</div><div className='User-info'>{'กรุงเทพมหานคร'}</div></li>
                            <li className='Row'><div className='Title'>เขต/อำเภอ, แขวง/ตำบล</div><div className='User-info'>{'ภาษีเจริญ'}, {'บางด้วน'}</div></li> */}
                            <li className='Row'><div className='Title'>ที่อยู่</div><div className='User-info'>{data.location}</div></li>
                            {/* <li className='Row'><div className='Title'>รายละเอียดกิจกรรม</div><div className='User-info'>จองช่วงเวลาที่คุณต้องการได้อย่างง่ายดายเพื่อเพลิดเพลินกับทรีตเมนต์ที่ดีที่สุดที่ Health Land ฟื้นฟูร่างกาย จิตใจ และจิตวิญญาณด้วยการนวดผ่อนคลายโดยใช้เทคนิคไทย อโรมา หรืออายุรเวทคืนความอ่อนเยาว์ให้กับผิวหน้าด้วยทรีตเมนต์พิเศษที่เน้น ดวงตา ริ้วรอย ร่องลึก และอื่นๆ สัมผัสความสมบูรณ์แบบของสุขภาพและความสมบูรณ์ของร่างกายที่ Health Land Spa ใกล้บ้านคุณทั่วประเทศ</div></li> */}
                        </ul> 
                    </div>
                </div> 
                <div className='Right'>
                <h4>ข้อมูลเกี่ยวกับกิจกรรม</h4>
                    <ul className='Info-text'>
                        <li className='Row'><div className='Title'>รายละเอียดกิจกรรม</div><div className='User-info'>{(data.hilight || []).map((item) => {return <div>{item}</div>})}</div></li>
                        <li className='Row'><div className='Title'>สิ่งอำนวยความสะดวก</div><div className='User-info'>{(data.service || []).map((item) => {return <div>{item}</div>})}</div></li>
                        <li className='Row'><div className='Title'>ราคา</div><div className='User-info'>{'THB '+data.price}</div></li>
                        <li className='Row'><div className='Title'>วันที่เปิดทำการ</div><div className='User-info'>{data.open_day}</div></li>
                        <li className='Row'><div className='Title'>เวลาที่เปิดทำการ</div><div className='User-info'>{data.open_time} น.</div></li>
                    </ul>    
                </div>   
            </div>       
            <div className='Footer'>
                <button className='Button' id='Back' href='#' disabled>ย้อนกลับ</button>
                <button className='Button' id='Next' href={'/Activity-partner/info-2/' + id} disabled><span>ถัดไป</span></button>
            </div>    
        </div>
    )
}