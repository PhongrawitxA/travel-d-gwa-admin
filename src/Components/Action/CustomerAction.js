import React from 'react'

import { AiFillInfoCircle } from 'react-icons/ai'
import { FaTrash, FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { HiArrowCircleUp } from 'react-icons/hi'

export const CustomerAction = ({id}) => {
  return (
    <td id='Button'>
        <a href={'info_' + id} id='Info'><AiFillInfoCircle size={40} />&nbsp; <div>ดูข้อมูล</div></a>
        <a href={'delete_' + id} id='Delete'><FaTrash size={40} />&nbsp; <div>ลบข้อมูล</div></a>
        <a href={'upgrade_' + id} id='Upgrade'><HiArrowCircleUp size={50} />&nbsp; <div>อัปเกรดเป็นบทบาทแอดมิน</div></a>
    </td> 
  )
}