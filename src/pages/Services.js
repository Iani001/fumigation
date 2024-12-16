import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
    return (
        <div>
            <Navbar /> 

            {/* Banner Section */}
            <div style={{ ...styles.banner, backgroundImage: 'url("/images/team.jpg")' }}>
                <h1 style={styles.bannerHeading}>Jabreel Cleaners and Pest Control</h1>
                <p style={styles.bannerSubheading}>
                    Trusted Partner for Comprehensive Cleaning
                </p>
            </div>

            {/* Main Content */}
            <div style={styles.container}>
                <h2 style={styles.bannerHeading}>OUR SERVICES</h2>

                {/* Pest Control Section */}
                <h2 style={styles.subheading}>Fumigation Services</h2>
                <div style={styles.serviceSection}>
                    
                    <img src="/images/f.jpg" alt="Fumigation Services" style={styles.serviceImage} />
                    
                    <p style={styles.description}>At Jabreel, we pride ourselves on offering comprehensive fumigation solutions tailored to meet your specific needs. Whether it's your home, office, or industrial space, our expert team uses advanced techniques and eco-friendly fumigants to eradicate pests such as termites, cockroaches, bedbugs, and rodents. Our services prioritize the safety of your family, pets, and environment while ensuring the complete elimination of infestations. We conduct a thorough inspection of your property to identify problem areas, develop a targeted treatment plan, and provide ongoing support to prevent future pest issues. With Jabreel, you can enjoy peace of mind knowing your property is protected by industry-leading fumigation practices.</p>
                </div>

                <h2 style={styles.subheading}>Landscaping & Maintenance</h2>
                <div style={styles.serviceSection}>
                    <img src="/images/L.jpg" alt="Landscaping & Maintenance" style={styles.serviceImage} />
                    
                    <p style={styles.description}>Transform your outdoor spaces into a breathtaking oasis with Jabreel's professional landscaping and maintenance services. Our team of skilled horticulturists and landscapers works closely with you to design and maintain gardens that reflect your personal style and enhance the overall aesthetics of your property. From planting vibrant flowers and shrubs to installing hardscaping features such as pathways, patios, and fountains, we bring your vision to life. We also offer regular maintenance services, including mowing, pruning, fertilization, and pest control, ensuring that your outdoor space remains lush, healthy, and inviting throughout the year. Let Jabreel redefine your outdoor experience with exceptional landscaping solutions.</p>
                </div>

                {/* Cleaning Services Section */}
                <h2 style={styles.subheading}>General House Cleaning</h2>
                <div style={styles.serviceSection}>
                    <img src="/images/people.jpg" alt="General House Cleaning" style={styles.serviceImage} />
                    
                    <p style={styles.description}>Jabreel’s general house cleaning service goes beyond surface cleaning to deliver a spotless, hygienic, and refreshing environment for your home. Our trained cleaning professionals use state-of-the-art equipment and eco-friendly cleaning products to tackle every nook and cranny, ensuring no corner is left untouched. From dusting and vacuuming to mopping and sanitizing, we tailor our cleaning solutions to meet your specific needs. Whether you need routine maintenance or a one-time deep clean, Jabreel ensures a pristine living space for you and your loved ones. Trust us to handle the details so you can focus on what matters most—creating memories in a clean and welcoming home.</p>
                </div>

                <h2 style={styles.subheading}>Sofa & Mattress Cleaning</h2>
                <div style={styles.serviceSection}>
                    <img src="/images/mattress.jpg" alt="Sofa & Mattress Cleaning" style={styles.serviceImage} />
                    
                    <p style={styles.description}>Over time, sofas and mattresses can accumulate dust, allergens, stains, and odors that compromise your health and comfort. Jabreel’s specialized sofa and mattress cleaning services are designed to restore your furniture to its original freshness. Using advanced steam cleaning and vacuum extraction techniques, we effectively remove embedded dirt, bacteria, and mites. Our eco-friendly cleaning solutions are safe for fabrics, ensuring no damage while rejuvenating the appearance of your furniture. Whether it's a stain removal job or a full deep-cleaning session, Jabreel guarantees results that leave your sofas and mattresses clean, sanitized, and allergen-free, promoting a healthier home environment.</p>
                </div>

                <h2 style={styles.subheading}>Wall to Wall Deep Cleaning</h2>
                <div style={styles.serviceSection}>
                    <img src="/images/d.jpeg" alt="Wall2wall Deep Cleaning" style={styles.serviceImage} />
                    
                    <p style={styles.description}>A clean and organized office is vital for productivity, employee well-being, and creating a professional impression. Jabreel’s office deep cleaning services offer meticulous cleaning solutions tailored to corporate environments. Our trained team uses industrial-grade equipment and techniques to thoroughly clean workstations, meeting rooms, lobbies, and break areas. We sanitize high-touch surfaces, vacuum carpets, polish floors, and ensure windows and fixtures sparkle. Beyond the visible, we also focus on air quality improvement by addressing vents and air ducts. Whether you require periodic cleaning or a one-time overhaul, Jabreel ensures your workspace promotes focus, creativity, and professionalism.</p>
                </div>

                <h2 style={styles.subheading}>Office Deep Cleaning</h2>
                <div style={styles.serviceSection}>
                    <img src="/images/deep.jpeg" alt="Office Deep Cleaning" style={styles.serviceImage} />
                    
                    <p style={styles.description}>A clean and organized office is vital for productivity, employee well-being, and creating a professional impression. Jabreel’s office deep cleaning services offer meticulous cleaning solutions tailored to corporate environments. Our trained team uses industrial-grade equipment and techniques to thoroughly clean workstations, meeting rooms, lobbies, and break areas. We sanitize high-touch surfaces, vacuum carpets, polish floors, and ensure windows and fixtures sparkle. Beyond the visible, we also focus on air quality improvement by addressing vents and air ducts. Whether you require periodic cleaning or a one-time overhaul, Jabreel ensures your workspace promotes focus, creativity, and professionalism.</p>
                </div>


                <h2 style={styles.subheading}>Car Interior Cleaning</h2>
                <div style={styles.serviceSection}>
                    <img src="/images/car.jpg" alt="Car Interior Cleaning" style={styles.serviceImage} />
                    
                    <p style={styles.description}>Jabreel’s car interior cleaning service is your solution for maintaining a fresh, hygienic, and visually appealing vehicle interior. Our team meticulously cleans and restores every surface, including seats, carpets, dashboards, and windows. We use specialized tools and eco-friendly cleaning agents to remove stains, odors, and accumulated dirt, paying extra attention to hard-to-reach areas. Whether your car has leather, fabric, or synthetic interiors, we customize our cleaning process to preserve the material's integrity. With Jabreel, your car’s interior will look, feel, and smell brand new, enhancing your driving experience and ensuring a healthier environment for passengers.</p>
                </div>

                {/* Specialized Services Section */}
                <h2 style={styles.subheading}>Movers Services</h2>
                <div style={styles.serviceSection}>
                    <img src="/images/M.jpg" alt="Movers Services" style={styles.serviceImage} />
                    
                    <p style={styles.description}>Relocating can be a stressful experience, but Jabreel’s Movers Services are here to make your move seamless, efficient, and worry-free. From initial planning to final delivery, our team manages every detail with precision and care. We provide professional packing services using high-quality materials to protect your belongings during transit. Our experienced movers handle furniture, appliances, and fragile items with utmost care, ensuring they reach their destination in perfect condition. We also offer unpacking and setup services to help you settle into your new space effortlessly. Whether you're moving locally or long-distance, Jabreel guarantees a smooth and hassle-free relocation process.</p>
                </div>

                <h2 style={styles.subheading}>Sofa Set Repair</h2>
                <div style={styles.serviceSection}>
                    <img src="/images/so.jpg" alt="Sofa Set Repair" style={styles.serviceImage} />
                    
                    <p style={styles.description}>Your sofa is a centerpiece of comfort and style, and Jabreel’s sofa repair services are designed to give it a second life. Our skilled craftsmen specialize in repairing and restoring all types of sofas, from modern designs to antique pieces. We address structural issues such as broken frames, sagging cushions, and loose joints, ensuring your furniture regains its durability and comfort. Our upholstery experts also replace worn-out fabric or leather, offering a wide range of premium materials to match your aesthetic preferences. With Jabreel, your sofa will not only be functional but also exude elegance and charm.

</p>
                </div>

                <h2 style={styles.subheading}>Machine Repair</h2>
                <div style={styles.serviceSection}>
                    <img src="/images/m.jpg" alt="Machine Repair" style={styles.serviceImage} />
                    
                    <p style={styles.description}>At Jabreel, we understand the importance of keeping your cleaning equipment in peak working condition. Our expert technicians specialize in the repair and maintenance of a wide range of cleaning machines, including vacuum cleaners, pressure washers, floor scrubbers, and more. We use genuine parts and the latest repair techniques to ensure durability and optimal performance. Whether it's a minor issue or a complete overhaul, our team will diagnose and fix the problem efficiently, minimizing downtime and extending the lifespan of your equipment. Trust Jabreel’s Machine Repair service to keep your cleaning tools operating smoothly and reliably, so you can focus on achieving outstanding cleaning results.</p>
                </div>

                <h2 style={styles.subheading}>Pressure Washing Services</h2>
                <div style={styles.serviceSection}>
                    <img src="/images/p.jpeg" alt="Pressure Washing Services" style={styles.serviceImage} />
                    
                    <p style={styles.description}>Over time, outdoor surfaces can accumulate dirt, mold, and stubborn stains that diminish your property’s curb appeal. Jabreel’s pressure washing services are the perfect solution for revitalizing these areas. Using high-pressure water jets, we effectively clean driveways, patios, decks, walls, and fences, removing grime, algae, and other unsightly residues. Our eco-friendly approach ensures no damage to your surfaces while restoring their original shine. Whether it’s a routine cleaning or a pre-sale property enhancement, Jabreel’s pressure washing services deliver results that leave your outdoor spaces looking immaculate.</p>
                </div>

                <h2 style={styles.subheading}>Scrubbing Brush Refilling</h2>
                <div style={styles.serviceSection}>
                    <img src="/images/3.jpg" alt="Scrubbing Brush Refilling" style={styles.serviceImage} />
                    
                    <p style={styles.description}>Extend the life of your cleaning tools with Jabreel’s scrubbing brush refilling service. We offer high-quality replacement bristles that restore the performance of your brushes, ensuring effective and efficient cleaning. Our service caters to a wide range of brush types, from household cleaning tools to industrial-grade scrubbing equipment. By choosing our refilling service, you save money and contribute to sustainability by reducing waste. Trust Jabreel to provide durable and reliable refills that keep your cleaning tasks on track and hassle-free.

</p>
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
        color: '#0000F',
        textAlign: 'center',
        position: 'relative',
    },
    bannerHeading: {
        fontSize: '3rem',
        color: '#7ED348',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        margin: '0',
    },
    bannerSubheading: {
        fontSize: '1.5rem',
        marginTop: '10px',
        textAlign: 'justify',
        color: '#fff',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
    },
    serviceSection: {
        marginBottom: '40px',
    },
    serviceImage: {
        maxWidth: '100%', // Ensures the image scales with the container
        width: '750px', // Adjust the width as needed
        height: '450px', // Maintains the aspect ratio
        objectFit: 'cover', // Ensures good cropping if needed
        borderRadius: '10px', // Optional: if you want to keep the border radius
    },
    // serviceImage: {
    //     width: '100%',
    //     maxWidth: '500px',
    //     borderRadius: '10px',
    //     marginBottom: '20px',
    // },
    subheading: {
        fontSize: '2rem',
        color: '#01377D',
        marginBottom: '10px',
    },
    description: {
        fontSize: '1.2rem',
        color: '#555',
        lineHeight: '1.8',
        textAlign: 'justify',
    },

};

export default Services;
