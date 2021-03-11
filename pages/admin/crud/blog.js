import Layout from '../../../components/Layout';
import Admin from '../../../components/auth/Admin';
import BlogCreate from '../../../components/crud/BlogCreate';
import Head from 'next/head';
import { DOMAIN, APP_NAME, FB_APP_ID } from '../../../config';
import { withRouter } from 'next/router';
import React, { Fragment } from 'react';

const Blog = ({router}) => {

    const head = () => (
        <Head>
            <title>Create Blog | {APP_NAME}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta
                name="description"
                content="Blogs on Artificial-Intelligence Machine-Learning Deep-Learning Computer-vision Technical-Interview competetive programming React Flutter"
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
            <Admin>
                <div className="container-fluid" style={{backgroundColor: 'antiquewhite'}}>
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <div style={{fontSize: '3rem'}}>Create a new blog</div>
                        </div>
                        <div className="col-md-12">
                            <BlogCreate />
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
        </React.Fragment>
    );
};

export default withRouter(Blog);