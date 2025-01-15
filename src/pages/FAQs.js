import React, { useState } from 'react';

const FAQ = () => {
    // State to manage the currently open FAQ
    const [openFAQ, setOpenFAQ] = useState(null);

    // Toggle function for FAQ items
    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData = [
        {
            question: "What services does Jibreel Cleaners and Pest Control offer?",
            answer: "We provide a wide range of services, including general house cleaning, fumigation (pest control), sofa and mattress cleaning, landscaping, office deep cleaning, car interior cleaning, pressure washing, and more. Visit our services page for a complete list.",
        },
        {
            question: "Are your cleaning products eco-friendly?",
            answer: "Yes, we use eco-friendly and non-toxic products to ensure the safety of your family, pets, and the environment.",
        },
        {
            question: " Can Jibreel customize a cleaning package?",
            answer: "Absolutely! We offer customizable cleaning packages tailored to your specific needs and preferences.",
        },
        {
            question: "How do you ensure the quality of your cleaning services?",
            answer: "Our team consists of experienced professionals, and we follow a strict quality control process to ensure client satisfaction.",
        },
        {
            question: "How much do your services cost?",
            answer: "Pricing depends on the type of service, the size of the area, and the level of work required. Contact us for a free quote.",
        },
    ];

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>FREQUENTLY ASKED QUESTIONS</h2>
            <div style={styles.faqContainer}>
                {faqData.map((item, index) => (
                    <div key={index} style={styles.faqItem}>
                        <div
                            style={styles.question}
                            onClick={() => toggleFAQ(index)}
                        >
                            <span>{item.question}</span>
                            <span>{openFAQ === index ? '>' : '<'}</span>
                        </div>
                        {openFAQ === index && (
                            <div style={styles.answer}>
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

// Styles
const styles = {
    container: {
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
    },
    heading: {
        fontSize: '2rem',
        marginBottom: '20px',
        color: '#01377D',
    },
    faqContainer: {
        marginTop: '20px',
        textAlign: 'left',
    },
    faqItem: {
        borderBottom: '1px solid #ddd',
        padding: '10px 0',
    },
    question: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    answer: {
        fontSize: '1rem',
        marginTop: '10px',
        color: '#555',
    },
};

export default FAQ;
