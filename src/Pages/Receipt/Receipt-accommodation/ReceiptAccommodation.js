import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { SampleContext } from '../../../contexts/SampleContext';

import { COLUMNS } from './Columns'
import { Table } from '../../../Components/Table/Table'
import { ReceiptAccommodationAction } from '../../../Components/Action/ReceiptAction/ReceiptAccommodationAction'

export const ReceiptAccommodation = () => {

    const {Url} = useContext(SampleContext)

    const [data, setData] = useState([]); 
    const getAccommodationTransaction = () => {
        axios({
            method : "GET",
            url: Url + "/admin/transaction/accommodation",
          }).then( res => {
                setData(res.data);
          });
    }
    useEffect(()=> {
        (async () => {
            await getAccommodationTransaction();
        })();
    },[]);

  return (
    <div>
        <Table header={'ข้อมูลการซื้อขาย/พาร์ทเนอร์ที่พัก'} data={data} column={COLUMNS} Action={ReceiptAccommodationAction} />                   
    </div>
  )
}

export default ReceiptAccommodation