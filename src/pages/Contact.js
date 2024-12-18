import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
    return (
        <div>
            <Navbar />

            {/* Banner Section */}
            <div style={{ ...styles.banner, backgroundImage: 'url("/images/contact.jpg")' }}>
                <h1 style={styles.bannerHeading}>Contact Us</h1>
                <p style={styles.bannerSubheading}>
                    We love hearing from you! Get in touch with Jibreel Cleaners and Pest Control
                </p>
            </div>

            {/* Main Contact Section */}
            <div style={styles.container}>
                {/* Flexbox layout for the company info and contact form */}
                <div style={styles.mainContent}>
                    {/* Company Information Section */}
                    <div style={styles.infoContainer}>
                        <div style={styles.infoBlock}>
                            <h2 style={styles.heading}>Location</h2>
                            <p style={styles.paragraph}>Nairobi, Kenya</p>
                        </div>
                        <div style={styles.infoBlock}>
                            <h2 style={styles.heading}>Call Us</h2>
                            <p style={styles.paragraph}>Phone: +254 707 119 276</p>
                            <p style={styles.paragraph}>WhatsApp: +254 113 057 911</p>
                        </div>
                        <div style={styles.infoBlock}>
                            <h2 style={styles.heading}>Email Us</h2>
                            <p style={styles.paragraph}>gabrielkiswili099@gmail.com</p>
                        </div>
                    </div>

                    {/* Contact Form Section with a frame */}
                    <div style={styles.formContainer}>
                        <h2 style={styles.heading}>Send Us a Message</h2>
                        <form style={styles.form}>
                            <div style={styles.formGroup}>
                                <label htmlFor="name" style={styles.label}>Your Name</label>
                                <input type="text" id="name" name="name" style={styles.input} placeholder="Enter your full name" />
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="email" style={styles.label}>Your Email</label>
                                <input type="email" id="email" name="email" style={styles.input} placeholder="Enter your email address" />
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="subject" style={styles.label}>Subject</label>
                                <input type="text" id="subject" name="subject" style={styles.input} placeholder="Enter the subject" />
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="message" style={styles.label}>Your Message</label>
                                <textarea id="message" name="message" style={styles.textarea} placeholder="Enter your message" rows="5"></textarea>
                            </div>
                            <button type="submit" style={styles.button}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

const styles = {
    banner: {
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        textAlign: 'center',
    },
    bannerHeading: {
        fontSize: '3rem',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        margin: '0',
        color: '#7ED348',
    },
    bannerSubheading: {
        fontSize: '1.5rem',
        marginTop: '10px',
        color: '#fff',
        textAlign: 'justify',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
    },
    mainContent: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    infoContainer: {
        flex: 1,
        marginRight: '20px',
        marginBottom: '20px',
    },
    infoBlock: {
        marginBottom: '20px',
        textAlign: 'left',
    },
    heading: {
        fontSize: '2rem',
        color: '#01377D',
        marginBottom: '10px',
    },
    paragraph: {
        fontSize: '1.2rem',
        lineHeight: '1.8',
        color: '#555',
    },
    formContainer: {
        flex: 1,
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
        border: '2px solid #F0F0F0',  // Add border around the form
        borderRadius: '10px',  // Rounded corners for the frame
        padding: '20px',  // Space between the form and the border
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',  // Optional: add a shadow for depth
        backgroundColor: '#F0F0F0',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#F0F0F0',
    },
    formGroup: {
        marginBottom: '20px',
    },
    label: {
        fontSize: '1rem',
        fontWeight: 'bold',
        marginBottom: '5px',
        display: 'block',
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '1rem',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        fontSize: '1rem',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    button: {
        backgroundColor: '#01377D',
        color: '#fff',
        padding: '10px 20px',
        fontSize: '1.2rem',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default ContactUs;
