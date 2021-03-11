import Layout from '../components/Layout';
import { withRouter } from 'next/router'
import SigninComponent from '../components/auth/SigninComponent';
import Head from 'next/head';
import React, {Fragment, useState, useEffect } from 'react';
import { DOMAIN, APP_NAME, FB_APP_ID } from '../config';
import Blogging from '../components/index/Blogging'

const Signin = ({ router }) => {

    const head = () => (
        <Head>
            <title>Signin | {APP_NAME}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta
                name="description"
                content="Signup and get paid for your content. Write Blogs to make money online. Get paid!!"
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

    const showRedirectMessage = () => {
        if (router.query.message) {
            return <div className="alert alert-danger">{router.query.message}</div>
        } else {
            return;
        }
    }

    return (
        <React.Fragment>
            {head()}
            <Layout>
                <div className="col-md-12">
                    <div className="row" style={{ backgroundColor: 'lightcoral' }}>
                        <div className="col-md-6 bulb" style={{ padding: '3rem 0 0 5rem' }}>
                            <Blogging />
                            {showRedirectMessage()}
                        </div>
                        <div className="col-md-6" style={{ padding: '3rem' }}>
                            <SigninComponent />
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default withRouter(Signin);