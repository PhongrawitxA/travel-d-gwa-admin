import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { SampleContext } from '../../../contexts/SampleContext';

import { COLUMNS } from './Columns'
import { Table } from '../../../Components/Table/Table'
import { ReceiptShuttleAction } from '../../../Components/Action/ReceiptAction/ReceiptShuttleAction'

export const ReceiptShuttle = () => {

    const {Url} = useContext(SampleContext)

    const [data, setData] = useState([]); 
    const getShuttleTransaction = () => {
        axios({
            method : "GET",
            url: Url + "/admin/transaction/shuttle",
          }).then( res => {
                setData(res.data);
          });
    }
    useEffect(()=> {
        (async () => {
            await getShuttleTransaction();
        })();
    },[]);

  return (
    <div>
        <Table header={'ข้อมูลการซื้อขาย/พาร์ทเนอร์รถ รับ - ส่ง'} data={data} column={COLUMNS} Action={ReceiptShuttleAction} />                   
    </div>
  )
}

export default ReceiptShuttle