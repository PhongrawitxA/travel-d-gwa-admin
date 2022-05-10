import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { COLUMNS } from './Columns'
import { Table } from '../../../Components/Table/Table'
import { ConfirmRentcarAction } from '../../../Components/Action/ConfirmAction/ConfirmRentcarAction'

export const ConfirmRentcar = () => {
  const [data, setData] = useState([]); 
  const getUser = () => {
      axios({
          method : "GET",
          url: "https://traveldgwa.herokuapp.com/admin/getuser",
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
        <Table header={'อนุมัติพาร์ทเนอร์เช่ารถ'} data={data} column={COLUMNS} Action={ConfirmRentcarAction} />                   
    </div>
  )
}

export default ConfirmRentcar