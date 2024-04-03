import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PropsInfo {
    children: React.ReactNode;
}

const Template = ({children}: PropsInfo) => {
    return(
        <>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </>
    )
}

export default Template;