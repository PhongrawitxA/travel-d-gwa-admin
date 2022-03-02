import React, { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'

import { SearchBox } from '../SearchBox/SearchBox'

import './Table.css'

import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri'

export const Table = ({data, column, header, Action}) => {
    
    const columns = useMemo(() => column, [])
    
    const tableInstance = useTable({
        columns,
        data
    }, useGlobalFilter, useSortBy, usePagination)

    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        prepareRow,
        state,
        setGlobalFilter,
    } = tableInstance

    const { globalFilter } = state
    const { pageIndex } = state

    return (        
        <div className='Customer'>
            <div className='Head'>
                <h2>{header}</h2>
                <SearchBox filter={globalFilter} setFilter={setGlobalFilter} />
            </div>            
            <div className='Container'>
                <table {...getTableProps()}>
                    <thead>
                        {
                            headerGroups.map((headerGroups) => (
                                <tr {...headerGroups.getHeaderGroupProps()}>
                                    {headerGroups.headers.map((column) => (
                                        <th {...column.getHeaderProps(column.getSortByToggleProps())} id={column.render('IdName')}>
                                            {column.render('Header')}
                                            <span>           
                                                {column.isSorted ? (column.isSortedDesc ? <RiArrowUpSLine size={24} /> : <RiArrowDownSLine size={24} />) : ''}
                                            </span>
                                        </th>
                                    ))}
                                    <th id='Action'>จัดการ</th>
                                </tr>
                            ))
                        }
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {
                            page.map((row, index) => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {
                                            row.cells.map( cell => {
                                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            })
                                        }
                                       {<Action id={page[index]} />}                            
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>      
                <div className='Footer'>
                    <span>
                        หน้าที่ &nbsp;
                        <strong>
                            {pageIndex + 1} จาก {pageOptions.length}
                        </strong>
                    </span>
                    <span>
                        &nbsp; | ไปที่หน้า : &nbsp;
                        <input 
                            type='number'
                            defaultValue={pageIndex + 1}
                            max={pageOptions.length}
                            min={1}
                            onChange={e => {
                            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(pageNumber)
                            }}
                            style={{ width: '50px' }}
                        />
                    </span>
                    <div className='Button'>
                        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}><FaAngleDoubleLeft size={20} /></button>
                        <button onClick={() => previousPage()} disabled={!canPreviousPage}><FaAngleLeft size={20} /></button>
                        <button onClick={() => nextPage()} disabled={!canNextPage}><FaAngleRight size={20} /></button>
                        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}><FaAngleDoubleRight size={20} /></button>
                    </div>
                </div>              
            </div>        
        </div>        
    )
}