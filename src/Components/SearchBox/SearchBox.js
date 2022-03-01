import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import './SearchBox.css'

export const SearchBox = ({ hint, filter, setFilter }) => {

  const [value, setValue] = useState(filter)
  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 200)

  return (
    <div>
      <input 
        type="text" id="Input"
        placeholder={'ค้นหา'+hint} 
        value={value || ''}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value)
        }}
      />
    </div>
  )
}
