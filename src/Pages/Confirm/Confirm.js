import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { COLUMNS } from './Columns'
import { Table } from '../../Components/Table/Table'
import { ConfirmAction } from '../../Components/Action/ConfirmAction.js'


export const Confirm = () => {

  const [data,setData] = useState([]); 

  return (
    <div>
        <Table header={'อนุมัติพาร์ทเนอร์'} data={data} column={COLUMNS} Action={ConfirmAction} />                   
    </div>
  )
}

export default Confirm