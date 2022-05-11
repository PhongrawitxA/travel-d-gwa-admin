import React , {useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import './ConfirmRentcarInfo_1.css'
import { SampleContext } from '../../../contexts/SampleContext'

import { Button, Modal, render} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { GrFormPrevious } from 'react-icons/gr'
import { FaWindowClose, FaCheckSquare } from 'react-icons/fa'

export const ConfirmRentcarInfo_1 = () => {

    const {Url} = useContext(SampleContext)

    const {id} = useParams();
    const [data,setData] = useState([]);

    const getPartnerInfo = (id) => {
        axios({
            method : "GET",
            url: Url + "/admin/getrentcarpartner/" + id,
        }).then( res => {
                setData(res.data[0]);
        });
    }

    useEffect(()=> {
        (async () => {
            await getPartnerInfo(id);
        })();
    },[]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [show2, setShow2] = useState(false);
  
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const approveRentcarPartner = (id) => {
        axios({
            method : "PUT",
            url: Url+"/admin/rentcarregister/approve/" + id,
          }).then( res => {
            window.location.href='/confirm-partner/rentcar';
          });
    }

    const rejectRentcarPartner = (id) => {
        axios({
            method : "DELETE",
            url: Url+"/admin/rentcarregister/reject/" + id,
          }).then( res => {
            window.location.href='/confirm-partner/rentcar';
          });
    }

    return (
        <div className='ConfirmRentcar-info-1'>
            <div className='Head'>
                <h2>
                    <a href="/confirm-partner/rentcar"><GrFormPrevious size={50} /></a>
                    อนุมัติพาร์ทเนอร์เช่ารถ / ข้อมูล-1
                </h2>
                <div className='Button'>
                    <>
                        <a onClick={handleShow} className='Decline'><FaWindowClose size={40} />&nbsp; <div>ปฏิเสธ</div></a>

                        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className="modal" >
                            <Modal.Header className="modalHeader">
                                <Modal.Title  className="modalTitle">คุณต้องการปฏิเสธพาร์ทเนอร์เช่ารถ ?</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="modalBody">
                                ชื่อผู้ใช้ : {data.nameOfUser} <br/>
                                อีเมล : {(data.PartnerID || []).email}
                            </Modal.Body>
                            <Modal.Footer className="modalFooter">
                                <Button variant="secondary" className="modalButtonSecondary" onClick={handleClose}>ยกเลิก</Button>
                                <Button variant="primary" className="modalButtonPrimary" onClick={() => {rejectRentcarPartner(id)}}>ยืนยัน</Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                    <>
                        <a onClick={handleShow2} className='Accept'><FaCheckSquare size={40} />&nbsp; <div>อนุมัติ</div></a>

                        <Modal show={show2} onHide={handleClose2} backdrop="static" keyboard={false} >
                            <Modal.Header className="modalHeader">
                                <Modal.Title  className="modalTitle">คุณต้องการอนุมัติพาร์ทเนอร์เช่ารถ ?</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="modalBody">
                                ชื่อผู้ใช้ : {data.nameOfUser} <br/>
                                อีเมล : {(data.PartnerID || []).email}
                            </Modal.Body>
                            <Modal.Footer className="modalFooter">
                                <Button variant="secondary" className="modalButtonSecondary" onClick={handleClose2}>ยกเลิก</Button>
                                <Button variant="primary" className="modalButtonPrimary" onClick={() => {approveRentcarPartner(id)}}>ยืนยัน</Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                </div>
            </div>
            <div className='Container'>
                <div className='Left'>
                    <div className='Detail'>
                        <h4>ข้อมูลบริษัท</h4>
                        <ul className='Info-text'>
                            <li className='Row'><div className='Title'>ชื่อบริษัท</div><div className='User-info'>{data.car_partnername}</div></li>
                            <li className='Row'><div className='Title'>ที่อยู่บริษัท</div><div className='User-info'>{data.car_location}</div></li>
                            <li className='Row'><div className='Title'>ชื่อผู้ใช้</div><div className='User-info'>{data.nameOfUser}</div></li>
                            {/* <li className='Row'><div className='Title'>นามสกุล</div><div className='User-info'>{'info.surname'}</div></li> */}
                            <li className='Row'><div className='Title'>อีเมล</div><div className='User-info'>{(data.PartnerID || []).email}</div></li>
                            <li className='Row'><div className='Title'>เบอร์โทรศัพท์</div><div className='User-info'>{(data.PartnerID || []).phone}</div></li>
                        </ul>     
                    </div>
                </div> 
                <div className='Right'>
                <h4>ข้อมูลเกี่ยวรถ รับ - ส่ง</h4>
                    <ul className='Info-text'>
                        <li className='Row'><div className='Title'>รุ่นของรถ</div><div className='User-info'>{data.car_brand + ' ' +data.car_name}</div></li>
                        <li className='Row'><div className='Title'>จำนวน</div><div className='User-info'>{data.car_counting+' คัน'}</div></li>
                        <li className='Row'><div className='Title'>ราคาต่อวัน</div><div className='User-info'>{'THB '+data.car_price}</div></li>
                        <li className='Row'><div className='Title'>ข้อมูลรถ</div><div className='User-info'>ปีจดทะเบียน {data.car_registration_year} <br/> จำนวนผู้โดยสาร {data.car_nunber_sit} <br/> กระเป๋าใบใหญ่ {data.car_nunber_bigbag} <br/> กระเป๋าใบเล็ก {data.car_nunber_smallbag}</div></li>
                        <li className='Row'><div className='Title'>อุปกรณ์ภายในรถ</div><div className='User-info'>{(data.car_service || []).map((item) => {return <div>{item}</div>})}</div></li>
                    </ul>    
                </div>   
            </div>       
            <div className='Footer'>
                <button className='Button' id='Next' href='#' disabled><span>ย้อนกลับ</span></button>
                <button className='Button' id='Next' href={'/Rentcar-partner/info-2/' + id} disabled><span>ถัดไป</span></button>
            </div>    
        </div>
    )
}