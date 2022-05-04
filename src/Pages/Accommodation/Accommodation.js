import React, { useEffect, useState} from 'react'
import axios from 'axios'

import { COLUMNS } from './Columns'
import { Table } from '../../Components/Table/Table'
import { AccommodationAction } from '../../Components/Action/AccommodationAction'

export const Accommodation = () => {

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
        <Table header={'พาร์ทเนอร์ที่พัก'} data={data} column={COLUMNS} Action={AccommodationAction} />                   
    </div>
  )
}

export default Accommodation