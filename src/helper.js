export const chunkHelper = (tableList, start) => {
    let chunk = [];
    for (let i = start; i < start + 10; i++) {
        if (tableList[i]) {
            chunk.push(tableList[i])
        } 
    }
    return chunk
}

export const sortHelper = (tableList, type) => {
    const tableListCopy = tableList.map(el => el)
    if (type === '_id') {
        return tableListCopy
            .sort((a, b) => b.id - a.id)
    } else if (type === 'DESC') {
        return tableListCopy
            .sort((a, b) => a.id - b.id)
    } else if (type === '_head') {
        return tableListCopy
            .sort((a, b) => a.title.localeCompare(b.title))
    } else {
        return tableListCopy
            .sort((a, b) => a.body.localeCompare(b.body))
    }
}

export const searchHelper = (tableList, searchParams) => {
    if (searchParams === '') return tableList
    const tableListCopy = tableList.map(el => el)
    return tableListCopy.filter(el => el.title.indexOf(searchParams) >= 0)
}