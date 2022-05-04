import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { COLUMNS } from './Columns'
import { Table } from '../../Components/Table/Table'
import { ActivityAction } from '../../Components/Action/ActivityAction'

export const Activity = () => {

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
        <Table header={'พาร์ทเนอร์กิจกรรม'} data={data} column={COLUMNS} Action={ActivityAction} />                   
    </div>
  )
}

export default Activity