import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { userPublicProfile } from '../../actions/user';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import moment from 'moment';
import React, {Fragment, useState, useEffect } from 'react';

const UserProfile = ({user, blogs, query}) => {

    const head = () => (
        <Head>
            <title>
                {user.username} | {APP_NAME}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content={`Blogs by ${user.username}`} />
            <link rel="canonical" href={`${DOMAIN}/profile/${query.username}`} />

            <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/apple-touch-icon.png"/>
            <link rel="manifest" href="/static/favicons/site.webmanifest"/>

            <meta property="og:title" content={`${user.username}| ${APP_NAME}`} />
            <meta property="og:description" content={`Blogs by ${user.username}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/profile/${query.username}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/inbrief.png`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/inbrief.png`} />
            <meta property="og:image:type" content="image/png" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );


    const showUserBlogs = () => {
        return blogs.map((blog, i) => {
            return (
                <div className="card mt-1 mb-1" key={i}>
                    <div className="card-body">
                        <Link href={`/blogs/${encodeURIComponent(blog.slug)}`}>
                            <a className="lead">{blog.title}</a>
                        </Link>
                    </div>
                </div>
            )
        })
    }

    return (
        <React.Fragment>
            {head()}
            <Layout>
                <div style={{backgroundColor: 'bisque', padding: '3rem'}}>
                        <div className="row">
                            <div style={{paddingRight: '2rem', backgroundColor: 'bisque'}}>
                                <img src={`${API}/user/photo/${user.username}`}
                                    className="img img-fluid img-thumbnail mb-3"
                                    style={{maxHeight: '256px', maxWidth: '256px'}}
                                    alt="user profile"/>
                            </div>
                            <div>
                                <div style={{fontSize: 'xx-large'}}>{user.name}</div>
                                    <p className="text-muted" style={{fontSize: 'large'}}>
                                    Joined {moment(user.createdAt).fromNow()}
                                    <br/>
                                    {user.email}
                                    <br/>
                                    {user.about}
                                    </p>
                                </div>
                            </div>
                        </div>
                <br/>
                <div style={{padding: '3rem'}}>
                    <div style={{fontSize: 'xxx-large'}}>Recent Blogs {`${user.name}`}</div>
                    <hr/>
                    {showUserBlogs()}
                </div>
            </Layout>
        </React.Fragment>
    )
}

UserProfile.getInitialProps = ({query}) => {
    return userPublicProfile(query.username).then(data => {
        if(data.error) {
            console.log(data.error)
        } else {
            return {user:data.user, blogs: data.blogs, query}
        }
    });
};

export default UserProfile;