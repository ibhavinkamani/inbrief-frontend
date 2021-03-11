import Layout from '../components/Layout';
import Head from 'next/head';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../config';
import { withRouter } from 'next/router';
import React, { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import Explore from '../components/index/Explore';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel";

const Index = ({ router }) => {

    const head = () => (
        <Head>
            <title>Our Story | {APP_NAME}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta
                name="description"
                content={`${APP_NAME} is just not a regular blogging platform. Its much more than that. It can help gain you insights about different niches, it can help you make money of your knowledge online by writting on differnet niches.`}
            />
            <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />

            <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/apple-touch-icon.png" />
            <link rel="manifest" href="/static/favicons/site.webmanifest" />

            <meta property="og:title" content={`Latest blogs on all new technologies | ${APP_NAME}`} />
            <meta
                property="og:description"
                content="Blogs on Artificial-Intelligence Machine-Learning Deep-Learning Computer-vision Technical-Interview competetive programming React Flutter"
            />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/inbrief.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/inbrief.jpg`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );

    return (
        <React.Fragment>
            {head()}
            <Layout>
                <Carousel autoPlay infiniteLoop>
                    <div>
                        <img src="/images/s1.jpg"/>
                        <p className="legend">No Membership, as don't want you to stop exploring!</p>
                    </div>
                    <div>
                        <img src="/images/s2.jpg"/>
                        <p className="legend">Just explore!</p>
                    </div>
                </Carousel>
                <div style={{ maxHeight: 'max-content', backgroundColor: 'lightsalmon', padding: '3rem 3rem 0 3rem' }}>
                    <div className="row">
                        <div className="col-md-8">
                            <div style={{ fontSize: '5rem' }}>
                                Explore
                                <strong> InBrief. </strong>
                            </div>
                            <div style={{ fontSize: '5rem' }}>
                                to what matters to you.
                            </div>
                            <div style={{ padding: '2rem 0 4rem' }}>
                                <Link href="/">
                                    <a className="btn btn-outline-secondary">Get Started</a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 bulb">
                            <Explore />
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: 'indianred', maxHeight: 'max-content', padding: '3rem 3rem 0 3rem' }}>
                    <div className="row">
                        <div className="col-md-6">
                            <div style={{ fontSize: '5rem', fontWeight: 'bold' }}>
                                Read.
                                <br />
                                Share.
                                <br />
                                Repeat.
                            </div>
                            <div style={{ padding: '2rem 0 4rem' }}>
                                <Link href="/signin">
                                    <a className="btn btn-outline-secondary">Write Blogs</a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 bulb" style={{ fontSize: '4rem', fontWeight: '100' }}>
                            I could either watch it
                            <br />
                            happen or be a part
                            <br />
                            of it. -Elon Musk
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: 'black', maxHeight: 'max-content', padding: '3rem', color: 'antiquewhite' }}>
                    <div className="row">
                        <div className="col-md-6">
                            <div style={{ fontSize: '3rem', fontWeight: '100', paddingLeft: 'inherit' }}>
                                Read as much as
                                <br />
                                you want.
                                <br />
                                We don't want you
                                <br />
                                to stop exploring.
                            </div>
                        </div>
                        <div className="col-md-6 bulb" style={{ fontSize: '4rem', borderLeft: 'dashed' }}>
                            No Membership.
                            <br />
                            <strong>Unlimited Reading.</strong>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: 'darkseagreen', maxHeight: 'max-content', padding: '3rem', color: 'antiquewhite' }}>
                    <div className="row">
                        <div className="col-md-6">
                            <div style={{ fontSize: '3rem', fontWeight: '100', borderLeft: 'dashed', paddingLeft: 'inherit' }}>
                                If you don't write for
                                <br />
                                publication there is
                                <br />
                                little point in writing
                                <br />
                                at all.
                            </div>
                            <div style={{ padding: '4rem 0 1rem' }}>
                                <a className="btn btn-outline-secondary" href="#">Apply for Publication</a>
                            </div>
                        </div>
                        <div className="col-md-6 bulb" style={{ fontSize: '3rem' }}>
                            Apply for an
                            <br />
                            <strong>Publication </strong>
                            <br />
                            if you are a community.
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>

    );
};

export default withRouter(Index);