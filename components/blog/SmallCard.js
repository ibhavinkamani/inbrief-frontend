import Link from 'next/link';
import Image from 'next/image';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';
import React, { Fragment, Component } from 'react';

const SmallCard = ({ blog }) => {
    return (
        <div className="row switch-small-card">
            <div className="col-md-4">
                <Image
                    className="img img-fluid"
                    layout='fill'
                    style={{ height: '160px', width: '100%', cursor: 'pointer' }}
                    src={`${API}/blog/photo/${blog.slug}`}
                    alt={blog.title}
                />
            </div>

            <div className="col-md-8">
                <div style={{ padding: 'inherit', marginTop: '0.3rem' }} className="row">
                    <div>
                        <Image src={`${API}/user/photo/${blog.postedBy.username}`}
                            className="avatar"
                            height='32px'
                            width='32px'
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
                <section>
                    <Link href={`/blogs/${encodeURIComponent(blog.slug)}`}>
                        <div style={{ color: 'black', fontWeight: '700', fontSize: 'x-large', cursor: 'pointer' }}>
                            {blog.title}
                        </div>
                    </Link>
                    <p style={{ fontWeight: '500', color: '#00000099', fontSize: 'initial' }}>{renderHTML(blog.gist)}</p>
                </section>
            </div>
        </div>
    );
};

export default SmallCard;