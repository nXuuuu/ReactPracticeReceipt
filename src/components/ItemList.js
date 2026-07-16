import React from "react";
import Item from "./Item";

export default function ItemList({ items }) {
    return (
        <ul className="receipt-items-list">
            {items.map((item, i) => (
                <Item key={i} {...item} />
            ))}
        </ul>
    )
}
