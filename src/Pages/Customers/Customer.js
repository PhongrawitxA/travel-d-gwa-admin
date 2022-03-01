import React, { Component, useState, useEffect } from 'react'
import axios from "axios";

import { COLUMNS } from './Columns';
import { Table } from '../../Components/Table/Table';
import { CustomerAction } from './CustomerAction';


export const Customer = () => {

  const [data,setData] = useState([]); 
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
          <Table header={'ผู้ใช้ & พาร์ทเนอร์'} data={data} column={COLUMNS} Action={CustomerAction} />                   
      </div>
  )
}

export default Customer