import Layout from '../components/Layout';
import SignupComponent from '../components/auth/SignupComponent';
import { DOMAIN, APP_NAME, FB_APP_ID } from '../config';
import {withRouter} from 'next/router';
import Head from 'next/head';
import React, {Fragment, useState, useEffect } from 'react';

const Signup = ({router}) => {

    const head = () => (
        <Head>
            <title>Signup | {APP_NAME}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta
                name="description"
                content="Signup and get paid for your content. Write Blogs to make money online. Get paid!!"
            />
            <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />

            <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/apple-touch-icon.png"/>
            <link rel="manifest" href="/static/favicons/site.webmanifest"/>

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
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12" style={{backgroundColor: 'darksalmon'}}>
                            <SignupComponent />
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default withRouter(Signup);