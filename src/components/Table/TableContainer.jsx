import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getTableList, getTableListWithFilters } from '../../redux/actions';
import Loader from '../Loader/Loader';
import Search from '../Search/Search';
import Table from './Table';
import { sortHelper } from '../../helper';
import { tableListWithFilterAC } from '../../redux/tableListReducer';
import { tableListChunk } from '../../redux/actions';
import { chunkAC } from '../../redux/tableListReducer';
import PageSelect from '../PageSelect/PageSelect';


const TableContainer = () => {
    let [isSorted, setIsSorted] = useState('ASC')
    const dispatch = useDispatch()
    const tableListWithFilter = useSelector(state => state.tableListWithFilter)
    const tableList = useSelector(state => state.tableList)
    const chunk = useSelector(state => state.chunk)

    useEffect(() => {
        dispatch(getTableList())
    }, [dispatch])

    const sortHandler = (target) => {
        const sortName = target.getAttribute('name')
        const isSorted = target.getAttribute('issorted')
        if (isSorted === 'ASC') {
            const sortedList = sortHelper(tableListWithFilter, sortName)
            dispatch(tableListWithFilterAC(sortedList))
            setIsSorted('DESC')
        } else {
            const sortedList = sortHelper(tableListWithFilter, "DESC")
            dispatch(tableListWithFilterAC(sortedList))
            setIsSorted('ASC')
        }
    }

    const searchHandler = (searchParams) => {
        const list = getTableListWithFilters(tableList, searchParams)
        dispatch(tableListWithFilterAC(list))
    }

    const chunkHandler = (table, start) => {
        const list = tableListChunk(table, start)
        dispatch(chunkAC(list))
    }

    return (
        <>
            <Search
                searchHandler={searchHandler} />
            {chunk
                ? <Table
                    chunkHandler={chunkHandler}
                    issorted={isSorted}
                    sortHandler={sortHandler} />
                : <Loader />}
            <PageSelect
                chunkHandler={chunkHandler} />
        </>
    );
};

export default TableContainer;