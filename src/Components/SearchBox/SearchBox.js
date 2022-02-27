import React from 'react'
import './SearchBox.css'
import searchFunction from './Search'

function SearchBox(props) {
  return (
    <div>
        <input type="text" id="myInput" onKeyUp={searchFunction} placeholder={props.hint}></input>
    </div>
  )
}

export default SearchBox