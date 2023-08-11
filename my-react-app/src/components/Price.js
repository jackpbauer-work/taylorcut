import React, {useState, useEffect} from 'react';
import '../css/Price.css';

function Price() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);  

    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        if (offsetY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }

        if (offsetY > 500) {    
            setIsVisible2(true);
        } else {
            setIsVisible2(false);
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [offsetY]);

const whatsthedeal = {
    name: 'so, what\'s the deal?',
    description: 'Cost, what\'s included, and payment options',
}

    const handleReserveSpot = () => {
        window.location.href = 'https://buy.stripe.com/9AQaIDd9H0IV7f2bIO';
    };

    const handleFullPayment = () => {
        window.location.href = 'https://buy.stripe.com/28o8AvedL2R38j67sw';
    };

    return (
        <div className="price-page">
            <div className="price-title">
                <h1 className="price-h1">
                    {whatsthedeal.name}
                </h1>
            </div>
        <div className="price-container">
            <div className="prices">
                <h2>cost</h2>
                <p>shared room for two people: <span>$2,500 per person</span></p>
                <p>*shared room for four people: <span>$2,250 per person</span></p>
                <div>
                    <p style={{fontSize: '0.8em', color: '#f9f9f9'}}> *Limited availability</p>
                </div>
            </div>

            <div className="included-excluded-wrapper">
                <div className="included-cost">
                    <h1 className="upcoming-included-h1">included</h1>
                    <div className="included-container">
                        <ul className="upcoming-included-list">
                            <li>🔹 accommodation & local transportation</li>
                            <li>🔹 breakfast, lunch, dinner</li>
                            <li>🔹 daily yoga + workouts</li>
                            <li>🔹 meditation + breathwork</li>
                            <li>🔹 cacao ceremony</li>
                            <li>🔹 sweat lodge ceremony (temescal)</li>
                            <li>🔹 welcome kit</li>
                        </ul>
                    </div>
                </div>
                <div className="excluded-cost">
                    <h1 className="upcoming-excluded-h1">excluded</h1>
                    <div className="excluded-container">
                        <ul className="upcoming-excluded-list">
                            <li>⚪ airfare</li>
                            <li>⚪ additional snacks/beverages</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="payment-options">
                <h2 className='payment-options-h2'>payment options</h2>
                    <p className='winner'>🛫 FREE ROUND TRIP AIRFARE 🛫 </p>
                 <p className='made'>Make a payment by 9/15 for a chance to win free roundtrip airfare.</p>
                <div className="option">
                    <h3 className="deposit">RESERVE YOUR SPOT (deposit)</h3>
                    <p>Secure your spot with a $500 non-refundable deposit. The remaining balance will be due later.</p>
                    <button className="payment-btn-deposit" onClick={handleReserveSpot}>Pay Deposit</button>
                </div>
                <div className="option">
                    <h3>PAY IN FULL</h3>
                    <p className="in-full">lock in your spot by paying in full today!</p>
                    <button className="payment-btn-full" onClick={handleFullPayment}>Pay in Full</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Price;
