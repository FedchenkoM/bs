import axios from 'axios';
import { searchHelper, chunkHelper } from '../helper';
import { tableListAC } from './tableListReducer';

export const getTableList = () => {
    return async (dispatch) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        const tableList = response.data
        return dispatch(tableListAC(tableList))
    }
}

export const getTableListWithFilters = (tableList, searchParams) => {
    return searchHelper(tableList, searchParams)
}

export const tableListChunk = (tableList, start) => {
    return chunkHelper(tableList, start)
}