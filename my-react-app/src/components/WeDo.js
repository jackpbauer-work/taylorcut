import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import yogaforest from '../images/yogaforest.jpg';
import WeDoTitle from './WeDoTitle';


    const h2Style = {
        fontSize: '2.0rem',
        color: 'black', // Adjust the color as needed
    };

    const pStyle = {
        fontSize: '1.2rem',
        color: 'black', // Adjust the color as needed
        };

    const h4Style = {
        fontSize: '1.4rem',
        color: 'black', // Adjust the color as needed
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
            padding: '50px',
            fontFamily: "'Cormorant Garamond', serif",
            height: '100vh',
            backgroundImage: `url(${yogaforest})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: 'white'
        };

        const childDivContainer = {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: '50px' // add space between title and child divs
        };

        const childDivStyle = {
        flex: '1',
        textAlign: 'center',
        margin: '50px',
        padding: '30px',
        borderRadius: '50px',
        backgroundColor: 'rgba(225, 222, 231, 0.8)',
        boxShadow: '5px 5px 20px 5px rgba(35, 35, 35, 0.4)', // Adjust the box shadow to make it more 3D
        };


        return (
            <div style={{ ...weDoStyle, backgroundImage: `url(${yogaforest})` }}>
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
