import React from "react";
import ItemList from "./ItemList";
import PaymentDetails from "./PaymentDetails";

export default function Receipt({ storeName, date, items, payment }) {
    return (
        <section className="receipt-card">
            <div className="receipt-header">
                <h2>{storeName}</h2>
                <p className="receipt-date">{date}</p>
            </div>
            <div className="receipt-divider"></div>
            <ItemList items={items} />
            <div className="receipt-divider"></div>
            <PaymentDetails payment={payment} />
        </section>
    )
}
