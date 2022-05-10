import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { COLUMNS } from './Columns'
import { Table } from '../../Components/Table/Table'
import { RentcarAction } from '../../Components/Action/RentcarAction'

export const Rentcar = () => {

  const [data, setData] = useState([]); 
  const getRentcarPartner = () => {
      axios({
          method : "GET",
          url: {"https://${Url}/admin/getrentcarpartner"},
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