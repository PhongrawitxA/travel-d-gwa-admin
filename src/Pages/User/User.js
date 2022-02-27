import React, { Component } from 'react'
import './User.css'
import SearchBox from '../../Components/SearchBox/SearchBox'

export class User extends Component {
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
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default User
