import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <div>
            <Navbar />

            {/* Banner Section */}
            <div style={{ ...styles.banner, backgroundImage: 'url("/images/d.jpeg")' }}>
                <h1 style={styles.bannerHeading}>ABOUT US</h1>
                <p style={styles.bannerSubheading}>Committed to Excellence in Cleaning and Pest Control</p>
            </div>

            {/* About Us Content */}
            <div style={styles.container}>
                {/* Who We Are Section */}
                <div style={styles.sectionContainer}>
                    <h2 style={styles.heading}>Who We Are</h2>
                    <div style={styles.contentRow}>
                        <img src="/images/people.jpg" alt="Who We Are" style={styles.image} />
                        <div style={styles.textContainer}>
                            <p style={styles.paragraph}>
                                At Jabreel Fumigation Services, we are more than just a cleaning and pest control company; we are your dedicated partners in ensuring a healthier, cleaner, and safer environment. Founded with a commitment to excellence, our mission is to redefine industry standards through innovation, professionalism, and attention to detail. Our team comprises highly skilled professionals who bring years of expertise in cleaning and fumigation. We prioritize eco-friendly methods and cutting-edge technology to offer solutions tailored to your specific needs. Whether it’s your home or workplace, we ensure a spotless and pest-free environment that fosters comfort and peace of mind.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Our Mission Section */}
                <div style={styles.sectionContainer}>
                    <h2 style={styles.heading}>Our Mission</h2>
                    <div style={styles.contentRowReverse}>
                        <img src="/images/p.jpeg" alt="Our Mission" style={styles.image} />
                        <div style={styles.textContainer}>
                            <p style={styles.paragraph}>
                                Our mission is rooted in providing unparalleled cleaning and pest control solutions that not only meet but exceed our clients' expectations. We are committed to delivering high-quality services that enhance the safety and hygiene of residential, commercial, and industrial spaces. At Jabreel, we focus on sustainability, utilizing eco-conscious products and practices that ensure long-term benefits for both our clients and the environment. We understand the importance of trust and reliability, which is why we strive to build lasting relationships with our clients through outstanding customer service and dependable solutions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Our Vision Section */}
                <div style={styles.sectionContainer}>
                    <h2 style={styles.heading}>Our Vision</h2>
                    <div style={styles.contentRow}>
                        <img src="/images/5.jpg" alt="Our Vision" style={styles.image} />
                        <div style={styles.textContainer}>
                            <p style={styles.paragraph}>
                                Our vision is to establish Jabreel Fumigation Services as the most trusted and innovative provider of cleaning and pest control solutions in the region. We aim to set the benchmark for excellence by continuously improving our services and adopting the latest advancements in cleaning and pest management technologies. By focusing on innovation, reliability, and customer satisfaction, we aspire to be the first choice for individuals and businesses seeking comprehensive solutions for their cleaning and pest control needs. Our long-term goal is to create a safer, healthier environment for future generations through our unwavering dedication to sustainability and quality.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div style={styles.sectionContainer}>
                    <h2 style={styles.heading}>Why Choose Us?</h2>
                    <div style={styles.contentRowReverse}>
                        <img src="/images/deep.jpeg" alt="Why Choose Us" style={styles.image} />
                        <div style={styles.textContainer}>
                            <ul style={styles.list}>
                                <li>Experienced and Certified Professionals: Our team consists of highly trained experts who bring unmatched expertise to every project.</li>
                                <li>Eco-Friendly and Safe Products: We prioritize the health of our clients and the environment by using non-toxic, biodegradable products.</li>
                                <li>Customized Solutions: We understand that each client’s needs are unique, so we offer personalized services tailored to specific requirements.</li>
                                <li>Affordable and Transparent Pricing: Our competitive pricing model guarantees value without compromising quality.
From meticulous cleaning to effective pest management, we are here to provide solutions you can rely on.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Our Values Section */}
                <div style={styles.sectionContainer}>
                    <h2 style={styles.heading}>Our Values</h2>
                    <div style={styles.contentRow}>
                        <img src="/images/car.jpg" alt="Our Values" style={styles.image} />
                        <div style={styles.textContainer}>
                            <ul style={styles.list}>
                                <li><strong>Integrity:</strong> We uphold the highest standards of honesty, transparency, and accountability in every aspect of our business.</li>
                                <li><strong>Quality:</strong> We are committed to delivering services that consistently exceed expectations.</li>
                                <li><strong>Innovation:</strong> By embracing the latest technologies and methodologies, we ensure our clients benefit from the best practices in the industry.</li>
                                <li><strong>Customer Focus:</strong> Our clients are at the heart of everything we do, and their satisfaction is our ultimate priority.</li>
                            </ul>
                        </div>
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
        textAlign: 'justified',
        color: '#fff',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
    },
    sectionContainer: {
        marginBottom: '40px',
    },
    contentRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    contentRowReverse: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
    },
    textContainer: {
        flex: 1,
        padding: '20px',
    },
    image: {
        flex: 1,
        maxWidth: '400px',
        height: '300px',
        objectFit: 'cover',
        margin: '20px',
    },
    heading: {
        fontSize: '2rem',
        color: '#01377D',
        textAlign: 'center',
        marginBottom: '20px',
    },
    paragraph: {
        fontSize: '1.2rem',
        lineHeight: '1.8',
        color: '#555',
        textAlign: 'justify',
    },
    list: {
        listStyleType: 'disc',
        textAlign: 'left',
        paddingLeft: '40px',
        fontSize: '1.2rem',
        lineHeight: '1.8',
        color: '#555',
    },
};

export default AboutUs;

