import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { COLUMNS } from './Columns'
import { Table } from '../../Components/Table/Table'


export const Activity = () => {

  const [data,setData] = useState([]); 

  return (
    <div>
        <Table header={'พาร์ทเนอร์กิจกรรม'} data={data} column={COLUMNS} />                   
    </div>
  )
}

export default Activity