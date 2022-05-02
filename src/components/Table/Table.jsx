import React, { useEffect } from 'react';
import './table.scss';
import { useSelector } from 'react-redux'

const Table = ({ sortHandler, issorted, chunkHandler }) => {
    const tableListWithFilter = useSelector(state => state.tableListWithFilter)
    const chunk = useSelector(state => state.chunk)

    useEffect(() => {
        chunkHandler(tableListWithFilter, 0)
    }, [tableListWithFilter])

    const headers = [
        ['_id', 'ID'],
        ['_head', 'Заголовок'],
        ['_disc', 'Описание']
    ]

    return (
        <>
            <table
                border='1'
                className="table">
                <thead>
                    <tr className="table__header">
                        {headers.map(header => (
                            <th
                                key={header[1]}
                                className={`table__header${header[0]}`}>
                                <div
                                    className="header__disc">
                                    <div
                                        className='header__disc_text'>{header[1]}</div>
                                    <div
                                        issorted={issorted}
                                        name={header[0]}
                                        onClick={(e) => sortHandler(e.target)}
                                        className='header__disc_arrow'>
                                    </div>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="tbody-container">
                    {chunk.map((el) => (
                        <tr
                            className="table__element"
                            key={el.id}
                        >
                            <td
                                className="table__data_id">{el.id}</td>
                            <td
                                className="table__data_title">{el.title}</td>
                            <td
                                className="table__data_body">{el.body}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </>
    );
};

export default Table;