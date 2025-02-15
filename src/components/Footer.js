import React from 'react';
import { FaFacebook, FaTiktok, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={styles.footer}>
           {/* Social Media Icons */}
            <div style={styles.navLinks}>
                <a
                    href="https://www.facebook.com/jibreelcleaners"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.icon}
                >
                    <FaFacebook />
                </a>
                <a
                    href="https://www.tiktok.com/@jibreel.cleaners"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.icon}
                >
                    <FaTiktok />
                </a>
                <a
                    href="https://twitter.com/jibreelcleaners"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.icon}
                >
                    <FaTwitter />
                </a>
                <a
                    // href="https://wa.me/254113057911"
                    href="https://wa.me/254113057911?text=Hello%20Jibreel%20Cleaners,%20I%20need%20your%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.icon}
                >
                    <FaWhatsapp />
                </a>
            </div>

            {/* Divider */}
            <hr style={styles.divider} />

            {/* Copyright and Developer Info */}
            <div style={styles.info}>
                <p style={styles.copyright}>
                    © 2025 Fumigation Services. All rights reserved.
                </p>
                <p style={styles.developer}>
                    Designed By {' '}
                    <a
                    href="https://www.linkedin.com/in/james-ian-047776294/"
                    style={styles.devName}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        Kingiani
                        </a>
                </p>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#01377D', // Dark blue background
        color: '#fff',
        textAlign: 'center',
        padding: '20px 10px',
        width: '100%',
        bottom: 0,
    },
    navLinks: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '10px',
        // color: '#7ED348',
    },
    icon: {
        color: '#7ED348', // Light green color for icons
        fontSize: '1.5rem',
        transition: 'color 0.3s ease',
    },
    link: {
        color: '#7ED348',
        textDecoration: 'none',
        fontSize: '1rem',
        fontWeight: '500',
    },
    linkHover: {
        textDecoration: 'underline',
    },
    divider: {
        border: 'none',
        borderTop: '1px solid #FED348',
        margin: '10px auto',
        width: '60%',
    },
    info: {
        fontSize: '0.9rem',
    },
    copyright: {
        margin: '5px 0',
    },
    developer: {
        // margin: '5px 0',
    },
    devName: {
        fontWeight: 'bold',
        color: '#7ED348', // Light green for developer's name
    },
};

export default Footer;


