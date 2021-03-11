import Link from 'next/link';
import Image from 'next/image';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';

const MinCard = ({ blog }) => {
    return (
        <div className="lead">
            <header>
                <div className="row">
                    <div className="col-sm-8">
                        <div className="row bulb" style={{ padding: 'inherit' }}>
                            <div style={{
                                verticalAlign: 'middle',
                                width: '25px',
                                height: '25px',
                                borderRadius: '50%'
                            }}>
                                <Image height='24px' width="24px" src={`${API}/user/photo/${blog.postedBy.username}`}
                                    alt={`${blog.postedBy.name}`} />
                            </div>
                            <div className="row" style={{ fontSize: 'small', color: 'black', paddingLeft: 'inherit' }}>
                                <Link href={`/profile/${encodeURIComponent(blog.postedBy.username)}`}>
                                    <a style={{ color: 'black', fontWeight: '600' }}>{blog.postedBy.name}</a>
                                </Link>
                                <p style={{ whiteSpace: 'pre' }}> in </p>
                                <Link href={`/tags/${encodeURIComponent(blog.tags[0].slug)}`}>
                                    <a style={{ color: 'black', fontWeight: '600' }}>{blog.tags[0].name}</a>
                                </Link>
                            </div>
                        </div>
                        <Link href={`/blogs/${encodeURIComponent(blog.slug)}`}>
                            <div style={{ cursor: 'pointer', fontSize: 'initial', fontWeight: '700', textOverflow: 'ellipsis' }}>{blog.title}</div>
                        </Link>
                        <div style={{ fontSize: 'smaller' }}>{moment(blog.updatedAt).fromNow()} ⍟ {(Math.round(Math.random() * 10) % 15) + 3}min read</div>
                    </div>
                    <div className="col-sm-4">
                        <Image
                            className="img img-fluid"
                            style={{ maxHeight: '160px', width: '100%', paddingTop: '0.7rem' }}
                            src={`${API}/blog/photo/${blog.slug}`}
                            alt={blog.title}
                            layout= 'fill'
                            />
                    </div>
                </div>
            </header>
            <hr />
        </div>
    );
};

export default MinCard;