import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import {SampleContext} from '../../../contexts/SampleContext';

import { COLUMNS } from './Columns'
import { Table } from '../../../Components/Table/Table'
import { ConfirmAccommodationAction } from '../../../Components/Action/ConfirmAction/ConfirmAccommodationAction'

export const ConfirmAccommodation = () => {

  const {Url} = useContext(SampleContext)

  const [data, setData] = useState([]); 
  const getUser = () => {
      axios({
          method : "GET",
          url: Url + "/admin/getuser",
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
        <Table header={'อนุมัติพาร์ทเนอร์ที่พัก'} data={data} column={COLUMNS} Action={ConfirmAccommodationAction} /> 
        {data === [] 
        ? <div>It's empty</div>
        : ""
        }                  
    </div>
  )
}

export default ConfirmAccommodation