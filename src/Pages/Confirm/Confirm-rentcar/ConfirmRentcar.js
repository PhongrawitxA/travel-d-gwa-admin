import React, { useEffect, useState ,useContext } from 'react'
import axios from 'axios'

import { COLUMNS } from './Columns'
import { Table } from '../../../Components/Table/Table'
import { ConfirmRentcarAction } from '../../../Components/Action/ConfirmAction/ConfirmRentcarAction'
import {SampleContext} from '../../../contexts/SampleContext';

export const ConfirmRentcar = () => {
  const {Url} = useContext(SampleContext);
  const [data, setData] = useState([]); 
  const getRentcarRegister = () => {
      axios({
          method : "GET",
          url: Url+"/admin/getrentcarregister",
        }).then( res => {
              setData(res.data);
        });
  }
  useEffect(()=> {
      (async () => {
          await getRentcarRegister();
      })();
  },[]);

  return (
    <div>
        <Table header={'อนุมัติพาร์ทเนอร์เช่ารถ'} data={data} column={COLUMNS} Action={ConfirmRentcarAction} />                   
    </div>
  )
}

export default ConfirmRentcar