import React from "react";

export default function PaymentDetails({ payment }) {
    return (
        <div className="receipt-payment-details">
            <ul className="payment-summary">
                {payment.map((step, i) => (
                    <li key={i}>{step}</li>
                ))}
            </ul>
        </div>
    )
}
