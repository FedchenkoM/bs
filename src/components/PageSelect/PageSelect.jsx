import './pageSelect.scss';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

const PageSelect = ({ chunkHandler }) => {
    const tableListWithFilter = useSelector(state => state.tableListWithFilter)
    const numberOfPages = Math.ceil(tableListWithFilter.length / 10)
    let [currentPage, setCurrentPage] = useState(1)
    useEffect(() => {
        setCurrentPage(1)
    }, [tableListWithFilter])

    const changePageHandler = (target) => {
        let current = currentPage
        const text = target.innerText
        if (text === 'Назад') {
            if (current - 1 <= 0) return
            setCurrentPage(--current)
            chunkHandler(tableListWithFilter, current * 10 - 10)
        } else if (text === 'Далее') {
            if (current + 1 > numberOfPages) return
            setCurrentPage(++current)
            chunkHandler(tableListWithFilter, current * 10 - 10)
        } else if (target === 'lastPage') {
            setCurrentPage(numberOfPages)
            chunkHandler(tableListWithFilter, numberOfPages * 10 - 10)
        } else if (target === 'firstPage') {
            setCurrentPage(1)
            chunkHandler(tableListWithFilter, 1 * 10 - 10)
        }
        return
    }

    return (
        <div
            onClick={(e) => changePageHandler(e.target)}
            className="select-container select">
            <div className="select_back">Назад</div>
            <div className="select__numbers-container">
                {tableListWithFilter.length
                    ? <>
                        <span
                            onClick={() => changePageHandler('firstPage')}>
                            1...
                        </span>
                        <span className="select_page">
                            {currentPage}</span>
                        <span
                            onClick={() => changePageHandler('lastPage')}>
                            ...{numberOfPages}
                        </span>
                    </>
                    : <strong>Нет результатов</strong>
                }
            </div>
            <div className="select_next">Далее</div>
        </div>
    );
};

export default PageSelect;