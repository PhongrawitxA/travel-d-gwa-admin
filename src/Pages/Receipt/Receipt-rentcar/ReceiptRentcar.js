import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { SampleContext } from '../../../contexts/SampleContext';

import { COLUMNS } from './Columns'
import { Table } from '../../../Components/Table/Table'
import { ReceiptRentcarAction } from '../../../Components/Action/ReceiptAction/ReceiptRentcarAction'

export const ReceiptRentcar = () => {

    const {Url} = useContext(SampleContext)

    const [data, setData] = useState([]); 
    const getRentcarTransaction = () => {
        axios({
            method : "GET",
            url: Url + "/admin/transaction/rentcar",
          }).then( res => {
                setData(res.data);
          });
    }
    useEffect(()=> {
        (async () => {
            await getRentcarTransaction();
        })();
    },[]);

  return (
    <div>
        <Table header={'ข้อมูลการซื้อขาย/พาร์ทเนอร์เช่ารถ'} data={data} column={COLUMNS} Action={ReceiptRentcarAction} />                   
    </div>
  )
}

export default ReceiptRentcar