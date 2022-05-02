const GET_TABLE_LIST = 'GET_TABLE_LIST';
const TABLE_LIST_WITH_FILTER = 'TABLE_LIST_WITH_FILTER';
const CHUNK = 'CHUNK';

export const initialState = {
    tableList: [],
    tableListWithFilter: [],
    chunk: [],
    onLoad: true
}

export const tableListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TABLE_LIST:
            return {
                ...state,
                tableList: action.payload,
                tableListWithFilter: action.payload,
                onLoad: false
            }

        case TABLE_LIST_WITH_FILTER:
            return {
                ...state,
                tableListWithFilter: action.payload,
                onLoad: false
            }

        case CHUNK:
            return {
                ...state,
                chunk: action.payload,
                onLoad: false
            }
        default:
            return state
    }
}


export const tableListAC = (tableList) => {
    return {
        type: GET_TABLE_LIST,
        payload: tableList
    }
}

export const tableListWithFilterAC = (tableListWithFilter) => {
    return {
        type: TABLE_LIST_WITH_FILTER,
        payload: tableListWithFilter
    }
}

export const chunkAC = (chunk) => {
    return {
        type: CHUNK,
        payload: chunk
    }
}