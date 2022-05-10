import React, { useEffect, useState , useContext } from 'react'
import axios from 'axios'

import { COLUMNS } from './Columns'
import { Table } from '../../Components/Table/Table'
import { ShuttleAction } from '../../Components/Action/ShuttleAction'
import {SampleContext} from '../../contexts/SampleContext';

export const Shuttle = () => {

  const {Url} = useContext(SampleContext)
  const [data, setData] = useState([]); 
  const getShuttlePartner = () => {
      axios({
          method : "GET",
          url: Url+"/admin/getshuttlepartner",
        }).then( res => {
              setData(res.data);
        });
  }
  useEffect(()=> {
      (async () => {
          await getShuttlePartner();
      })();
  },[]);

  return (
    <div>
        <Table header={'พาร์ทเนอร์รถ รับ-ส่ง'} data={data} column={COLUMNS} Action={ShuttleAction} />                   
    </div>
  )
}

export default Shuttle