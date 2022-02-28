import React from 'react'
import './SearchBox.css'

function SearchBox(props) {

  return (
    <div>
      <input type="text" id="Input" placeholder={props.hint}></input>
    </div>
  )
}

export default SearchBox