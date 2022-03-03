import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { COLUMNS } from './Columns'
import { Table } from '../../Components/Table/Table'


export const Confirm = () => {

  const [data,setData] = useState([]); 

  return (
    <div>
        <Table header={'อนุมัติพาร์ทเนอร์'} data={data} column={COLUMNS} />                   
    </div>
  )
}

export default Confirm