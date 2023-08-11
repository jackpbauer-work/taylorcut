import React from 'react';
import '../css/FAQs.css';

function FAQs() {
    return (
    
        <div className="faq-container">
            <h2>payment & cancellations</h2>

            <div className="faq-section">
                <h3>your deposits & payment plan</h3>
                <p>
                    while we do require a non-refundable $500 deposit to hold your spot, we understand that the full cost of the retreat might not be feasible for everyone upfront. therefore, we offer payment plans to break up the total cost into manageable installments. if you're interested in this option, please reach out to info@thetaylorcut.com for more details.
                </p>
            </div>

            <div className="faq-section">
                <h3>our cancellation policy</h3>
                <p>
                    we understand that sometimes plans change, and we have tried to make our cancellation policy as fair and flexible as possible. our policy is as follows:
                </p>
                <ul>
                    <li>the $500 deposit is non-refundable. this policy is in place due to the upfront costs associated with reserving your spot.</li>
                    <li>if you cancel your booking within 21 days of purchasing, we will offer a full refund, excluding the non-refundable deposit.</li>
                    <li>if you cancel within 45 days of the retreat's departure date, we will offer a 50% refund.</li>
                    <li>cancellations within 15 days of the trip are non-refundable due to the costs incurred in the late stages of planning the retreat.</li>
                </ul>
            </div>
        </div>
    );
}

export default FAQs;
