import React, { useState } from "react";
import Portfolio from "./Portfolio";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

export default function PageNavigation() {
    const [currentPage, setCurrentPage] = useState('About');

    const showPage = () => {
        switch (currentPage) {
            // case 'About':
            //     <AboutMe />
            //     break;
            case 'Portfolio':
                <Portfolio />
                break;
            case 'Contact':
                <ContactForm />
                break;
            case 'Resume':
                <Resume />
                break;
            default:
                <AboutMe />
                break;
        }
    }

    const handlePages = (page) => {
        setCurrentPage(page);
    }

    return (
        <div>
            <Header currentPage={currentPage} handlePages={handlePages} />
            {showPage()}
            <Footer />
        </div>
    )
}
