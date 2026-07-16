import React from 'react';

export default function Item({ name, quantity, price }) {
    return (
        <li className="receipt-item">
            <span className="item-qty">{quantity}x</span>
            <span className="item-name">{name}</span>
            <span className="item-price">${(price * quantity).toFixed(2)}</span>
        </li>
    )
}
