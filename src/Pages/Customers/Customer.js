import React, { Component } from 'react'
import { CustomerTable } from '../../Components/CustomerTable/CustomerTable';


export class Customer extends Component {
  render() {
    return (
        <div>
            <CustomerTable />                   
        </div>
    )
  }
}

export default Customer