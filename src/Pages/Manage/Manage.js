import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { COLUMNS } from './Columns'
import { Table } from '../../Components/Table/Table'


export const Receipt = () => {

  const [data,setData] = useState([]); 

  return (
    <div>
        <Table header={'การจัดการข้อมูล'} data={data} column={COLUMNS} />                   
    </div>
  )
}

export default Receipt