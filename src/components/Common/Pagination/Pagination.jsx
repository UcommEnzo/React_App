import React from "react";
import c from './Pagination.module.css';

let Pagination = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pageCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    let now = currentPage

    return <div>
            {pages.map(p => {
                if ((p < now + 3 && p > now - 3) ||
                    p === 1 || p === pages.length)
                    return <button className={currentPage === p && c.selectedPage}
                                   onClick={(event) => {
                                       onPageChanged(p);
                                   }}>{p}</button>
            })}
        </div>
}

export default Pagination;