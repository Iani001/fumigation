import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            {/* Navigation Links */}
            <div style={styles.navLinks}>
                <Link to="/" style={styles.link}>Home</Link>
                <Link to="/aboutus" style={styles.link}>About Us</Link>
                <Link to="/services" style={styles.link}>Services</Link>
                <Link to="/contact" style={styles.link}>Contact</Link>
            </div>

            {/* Divider */}
            <hr style={styles.divider} />

            {/* Copyright and Developer Info */}
            <div style={styles.info}>
                <p style={styles.copyright}>
                    © 2024 Fumigation Services. All rights reserved.
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



// import React from 'react';

// const Footer = () => {
//     return (
//         <footer style={styles.footer}>
//             <p>© 2024 Fumigation Services. All rights reserved.</p>
//         </footer>
//     );
// };

// const styles = {
//     footer: {
//         textAlign: 'center',
//         padding: '10px 20px',
//         backgroundColor: '#01377D',  //light blue
//         color: '#fff',
//         // position: 'fixed',
//         bottom: 0,
//         width: '100%',
//     },
// };

// export default Footer;
