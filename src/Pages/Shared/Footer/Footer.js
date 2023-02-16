import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer className="footer footer-center p-4 bg-accent rounded-md text-base-content mb-24 mt-32 h-20 max-w-[1440px] mx-auto">
            <div>
                <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;