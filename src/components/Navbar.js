import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactLogo from '../assets/images/logo4.jpg'; // Adjust the path to match your project structure

const Navbar = () => {
     const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

         return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
         <header style={isScrolled ? { ...styles.header, ...styles.scrolled } : styles.header}>
            <div style={styles.container}>
                <Link to="/" style={styles.logo}>
                    <img src={ReactLogo} alt="Logo" style={styles.logoImg} />
                    {/* Optional: Add text next to the logo */}
                    <h1 style={styles.logoText}>Jibreel Cleaners and Pest Control</h1>
                </Link>
                <nav style={styles.navbar}>
                    <ul style={styles.navLinks}>
                        <li><Link to="/" style={styles.link}>Home</Link></li>
                        <li><Link to="/aboutUs" style={styles.link}>About</Link></li>
                        <li><Link to="/services" style={styles.link}>Services</Link></li>
                        {/* <li><Link to="/blog" style={styles.link}>Blogs</Link></li> */}
                        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
                        <li><Link to="/contact" style={{ ...styles.quoteLink, ...styles.quoteLinkHover }}>Call To Action</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: '#01377D', //light blue
        color: '#fff',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000, // Ensure it stays above other elements
    },

    scrolled: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Transparent blue when scrolled
    },

    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    logo: {
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        alignItems: 'center',
        textAlign: 'center', // Center-align the text and logo
        textDecoration: 'none',
        color: '#fff',
    },
    logoImg: {
        height: '60px',
        marginBottom: '5px', // Add space between the logo and the text,
    },
    logoText: {
        fontSize: '14px', // Make the text smaller
        color: '#FFF', // Match brand color
        
    },
    navLinks: {
        display: 'flex',
        listStyle: 'none',
        gap: '15px',
        margin: 0,
        padding: 0,
    },
    navbar: {
        display: 'flex',
        alignItems: 'center',
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
        fontWeight: 'bold',
        padding: '5px 10px',
        transition: 'color 0.3s',
    },
    linkHover: {
        color: '#FFD700',
    },
    quoteLink: {
        textDecoration: 'none',
        color: '#fff',
        backgroundColor: '#01377D', //light blue
        borderRadius: '5px',
        padding: '8px 20px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s',
    },
    quoteLinkHover: {
        backgroundColor: '#7ED348', //light green
        color: '#fff',
    },
};

export default Navbar;




