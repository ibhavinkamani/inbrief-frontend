import Layout from '../../components/Layout';
import Private from '../../components/auth/Private';
import Link from 'next/link';
import Write from '../../components/index/WriteUserDashboard'

const UserIndex = () => {
    return (
        <Layout>
            <Private>
            <div style={{backgroundColor: 'darksalmon'}}>
                    <div className="row" style={{padding: '3rem 3rem 5rem 3rem'}}>
                        <div className="col-md-4">
                        <div style={{fontSize: 'xxx-large', padding: '1rem 0 1rem 0'}}>Welcome back,</div>
                            <ul className="list-group">
                                <li className="list-group-item" style={{backgroundColor: 'bisque'}}>
                                    <a style={{color: 'black'}} href="/user/crud/blog">Create Blog</a>
                                </li>
                                <li className="list-group-item" style={{backgroundColor: 'bisque'}}>
                                    <Link href="/user/crud/blogs">
                                        <a style={{color: 'black'}}>Update/Delete Blog</a>
                                    </Link>
                                </li>
                                <li className="list-group-item" style={{backgroundColor: 'bisque'}}>
                                    <a style={{color: 'black'}} href="/user/update">Update Profile</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8 bulb" style={{textAlign: 'center'}}>
                            <Write/>
                        </div>
                    </div>
                </div>
            </Private>
        </Layout>
    );
};

export default UserIndex;