import Head from 'next/head';
import Link from 'next/link';
import React, {Fragment, useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { singleTag } from '../../actions/tag';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import Card from '../../components/blog/Card';
import MinCard from '../../components/blog/minCard';

const Tag = ({ tag, blogs, trendingBlogs, query }) => {
    const head = () => (
        <Head>
            <title>
                {tag.name} | {APP_NAME}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content={`${tag.info}`} />
            <link rel="canonical" href={`${DOMAIN}/tags/${query.slug}`} />

            <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/apple-touch-icon.png"/>
            <link rel="manifest" href="/static/favicons/site.webmanifest"/>

            <meta property="og:title" content={`${tag.name}| ${APP_NAME}`} />
            <meta property="og:description" content={`${tag.info}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/tags/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${API}/tag/image/${tag.slug}`} />
            <meta property="og:image:secure_url" content={`${API}/tag/image/${tag.slug}`} />
            <meta property="og:image:type" content="image/png" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );

    return (
        <React.Fragment>
            {head()}
            <Layout>
            <main>
                    <article>
                        <div className="container">
                        <header>
                                <div className="col-md-12 pt-3">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div style={{maxHeight: 'max-content'}}>
                                            <img
                                                src={`${API}/tag/image/${tag.slug}`}
                                                alt={tag.name}
                                                className="img img-fluid"
                                                style={{paddingBottom: '3rem'}}/>
                                            </div>
                                            {blogs.map((b, i) => (
                                                <div key={i}>
                                                    <Card key={i} blog={b} />
                                                    <hr />
                                                </div>))}
                                        </div>
                                        <div className="col-md-4">
                                            <div className="sticky">
                                                <div style={{fontSize: 'x-large', fontWeight: 'bolder'}}>
                                                    {tag.name}
                                                </div>
                                                <br/>
                                                <div style={{fontSize: 'medium', color: 'gray'}}>
                                                    {tag.info}
                                                </div>
                                                <br/>
                                                <div style={{fontWeight: 'bold'}}>
                                                    POPULAR IN {`${tag.name}`.toUpperCase()}
                                                    <hr/>
                                                </div>
                                                {trendingBlogs.map((b, i) => (
                                                    <div key={i}>
                                                        <MinCard key={i} blog={b} />
                                                    </div>))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>
                         </div>
                    </article>
                </main>
            </Layout>
        </React.Fragment>
    );
};

Tag.getInitialProps = ({ query }) => {
    return singleTag(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { tag: data.tag, blogs: data.blogs, trendingBlogs: data.trendingBlogs, query };
        }
    });
};

export default Tag;