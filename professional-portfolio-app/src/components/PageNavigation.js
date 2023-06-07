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
            case 'Portfolio':
                return <Portfolio />
               
            case 'Contact':
                return<ContactForm />
      
            case 'Resume':
               return <Resume />
             
            default:
                return <AboutMe />

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
