import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { COLUMNS } from './Columns'
import { Table } from '../../Components/Table/Table'


export const Shuttle = () => {

  const [data,setData] = useState([]); 

  return (
    <div>
        <Table header={'พาร์ทเนอร์รถ รับ-ส่ง'} data={data} column={COLUMNS} />                   
    </div>
  )
}

export default Shuttle