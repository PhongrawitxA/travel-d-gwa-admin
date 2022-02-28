import React, { Component } from 'react'
import './Customer.css'
import SearchBox from '../../Components/SearchBox/SearchBox'
import { CustomerData } from './CustomerData'
import DeleteIcon from '@mui/icons-material/Delete';
import { AiFillInfoCircle } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'
import { HiArrowCircleUp } from 'react-icons/hi'


export class Customer extends Component {
  render() {
    return (
        <div className='User'>
            <div className='Head'>
                <h2>ผู้ใช้ & พาร์ทเนอร์</h2>
                <SearchBox hint="ค้นหาชื่อผู้ใช้" />
            </div>
            <div className='Container'>
                <div className='Container-table'>
                    <table className="Table">
                        <tr class="Table-header">
                            <th id='Number'>เลขที่</th>
                            <th id='Name'>ชื่อผู้ใช้</th>
                            <th id='Email'>อีเมล</th>
                            <th id='Role'>บทบาท</th>
                            <th id='Action'>จัดการ</th>
                        </tr>
                        { CustomerData.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td id='Number'>{key+1}</td>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td id='Role'>{val.role}</td>
                                    <td id='Button'>
                                        <a href='#' id='Info'><AiFillInfoCircle size={40} />&nbsp; <div>ดูข้อมูล</div></a>
                                        <a href='#' id='Delete'><FaTrash size={40} />&nbsp; <div>ลบข้อมูล</div></a>
                                        <a href='#' id='Upgrade'><HiArrowCircleUp size={50} />&nbsp; <div>อัปเกรดเป็นบทบาทแอดมิน</div></a>
                                    </td>
                                </tr>
                            );
                        })}
                    </table>
                </div>
            </div>
        </div>
    )
  }
}

export default Customer