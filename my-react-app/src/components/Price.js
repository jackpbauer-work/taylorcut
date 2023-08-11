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
                <h2>Cost</h2>
                <p>Shared room for two people: <span>$2,500 per person</span></p>
                <p>*Shared room for four people: <span>$2,250 per person</span></p>
                <div>
                    <p style={{fontSize: '0.8em', color: '#f9f9f9'}}> *Limited availability</p>
                </div>
            </div>

            <div className="included-excluded-wrapper">
                <div className="included-cost">
                    <h1 className="upcoming-included-h1">Included</h1>
                    <div className="included-container">
                        <ul className="upcoming-included-list">
                            <li>🔹 Accommodation & local transportation</li>
                            <li>🔹 Excursions</li>
                            <li>🔹 Breakfast, lunch, dinner</li>
                            <li>🔹 Yoga classes</li>
                            <li>🔹 Meditation + breathwork</li>
                            <li>🔹 Daily workout</li>
                            <li>🔹 Cacao ceremony</li>
                            <li>🔹 Temazcal ceremony</li>
                            <li>🔹 Transportation for excursion day</li>
                            <li>🔹 Welcome goodie bag</li>
                        </ul>
                    </div>
                </div>
                <div className="excluded-cost">
                    <h1 className="upcoming-excluded-h1">Excluded</h1>
                    <div className="excluded-container">
                        <ul className="upcoming-excluded-list">
                            <li>❌ Airfare</li>
                            <li>❌ Meals/snacks outside of the daily 3, alcohol, and keepsakes</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="payment-options">
                <h2 className='payment-options-h2'>Payment options</h2>
                <div className="option">
                    <h3>Pay in full</h3>
                    <p>All payments made in full by August 31st will be Entered to win...</p>
                    <p>FREE ROUND TRIP AIRFARE TICKETS</p>
                    <button className="payment-btn" onClick={handleFullPayment}>Pay in Full</button>
                </div>
                <div className="option">
                    <h3>Reserve your spot (Deposit)</h3>
                    <p>Secure your spot with a $500 non-refundable deposit. The remaining balance will be due later.</p>
                    <button className="payment-btn" onClick={handleReserveSpot}>Pay Deposit</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Price;
