import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>© 2024 Fumigation Services. All rights reserved.</p>
        </footer>
    );
};

const styles = {
    footer: {
        textAlign: 'center',
        padding: '10px 20px',
        backgroundColor: '#01377D',  //light blue
        color: '#fff',
        // position: 'fixed',
        bottom: 0,
        width: '100%',
    },
};

export default Footer;
