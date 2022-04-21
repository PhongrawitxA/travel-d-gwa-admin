import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { COLUMNS } from './Columns'
import { Table } from '../../Components/Table/Table'
import { RentcarAction } from '../../Components/Action/RentcarAction'

export const Rentcar = () => {

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
        <Table header={'พาร์ทเนอร์เช่ารถ'} data={data} column={COLUMNS} Action={RentcarAction}/>                   
    </div>
  )
}

export default Rentcar