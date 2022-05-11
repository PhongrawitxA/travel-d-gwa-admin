import React, { useEffect, useState ,useContext } from 'react'
import axios from 'axios'

import { COLUMNS } from './Columns'
import { Table } from '../../Components/Table/Table'
import { ActivityAction } from '../../Components/Action/ActivityAction'
import {SampleContext} from '../../contexts/SampleContext';

export const Activity = () => {

  const {Url} = useContext(SampleContext)
  const [data, setData] = useState([]); 
  const getUser = () => {
      axios({
          method : "GET",
          url: Url+"/admin/getactivitypartner",
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