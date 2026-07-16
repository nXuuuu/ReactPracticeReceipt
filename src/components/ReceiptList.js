import React from "react";
import Receipt from "./Receipt";

export default function ReceiptList({ receipts }) {
    return (
        <article className="receipts-container">
            <header className="main-header">
                <span className="main-subtitle">CUSTOMER RECORD</span>
                <h1 className="main-title">Store Receipts</h1>
                <div className="title-separator"></div>
            </header>
            <div className="receipts-grid">
                {receipts.map((receipt, i) => (
                    <Receipt key={i} {...receipt} />
                ))}
            </div>
        </article>
    )
}
