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
            question: "What services does Jabreel offer?",
            answer: "Jabreel specializes in providing cutting-edge solutions, including web development, IT consulting, cybersecurity services, and custom software development tailored to your needs.",
        },
        {
            question: "Why should I choose Jabreel for my IT needs?",
            answer: "Jabreel is committed to delivering innovative, reliable, and cost-effective solutions. Our team of experts ensures top-notch quality, customer satisfaction, and timely project delivery.",
        },
        {
            question: "How does Jabreel ensure data security for its clients?",
            answer: "We prioritize data security by implementing robust encryption, multi-layer access controls, and strict compliance with data protection regulations to safeguard your information.",
        },
        {
            question: "Can Jabreel help my business transition to the cloud?",
            answer: "Absolutely! Jabreel offers comprehensive cloud migration services, ensuring a smooth transition to cloud-based solutions while maintaining operational continuity and security.",
        },
        {
            question: "How can I get started with Jabreel?",
            answer: "Getting started is easy! Simply visit our Contact page, fill out the inquiry form, and one of our experts will reach out to discuss your project and provide a customized solution.",
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
