import React , {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import MapImage from '../../Assets/Images/Map.png'
import axios from 'axios'

import './AccommodationEditInfo.css'
import { Button, Modal, render} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { GrFormPrevious } from 'react-icons/gr'
import { FaWindowClose, FaCheckSquare } from 'react-icons/fa'

export const AccommodationEdit_1 = () => {
    const {id} = useParams();
    const [data,setData] = useState([]);
    const getUserInfo = (id) => {
        axios({
            method : "GET",
            url: "http://localhost:8080/admin/getuser/" + id,
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

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow(false);
    const handleShow1 = () => setShow(true);

    return (
        <div className='AccommodationPartnerEdit-info'>
            <div className='Head'>
                <h2>
                    แก้ไขข้อมูลพาร์ทเนอร์ที่พัก / ข้อมูล-1
                </h2>
                <div className='Button'>
                    <>
                        <a className='Edit'><FaCheckSquare size={40} />&nbsp; <div>ยืนยัน</div></a>

                        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                            <Modal.Header className="modalHeader">
                                <Modal.Title  className="modalTitle">คุณต้องการยกเลิกการแก้ไข ?</Modal.Title>
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
                        <a onClick={handleShow1} className='Delete'><FaWindowClose size={40} />&nbsp; <div>ยกเลิก</div></a>

                        <Modal show={show1} onHide={handleClose1} backdrop="static" keyboard={false} >
                            <Modal.Header className="modalHeader">
                                <Modal.Title  className="modalTitle">คุณต้องการยกเลิกการแก้ไข ?</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="modalBody">
                                ชื่อผู้ใช้ : {data.realname} <br/>
                                อีเมล : {data.email}
                            </Modal.Body>
                            <Modal.Footer className="modalFooter">
                                <Button variant="secondary" className="modalButtonSecondary" onClick={handleClose1}>ยกเลิก</Button>
                                <Button variant="primary" className="modalButtonPrimary" onClick={handleClose1}>ยืนยัน</Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                </div>
            </div>
            <form>
                <div className='Container'>
                    <div className='Left'>
                        <ul className='Info-text'>
                            <li className='Row'><div className='Title'>อีเมล</div><div className='User-info'>{data.email}</div></li>
                            <li className='Row'><div className='Title'>ชื่อผู้ใช้</div><div className='User-info'>{data.realname}</div></li>
                            <li className='Row'><div className='Title'>นามสกุล</div><div className='User-info'>{data.surname}</div></li>
                            <li className='Row'>
                                <div className='Title'>หมวดหมู่</div>
                                <div className='User-info'>
                                    วิลล่า
                                </div>
                            </li>
                        </ul>    
                        <div className='Address'>
                            <h4>ข้อมูลที่อยู่</h4>
                            <ul className='Info-text'>
                                <li className='Row'><div className='User-info'>{'123 Home ห้อง 104 จังหวัด กรุงเทพฯ (10600)'}</div></li>
                            </ul>               
                        </div>
                    </div> 
                    <div className='Right'>
                        <div className='Detail'>
                            <h4>รายละเอียด</h4>
                            <ul className='Info-text'>
                                <li className='Row'><div className='Detail-info'>{'ขนาดของที่พัก 100 ตร.ม'}</div></li>
                                <li className='Row'> <div className='Detail-info'>{'จำนวนผู้เข้าห้องพัก 5'}</div></li>
                                <li className='Row'> <div className='Detail-info'>{'จำนวนห้องน้ำ 5'}</div></li>
                                <li className='Row'> <div className='Detail-info'>{'จำนวนห้องนอน 5'}</div></li>
                                <li className='Row'> <div className='Detail-info'>{'เตียงควีนไซต์ 3, เตียงเดี่ยว 2'}</div></li>
                            </ul>               
                        </div>
                    </div> 
                </div> 
                <div className='Container'>
                    <div className='Left'>
                        <h3>ชื่อที่พัก &nbsp;&nbsp; Perfect For Families</h3>
                        <div className='Detail'>
                            <h4>คำบรรยายที่พัก</h4>
                            <ul className='Info-text'>
                                <li className='Row'><div className='Detail-info'>{'พื้นที่กว้างขวาง วิวสวยงาม อากาศเย็นสบาย'}</div></li>
                            </ul>
                            <h4>ที่เที่ยวและกิจกรรมแนะนำในย่านที่พัก</h4>
                            <ul className='Info-text'>
                                <li className='Row'><div className='Detail-info'>{'เดิน 5 นาทีถึงร้านอาหารชื่อดัง '}</div></li>
                            </ul>
                            <h4>กฎการเข้าพัก</h4>
                            <ul className='Info-text'>
                                <li className='Row'><div className='Detail-info'>{'งดสูบบุหรี่บริเวณในบ้าน'}</div></li>
                            </ul>
                            <h4>วิธีเดินทางไปที่พักและวิธีเช็คอินที่พัก</h4>
                            <ul className='Info-text'>
                                <li className='Row'><div className='Detail-info'>{'นั่งรถไฟฟ้าไปสถานีตลาดพลู'}</div></li>
                            </ul>           
                        </div>
                    </div> 
                    <div className='Right'>
                        <div className='Map'>
                            <h3>บริการและสิ่งอำนวยความสะดวก</h3>
                            <h4>สิ่งอำนวยความสะดวกในที่พัก</h4>
                            <ul className='Info-text'>
                                <li className='Row'><div className='Detail-info'>{'ผ้าเช็ดตัว'}</div></li>
                                <li className='Row'><div className='Detail-info'>{'เครื่องปรับอากาศ'}</div></li>
                                <li className='Row'><div className='Detail-info'>{'ระเบียงหรือชานห้อง'}</div></li>
                                <li className='Row'><div className='Detail-info'>{'โต๊ะ/พื้นที่ทำงาน'}</div></li>
                                <li className='Row'><div className='Detail-info'>{'เปิด/ล็อคที่พักโดยไม่ต้องใช้กุญแจ'}</div></li>
                                <li className='Row'><div className='Detail-info'>{'ที่พักอยู่ใกล้ชายหาด'}</div></li>
                                <li className='Row'><div className='Detail-info'>{'ที่จอดรถ (ฟรี)'}</div></li>
                                <li className='Row'><div className='Detail-info'>{'อินเทอร์เน็ต Wi-Fi (ฟรี)'}</div></li>
                            </ul> 
                        </div>
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
            </form>              
        </div>
    )
}