import Link from 'next/link';
import Image from 'next/image';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';

const Card = ({ blog }) => {

    return (
                <div className="lead" style={{paddingBottom: '16px'}}>
                    <header>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row bulb" style={{ padding: 'inherit'}}>
                                    <div style={{
                                            verticalAlign: 'middle',
                                            borderRadius: '50%'
                                        }}>
                                        <Image src={`${API}/user/photo/${blog.postedBy.username}`}
                                             width= '32px'
                                             height= '32px'
                                            alt= {`${blog.postedBy.name}`}/>
                                    </div>
                                    <div className="row" style={{fontSize: 'medium', color: 'black', paddingLeft: 'inherit'}}>
                                        <Link href={`/profile/${encodeURIComponent(blog.postedBy.username)}`}>
                                            <a style={{color: 'black', fontWeight: '600'}}>{blog.postedBy.name}</a>
                                        </Link>
                                        <p style={{whiteSpace: 'pre'}}> in </p>
                                        <Link href={`/tags/${encodeURIComponent(blog.tags[0].slug)}`}>
                                            <a style={{color: 'black', fontWeight: '600'}}>{blog.tags[0].name}</a>
                                        </Link>
                                    </div>
                                </div>
                                <Link href={`/blogs/${encodeURIComponent(blog.slug)}`}>
                                    <div style={{cursor: 'pointer', fontSize: 'larger', fontWeight: '900', textOverflow: 'ellipsis'}}>{blog.title}</div>
                                </Link>
                                <div className="bulb" style={{fontSize: 'medium', color: 'gray', overflow: 'hidden', textOverflow: 'ellipsis', fontFamily: 'sans-serif'}}>{renderHTML(blog.gist)}</div>    
                                <div style={{fontSize: 'smaller'}}>{moment(blog.updatedAt).fromNow()} ⍟ {(Math.round(Math.random() * 10) % 15) + 3}min read</div>
                            </div>
                            <div className="col-md-4">
                                    <Image
                                        className="img img-fluid"
                                        // style={{ maxHeight: '320px', width: '100%', paddingTop: '0.7rem' }}
                                        layout = "fill"
                                        src={`${API}/blog/photo/${blog.slug}`}
                                        alt={blog.title}
                                    />
                            </div>
                        </div>
                    </header>
                </div>
    );
};

export default Card;