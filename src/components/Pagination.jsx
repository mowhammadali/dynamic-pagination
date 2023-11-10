import React, { useEffect, useState } from "react";
import { css } from '@emotion/css';

const Pagination = ({ total , start , setStart , setEnd }) => {
 
    const [items] = useState(20);
    const [current , setCurrent] = useState((start / items) + 1)
    const [pages] = useState(() => {
        let arr = [];
        for(let i = 1; i <= Math.ceil(total / items); i++) {
            arr.push(i);
        }
        return arr;
    });

    useEffect(() => {setCurrent((start / items) + 1)} , [start])

	return (
        <div className="w-100 d-flex justify-content-center py-3 user-select-none">
            <nav aria-label="...">
                <ul className="pagination">
                    <button className={`page-item ${btn} ${current < 2 && 'disabled'}`}
                    disabled={current < 2 && true}
                    onClick={() => {setStart(prev => prev - items); setEnd(prev => prev - items)}}>
                        Previous
                    </button>
                    {
                        current < 3 
                        ? pages.slice(0 , 3).map((page , index) => {
                            return (
                                <li style={{cursor: 'pointer'}} key={index} className={`page-item ${current === page && 'active'}`} 
                                onClick={() => {setStart((page - 1) * items); setEnd(((page - 1) * items) + items)}}>
                                    <span className="page-link">
                                        {page}
                                    </span>
                                </li>
                            )
                        }) 
                        : current > pages.length - 1 
                        ? 
                        pages.slice(current - 3 , current).map((page , index) => {
                            return (
                                <li style={{cursor: 'pointer'}} key={index} className={`page-item ${current === page && 'active'}`} 
                                onClick={() => {setStart((page - 1) * items); setEnd(((page - 1) * items) + items)}}>
                                    <span className="page-link">
                                        {page}
                                    </span>
                                </li>
                            )
                        })
                        :
                        pages.slice(current - 2 , current + 1).map((page , index) => {
                            return (
                                <li style={{cursor: 'pointer'}} key={index} className={`page-item ${current === page && 'active'}`} 
                                onClick={() => {setStart((page - 1) * items); setEnd(((page - 1) * items) + items)}}>
                                    <span className="page-link">
                                        {page}
                                    </span>
                                </li>
                            )
                        })
                    }
                    <button className={`page-item ${btn} ${current > pages.length - 1 && 'disabled'}`}
                    disabled={current > pages.length - 1 && true}
                    onClick={() => {setStart(prev => prev + items); setEnd(prev => prev + items)}}>
                            Next
                    </button>
                </ul>
            </nav>
        </div>
	);
};

const btn = css`
    outline: none;
    border: none;
    background-color: white;
    padding: 0 10px;
    color: rgb(0, 106, 255);
    &.disabled {
        color: #777 !important;
    }
`

export default Pagination;
