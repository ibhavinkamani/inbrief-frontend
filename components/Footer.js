import { DOMAIN } from '../config';
import React, { Component, Fragment } from 'react'


const Footer = () => {
    return (
        <React.Fragment>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-8">
                            <h6>About</h6>
                            <p className="text-justify">www.inbrief.dev <strong> IS A MULTI-USER BLOGGING PLATFORM </strong>
                                        an initiative to help the upcoming programmers with the coding blogs on all latest technologies.
                                        If you have a idea we publish that and you make revenue on the basis of your
                                        content engagement & content reach.
                                    </p>
                        </div>

                        <div className="col-xs-6 col-md-4">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href={`${DOMAIN}/our-story`}>About Us</a></li>
                                <li><a href={`${DOMAIN}/contact-us`}>Contact Us</a></li>
                                <li><a href={`${DOMAIN}/signin`}>Contribute</a></li>
                                <li><a href={`${DOMAIN}/sitemap.xml`}>Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Made with ❤️ in India.</p>
                            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by
                            <a href="www.inbrief.dev"> InBrief</a>.
                                </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="linkedin" href="https://www.linkedin.com/company/inbrief-blogging"><i className="fa fa-linkedin"></i></a></li>
                                <li><a className="medium" href="https://www.medium.com/inbrief"><i className="fa fa-medium"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer;