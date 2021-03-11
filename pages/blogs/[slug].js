import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';
import React, { Fragment, useState, useEffect } from 'react';
import { singleBlog, listRelated } from '../../actions/blog';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import SmallCard from '../../components/blog/SmallCard';
import DisqusThread from '../../components/DisqusThread';

const SingleBlog = ({ blog, query }) => {
    const [related, setRelated] = useState([]);

    const _id = blog._id;
    const categories = blog.categories;
    const loadRelated = () => {
        console.log(_id);
        const related = {
            _id,
            categories
        };
        listRelated({ related }).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setRelated(data);
            }
        });
    };

    useEffect(() => {
        loadRelated();
    }, []);

    const head = () => (
        <Head>
            <title>
                {blog.title} | {APP_NAME}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content={blog.gist} />
            <link rel="canonical" href={`${DOMAIN}/blogs/${query.slug}`} />

            <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/apple-touch-icon.png" />
            <link rel="manifest" href="/static/favicons/site.webmanifest" />

            <meta property="og:title" content={`${blog.title}| ${APP_NAME}`} />
            <meta property="og:description" content={blog.gist} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:image:secure_url" content={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );



    const showBlogCategories = blog =>
        blog.categories.map((c, i) => {
            return <Link href={`/categories/${encodeURIComponent(c.slug)}`} key={i}>
                <a style={{ color: '#0000009e', backgroundColor: 'lightgrey' }} className="btn btn-outline mr-1 ml-1 mt-3">{c.name}</a>
            </Link>
        });


    const showBlogTags = blog =>
        blog.tags.map((t, i) => {
            return <Link href={`/tags/${encodeURIComponent(t.slug)}`} key={i}>
                <a style={{ color: '#0000009e', backgroundColor: 'lightgrey' }} className="btn btn-outline mr-1 ml-1 mt-3">{t.name}</a>
            </Link>
        });

    const showRelatedBlog = () => {
        return related.map((blog, i) => (
            <div style={{ padding: '1rem' }} key={i}>
                <article key={i}>
                    <SmallCard blog={blog} />
                </article>
            </div>
        ));
    };

    const showComments = () => {
        return (
            <div>
                <DisqusThread id={blog._id} title={blog.title} path={`/blogs/${blog.slug}`} />
            </div>
        )
    }

    return (
        <React.Fragment>
            {head()}
            <Layout>
                <main>
                    <div>
                        <img
                            src={`${API}/blog/photo/${blog.slug}`}
                            alt={blog.title}
                            className="img img-fluid featured-image"
                        />
                    </div>
                    <div className="col-md-12">
                        <div style={{ fontSize: 'large', fontFamily: 'inherit' }} className="switch">
                            <h1 className="pb-3 pt-3" style={{fontWeight: '900'}}>{blog.title}</h1>
                            <div style={{ fontSize: 'larger', color: '#00000059' }}>{blog.gist}</div>
                            <hr />
                            <div style={{ padding: 'inherit' }} className="row">
                                <div>
                                    <Image src={`${API}/user/photo/${blog.postedBy.username}`}
                                        className="avatar"
                                        width="32px"
                                        height="32px"
                                        alt="user profile" />
                                </div>
                                <div style={{ fontSize: 'small', paddingTop: '0.5rem' }}>
                                    <p className="text-muted">
                                        <Link href={`/profile/${encodeURIComponent(blog.postedBy.username)}`}>
                                            <a>{blog.postedBy.name}</a>
                                        </Link>
                                        , Published {moment(blog.updatedAt).fromNow()}
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <section>
                                <div>{renderHTML(blog.body)}</div>
                            </section>
                            <section>
                                <div className="pb-3">
                                    {showBlogCategories(blog)}
                                    {showBlogTags(blog)}
                                </div>
                                <hr />
                            </section>
                        </div>
                    </div>
                    {related.length  !==0 && <div style={{ backgroundColor: '#d3d3d32e' }}>
                        <h2 className="pt-5" style={{ paddingLeft: '1rem' }}>More under this category</h2>
                        <hr />
                        <div>{showRelatedBlog()}</div>
                    </div>}

                    <div className="container pt-5 pb-5">
                        {showComments()}
                    </div>
                </main>
            </Layout>
        </React.Fragment>
    );
};

SingleBlog.getInitialProps = ({ query }) => {
    return singleBlog(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            // console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
            return { blog: data, query };
        }
    });
};

export default SingleBlog;