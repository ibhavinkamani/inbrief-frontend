import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Link from 'next/link';
import AdminBoard from '../../components/index/AdminDashboard'

const AdminIndex = () => {
    return (
        <Layout>
            <Admin>
                <div style={{backgroundColor: 'lightcoral', padding: '3rem 3rem 7rem 3rem'}}>
                    <div className="row">
                        <div className="col-md-4">
                            <div style={{fontSize: 'xxx-large', padding: '3rem 0 3rem 0'}}>Admin Dashboard</div>
                            <ul className="list-group">
                                <li style={{backgroundColor: 'bisque'}} className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a style={{color: 'black'}}>Create Category</a>
                                    </Link>
                                </li>

                                <li style={{backgroundColor: 'bisque'}} className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a style={{color: 'black'}}>Create Tag</a>
                                    </Link>
                                </li>

                                <li style={{backgroundColor: 'bisque'}} className="list-group-item">
                                    <a style={{color: 'black'}} href="/admin/crud/blog">Create Blog</a>
                                </li>

                                <li style={{backgroundColor: 'bisque'}} className="list-group-item">
                                    <Link href="/admin/crud/blogs">
                                        <a style={{color: 'black'}} >Update/Delete Blog</a>
                                    </Link>
                                </li>

                                <li style={{backgroundColor: 'bisque'}} className="list-group-item">
                                    <Link href="/user/update">
                                        <a style={{color: 'black'}} >Update Profile</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8 bulb" style={{textAlign: 'center',padding: '5rem'}}>
                            <AdminBoard />
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default AdminIndex;