import React from 'react';
import Navbar from '../components/Navbar';
import FAQ from '../pages/FAQs';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
           
            {/* Navbar */}
            <Navbar />
            

            {/* Banner Section */}
           <div style={ styles.banner}>
            <img 
        src="images/L.jpg" 
        alt="Jabreel Cleaners and Pest Control" 
        style={styles.bannerImage} 
    />
    <h1 style={styles.bannerHeading}>Jabreel Cleaners and Pest Control</h1>
    
    <div>
    <p style={styles.bannerP}>
                    Your Trusted Partner for Comprehensive Cleaning and Pest Management Solutions
                </p>
    </div>    
        
</div>


            {/* Main Content */}
            <div style={styles.container}>
                

                <h2 style={styles.subheading}>Welcome to Jabreel – Empowering Innovation and Excellence</h2>

                <p style={styles.description}>
                     At Jabreel, we’re passionate about driving growth and transforming ideas into impactful solutions. As a forward-thinking company, we blend cutting-edge technology with unmatched expertise to deliver tailored solutions that align with your unique goals.

Our focus goes beyond meeting expectations—we aim to exceed them by fostering collaboration, innovation, and excellence at every step of your journey. Whether you’re looking to streamline your operations, enhance your online presence, or develop sustainable strategies, we are your trusted partner in achieving success.

Let us guide you toward a future of endless possibilities. Together, we’ll build solutions that inspire confidence, drive results, and set you apart from the competition.


                </p>
            </div>

             {/* About Us Section */}
            <div id="about" style={styles.section}>
                <h2 style={styles.subheading}>OUR  APPROACH</h2>
                <div style={styles.contentRow}>
                    {/* <img src="/images/matu.jpg" alt="our approach" style={styles.image} /> */}
                    <div style={styles.textContainer}>
                <p style={styles.description}>
                    At Jabreel, our approach is rooted in a deep commitment to understanding and addressing the unique needs of every client. We prioritize collaboration, transparency, and adaptability, ensuring our strategies and solutions align perfectly with your goals. By combining cutting-edge technology with a meticulous attention to detail, we craft personalized, scalable solutions that empower businesses to thrive in an ever-evolving digital landscape. Our process begins with a thorough consultation to analyze your objectives, challenges, and opportunities. We then employ a structured yet flexible methodology that emphasizes agile development, continuous improvement, and timely delivery. Leveraging the latest advancements in technology and industry best practices, we remain proactive in identifying potential risks and opportunities, ensuring the highest levels of efficiency, security, and reliability. Ultimately, our goal is to build lasting partnerships founded on trust, mutual success, and a shared commitment to excellence. At Jabreel, we don’t just deliver services—we deliver value, helping our clients achieve sustainable growth and maintain a competitive edge in their industries.
                </p>
            </div></div></div>

            {/* Let's Help You Section */}
<div id="help" style={styles.parallaxSection}>
    <h2 style={styles.parallaxHeading}>Let's Help You</h2>
    <p style={styles.parallaxDescription}>
        Reach out to us today for a cleaner, safer environment. We are here to serve you!
    </p>
    <a href="/contact" style={styles.contactButton}>Contact Us</a>
</div>

            {/*FAQs*/}
            <FAQ />
            {/* Footer */}
            <Footer />
        </div>
    );
};

const styles = {
     banner: {
        height: '400px', // Adjust height as needed
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        position: 'relative',
          paddingTop: '200px', // Adjust this based on your navbar height
    },
    bannerImage: {
        width: '100%', // Make the image responsive
        height: '100%', // Make the image fill the div
        objectFit: 'cover', // Cover the area without distortion
        position: 'absolute', // Position it absolutely
        top: 0,
        left: 0,
        zIndex: -1, // Send the image behind the text
    },
    bannerHeading: {
        fontSize: '3rem',
        color: '#7ED348', // Light green theme color
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Ensure text stands out
        margin: '0',
    },
    bannerP: {
        fontSize: '1.2rem',
        color: '#FFF',
        marginTop: '20px',
        marginBottom: '30px',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
    },
    textContainer: {
        flex: 1,
        padding: '20px',
    },
    contentRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    image: {
        flex: 1,
        maxWidth: '500px',
        height: '450px',
        objectFit: 'cover',
        margin: '20px',
    },
    description: {
        fontSize: '1.2rem',
        lineHeight: '1.8',
        color: '#555',
        textAlign: 'justify',
    },
    subheading: {
        fontSize: '2rem',
        color: '#01377D',
        marginBottom: '20px',
    },
    servicesList: {
        listStyleType: 'none',
        padding: '0',
        fontSize: '1.1rem',
        lineHeight: '1.8',
        color: '#555',
    },
    section: {
        padding: '40px 20px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9', // Light background for contrast
        marginBottom: '20px',
    },
    parallaxSection: {
    position: 'relative',
    height: '300px', // Adjust height as needed
    backgroundImage: 'url("images/help1.jpg")', // Replace with your image path
    backgroundAttachment: 'fixed', // Creates the parallax effect
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff', // White text for contrast
    textAlign: 'center',
    padding: '20px',
    overflow: 'hidden', // Ensures pseudo-element stays contained
},
parallaxSectionBefore: {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity for tint strength
    zIndex: 1, // Ensures overlay is above the background image
},
parallaxHeading: {
    fontSize: '2.5rem',
    marginBottom: '10px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Makes text stand out
},
parallaxDescription: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    maxWidth: '800px',
},
contactButton: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#7ED348', // Match theme color
    textDecoration: 'none',
    borderRadius: '5px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
},
contactButtonHover: {
    backgroundColor: '#6BC437', // Darker shade on hover
},
    
};

export default Home;

