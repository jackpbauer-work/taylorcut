import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import yogaforest from '../images/yogaforest.jpg';
import WeDoTitle from './WeDoTitle';

const isMobile = window.innerWidth <= 768;  // Check if the screen width is less than or equal to 768px.

const h2Style = {
    fontSize: isMobile ? '1.4rem' : '2.0rem',
    color: 'black',
};

const pStyle = {
    fontSize: isMobile ? '1.0rem' : '1.2rem',
    color: 'black',
};

const h4Style = {
    fontSize: isMobile ? '1.2rem' : '1.4rem',
    color: 'black',
    fontStyle: 'italic',
};

function WeDo() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 100,
            once: false,
            mirror: false,
        });
    }, []);

    const weDoStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: isMobile ? '20px' : '50px',
        fontFamily: "'Cormorant Garamond', serif",
        height: '100vh',
         backgroundImage: isMobile ? 'none' : `url(${yogaforest})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white'
    };

    const childDivContainer = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '50px'
    };

    const childDivStyle = {
        flex: '1',
        textAlign: 'center',
        margin: isMobile ? '10px 0' : '50px',
        padding: isMobile ? '15px' : '30px',
        borderRadius: '50px',
        backgroundColor: 'rgba(225, 222, 231, 0.8)',
        boxShadow: '5px 5px 20px 5px rgba(35, 35, 35, 0.4)',
    };

    return (
        <div style={weDoStyle}>
            <WeDoTitle />
            <div style={childDivContainer}>
                <div data-aos="fade-left" style={childDivStyle}>
                    <h2 style={h2Style}>fitness</h2>
                    <p style={pStyle}>daily strength - calisthenics, resistance work, tabata, enduring training.</p>
                    <h4 style={h4Style}>dig deep.</h4>
                    <h4 style={h4Style}>feel strong.</h4>
                </div>
                <div data-aos="fade-up" style={childDivStyle}>
                    <h2 style={h2Style}>yoga</h2>
                    <p style={pStyle}>daily yoga - vinyasa, power, restorative.</p>
                    <h4 style={h4Style}>inhale deeply.</h4>
                    <h4 style={h4Style}>exhale fully.</h4>
                </div>
                <div data-aos="fade-left" style={childDivStyle}>
                    <h2 style={h2Style}>solitude</h2>
                    <p style={pStyle}>your time - journal, read in a hammock, day dream with a view, explore the town, get a massage.</p>
                    <h4 style={h4Style}>you came to unwind.</h4>
                    <h4 style={h4Style}>so do it.</h4>
                </div>
            </div>
        </div>
    );
}

export default WeDo;
