import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { COLUMNS } from './Columns'
import { Table } from '../../Components/Table/Table'
import { ShuttleAction } from '../../Components/Action/ShuttleAction'

export const Shuttle = () => {

  const [data, setData] = useState([]); 
  const getUser = () => {
      axios({
          method : "GET",
          url: "http://localhost:8080/admin/getuser",
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
        <Table header={'พาร์ทเนอร์รถ รับ-ส่ง'} data={data} column={COLUMNS} Action={ShuttleAction} />                   
    </div>
  )
}

export default Shuttle