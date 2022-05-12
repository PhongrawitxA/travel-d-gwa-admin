import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { SampleContext } from '../../../contexts/SampleContext';

import { COLUMNS } from './Columns'
import { Table } from '../../../Components/Table/Table'
import { ReceiptActivityAction } from '../../../Components/Action/ReceiptAction/ReceiptActivityAction'

export const ReceiptActivity = () => {

    const {Url} = useContext(SampleContext)

    const [data, setData] = useState([]); 
    const getActivityTransaction = () => {
        axios({
            method : "GET",
            url: Url + "/admin/transaction/activity",
          }).then( res => {
                setData(res.data);
          });
    }
    useEffect(()=> {
        (async () => {
            await getActivityTransaction();
        })();
    },[]);

  return (
    <div>
        <Table header={'ข้อมูลการซื้อขาย/พาร์ทเนอร์กิจกรรม'} data={data} column={COLUMNS} Action={ReceiptActivityAction} />                   
    </div>
  )
}

export default ReceiptActivity