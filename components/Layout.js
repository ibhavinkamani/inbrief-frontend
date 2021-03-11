import Header from './Header';
import Footer from './Footer';
import React, { Fragment } from 'react'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    );
};

export default Layout;