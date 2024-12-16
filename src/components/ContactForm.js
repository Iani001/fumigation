import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for contacting us!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <form style={styles.form} onSubmit={handleSubmit}>
            <label style={styles.label}>
                Name:
                <input
                    style={styles.input}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </label>
            <label style={styles.label}>
                Email:
                <input
                    style={styles.input}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <label style={styles.label}>
                Message:
                <textarea
                    style={styles.textarea}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </label>
            <button style={styles.button} type="submit">Send</button>
        </form>
    );
};

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '500px',
        margin: 'auto',
    },
    label: {
        marginBottom: '10px',
    },
    input: {
        padding: '10px',
        marginBottom: '10px',
        width: '100%',
    },
    textarea: {
        padding: '10px',
        marginBottom: '10px',
        width: '100%',
        height: '100px',
    },
    button: {
        padding: '10px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem',
    },
};

export default ContactForm;
