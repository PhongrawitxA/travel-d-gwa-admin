import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { COLUMNS } from './Columns'
import { Table } from '../../Components/Table/Table'


export const Rentcar = () => {

  const [data,setData] = useState([]); 

  return (
    <div>
        <Table header={'พาร์ทเนอร์เช่ารถ'} data={data} column={COLUMNS} />                   
    </div>
  )
}

export default Rentcar