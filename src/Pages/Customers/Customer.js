import React, { useState, useEffect } from 'react'
import axios from "axios";

import { COLUMNS } from './Columns';
import { Table } from '../../Components/Table/Table';
import { CustomerAction } from '../../Components/Action/CustomerAction';
import {SampleContext} from '../../contexts/SampleContext';


export const Customer = () => {

    const {Url} = useContext(SampleContext)
    const [data,setData] = useState([]); 
    const getUser = () => {
        axios({
            method : "GET",
            url: Url+"/admin/getuser",
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