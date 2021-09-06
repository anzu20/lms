import {Pagination} from "react-bootstrap";
import React from "react";

function PaginationItems({count, activePage, setActivePage}) {
    let items = [];
    for (let number = 1; number <= count; number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === activePage}
                onClick={(e) => setActivePage(+e.target.text)}
            >
                {number}
            </Pagination.Item>
        );
    }
    items.push(
        <Pagination.Next key="next" onClick={() => setActivePage(activePage < count ? (activePage + 1) : activePage)} />
    );

    return items;
}

export default PaginationItems;