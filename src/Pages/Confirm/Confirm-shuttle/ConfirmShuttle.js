import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'

import { SampleContext } from '../../../contexts/SampleContext'
import { COLUMNS } from './Columns'
import { Table } from '../../../Components/Table/Table'
import { ConfirmShuttleAction } from '../../../Components/Action/ConfirmAction/ConfirmShuttleAction'

export const ConfirmShuttle = () => {

  const {Url} = useContext(SampleContext)

  const [data, setData] = useState([]); 
  const getUser = () => {
      axios({
          method : "GET",
          url: Url + "/admin/getuser",
        }).then( res => {
              setData(res.data);
        });
  }
  useEffect(()=> {
      (async () => {
          await getUser();
      })();
  },[]);

  return (
    <div>
        <Table header={'อนุมัติพาร์ทเนอร์รถ รับ - ส่ง'} data={data} column={COLUMNS} Action={ConfirmShuttleAction} />                   
    </div>
  )
}

export default ConfirmShuttle