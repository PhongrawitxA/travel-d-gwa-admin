import React, { useEffect, useState,useContext } from 'react'
import axios from 'axios'

import { COLUMNS } from './Columns'
import { Table } from '../../Components/Table/Table'
import { RentcarAction } from '../../Components/Action/RentcarAction'
import {SampleContext} from '../../contexts/SampleContext';

export const Rentcar = () => {

  const {Url} = useContext(SampleContext)
  const [data, setData] = useState([]); 
  const getRentcarPartner = () => {
      axios({
          method : "GET",
          url: Url+"admin/getrentcarpartner",
        }).then( res => {
              setData(res.data);
        });
  }
  useEffect(()=> {
      (async () => {
          await getRentcarPartner();
      })();
  },[]); 

  return (
    <div>
        <Table header={'พาร์ทเนอร์เช่ารถ'} data={data} column={COLUMNS} Action={RentcarAction}/>                   
    </div>
  )
}

export default Rentcar