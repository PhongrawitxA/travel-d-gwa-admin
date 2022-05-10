import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'

import { SampleContext } from '../../../contexts/SampleContext'
import { COLUMNS } from './Columns'
import { Table } from '../../../Components/Table/Table'
import { ConfirmActivityAction } from '../../../Components/Action/ConfirmAction/ConfirmActivityAction'

export const ConfirmActivity = () => {

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
        <Table header={'อนุมัติพาร์ทเนอร์กิจกรรม'} data={data} column={COLUMNS} Action={ConfirmActivityAction} />                   
    </div>
  )
}

export default ConfirmActivity