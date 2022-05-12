import React , {useState,useEffect,useContext} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {SampleContext} from '../../contexts/SampleContext';

import './RentcarEditInfo.css'
import { Button, Modal, render} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { GrFormPrevious } from 'react-icons/gr'
import { FaWindowClose, FaCheckSquare } from 'react-icons/fa'

export const RentcarEditInfo = () => {
    const {Url} = useContext(SampleContext)
    const {id} = useParams();
    const [carInfo,setCarInfo] = useState([])
    const getPartnerInfo = (id) => {
        axios({
            method : "GET",
            url: Url+"/admin/getrentcarpartner/" + id,
        }).then((res) => {
            console.log(res.data[0])
            setCarInfo(res.data[0]);
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

    const [newName, setName] = useState("")
    const [newLocation, setLocation] = useState("")
    const [newCarBrand, setCarBrand] = useState("")
    const [newCarName, setCarName] = useState("")
    const [newCarCounting, setCarCounting] = useState("")
    const [newPrice, setPrice] = useState("")
    const [newRegistrationYear, setRegistrationYear] = useState("")
    const [newNumberSeat, setNumberSeat] = useState("")
    const [newNumberBigbag, setNumberBigbag] = useState("")
    const [newNumberSmallbag, setNumberSmallbag] = useState("")
    const [newCarService, setCarService] = useState("")

    return (
        <from>
            <div className='RentcarPartnerEdit-info'>
                <div className='Head'>
                    <h2>
                        แก้ไขข้อมูลพาร์ทเนอร์เช่ารถ
                    </h2>
                    <div className='Button'>
                                                <>
                            <a onClick={handleShow2} className='Cancel'><div>ยกเลิก</div></a>
                            <Modal show={show2} onHide={handleClose2} backdrop="static" keyboard={false} >
                                <Modal.Header className="modalHeader">
                                    <Modal.Title  className="modalTitle">คุณต้องการยกเลิกการแก้ไข ?</Modal.Title>
                                </Modal.Header>
                                <Modal.Footer className="modalFooter">
                                    <Button variant="secondary" className="modalButtonSecondary" onClick={handleClose2}>ยกเลิก</Button>
                                    <Button variant="primary" className="modalButtonPrimary" href={'/rentcar-partner/info-1/' + id}>ยืนยัน</Button>
                                </Modal.Footer>
                            </Modal>
                        </>
                        <>
                            <a onClick={handleShow} className='Accept'><div>ยืนยัน</div></a>
                            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                                <Modal.Header className="modalHeader">
                                    <Modal.Title  className="modalTitle">คุณต้องการยืนยันการแก้ไข ?</Modal.Title>
                                </Modal.Header>
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
                            <h4>ข้อมูลบริษัท</h4>
                            <ul className='Info-text'>
                                <li className='Row'><div className='Title'>ชื่อบริษัท</div>
                                    <div className='User-info'>
                                    <input
                                        className="name"
                                        value={newName || carInfo.car_partnername}
                                        onChange={(e) => setName(e.target.value)}
                                        label="ชื่อบริษัท"
                                    />
                                    </div>
                                </li>
                                <li className='Row'><div className='Title'>ที่อยู่บริษัท</div>
                                    <div className='User-info'>
                                        <textarea
                                            className="address"
                                            value={newLocation || carInfo.car_location}
                                            onChange={(e) => setLocation(e.target.value)}
                                            label="ที่อยู่บริษัท"
                                        />
                                    </div>
                                </li>
                                <li className='Row'><div className='Title'>ชื่อผู้ใช้</div><div className='User-info'>{carInfo.nameOfUser}</div></li>
                                {/* <li className='Row'><div className='Title'>นามสกุล</div><div className='User-info'>{'surname'}</div></li> */}
                                <li className='Row'><div className='Title'>อีเมล</div><div className='User-info'>{(carInfo.PartnerID || []).email}</div></li>
                                <li className='Row'><div className='Title'>เบอร์โทรศัพท์</div><div className='User-info'>{(carInfo.PartnerID || []).phone}</div></li>
                            </ul>     
                        </div>
                    </div> 
                    <div className='Right'>
                    <h4>ข้อมูลเกี่ยวรถ รับ - ส่ง</h4>
                        <ul className='Info-text'>
                            <li className='Row'><div className='Title'>รุ่นของรถ</div>
                                <div className='User-info' id='car-model'>
                                    <input
                                        className="car-brand"
                                        value={newCarBrand || carInfo.car_brand}
                                        onChange={(e) => setCarBrand(e.target.value)}
                                        label="ยี่ห้อ"
                                    />
                                    <input
                                        className="car-name"
                                        value={newCarName || carInfo.car_name}
                                        onChange={(e) => setCarName(e.target.value)}
                                        label="รุ่น"
                                    />                                
                                </div>
                            </li>
                            <li className='Row'><div className='Title'>จำนวน</div>
                                <div className='User-info' id='car-count'>
                                    <input
                                        type="number"
                                        min='1'
                                        className="car-counting"
                                        value={newCarCounting || carInfo.car_counting}
                                        onChange={(e) => setCarCounting(e.target.value)}
                                        label="จำนวนรถ"
                                    />  
                                    คัน
                                </div>
                            </li>
                            <li className='Row'><div className='Title'>ราคาต่อวัน</div>
                                <div className='User-info' id='car-price'>                                    
                                    <input
                                        type="number"
                                        min='1'
                                        step='100'
                                        className="car-price"
                                        value={newPrice || carInfo.car_price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        label="ราคาต่อวัน"
                                    />
                                    THB
                                </div>
                            </li>
                            <li className='Row'><div className='Title'>ข้อมูลรถ</div>
                                <div className='User-info'>
                                    <div className='car-info'>
                                        ปีจดทะเบียน &nbsp;&nbsp;
                                        <input
                                            type="number"
                                            min='1990'
                                            max='2022'
                                            step='1'
                                            className="car-registration"
                                            value={newRegistrationYear || carInfo.car_registration_year}
                                            onChange={(e) => setRegistrationYear(e.target.value)}
                                            label="ปีจดทะเบียน"
                                        />
                                    </div>
                                    <div className='car-info'>
                                        จำนวนผู้โดยสาร &nbsp;&nbsp;
                                        <input
                                            type="number"
                                            min='1'
                                            max='20'
                                            step='1'
                                            className="car-numberseat"
                                            value={newNumberSeat || carInfo.car_nunber_sit}
                                            onChange={(e) => setNumberSeat(e.target.value)}
                                            label="จำนวนผู้โดยสาร"
                                        />
                                    </div>
                                    <div className='car-info'>
                                        กระเป๋าใบใหญ่ &nbsp;&nbsp;
                                        <input
                                            type="number"
                                            min='1'
                                            max='20'
                                            step='1'
                                            className="car-numberbigbag"
                                            value={newNumberBigbag || carInfo.car_nunber_bigbag}
                                            onChange={(e) => setNumberBigbag(e.target.value)}
                                            label="จำนวนกระเป๋าใบใหญ่"
                                        />
                                    </div>
                                    <div className='car-info'>
                                        กระเป๋าใบเล็ก &nbsp;&nbsp;
                                        <input
                                            type="number"
                                            min='1'
                                            max='40'
                                            step='1'
                                            className="car-numbersmallbag"
                                            value={newNumberSmallbag || carInfo.car_nunber_smallbag}
                                            onChange={(e) => setNumberSmallbag(e.target.value)}
                                            label="จำนวนกระเป๋าใบเล็ก"
                                        />
                                    </div>
                                </div>
                            </li>
                            <li className='Row'><div className='Title'>อุปกรณ์ภายในรถ</div>
                                <div className='User-info'>
                                    <textarea
                                        className="car-numbersmallbag"
                                        value={newCarService || carInfo.car_service || []}
                                        onChange={(e) => setCarService(e.target.value)}
                                        label="จำนวนกระเป๋าใบเล็ก"
                                    />
                                </div>
                            </li>
                        </ul>    
                    </div>   
                </div>                    
            </div>
        </from>
    )
}