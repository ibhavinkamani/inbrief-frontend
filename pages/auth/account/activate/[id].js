import {useState, useEffect } from 'react'
import jwt from 'jsonwebtoken'
import Layout from '../../../../components/Layout'
import {signup} from '../../../../actions/auth'
import {withRouter } from 'next/router'

const ActivateAccount = ({router}) => {
    const [values, setValues] = useState({
        name: '',
        token: '',
        error: '',
        loading: false,
        success: false,
        showButton: true
    });

    const {name, token, error, loading, success, showButton} = values;

    useEffect(() => {
        let token = router.query.id
        if(token) {
            const {name} = jwt.decode(token)
            setValues({...values, name, token})
        }
    }, [router])

    const clickSubmit = e => {
        e.preventDefault()
        setValues({...values, loading:true, error: false})
        signup({token}).then(data => {
            if(data.error) {
                setValues({...values, error: data.error, loading: false, showButton: false})
            } else {
                setValues({...values, loading:false, success: true, showButton: false});
            }
        });
    };

    const showLoading = () => (loading ? <h2>Loading...</h2> : '');

    return(
        <Layout>
            <div style={{padding: '5rem 5rem 9rem 5rem', backgroundColor: 'darkseagreen'}}>
                <div style={{fontSize: 'xxx-large', paddingBottom: '3rem'}}>
                    Hey {name}, Ready to activate your account?
                </div>
                {showLoading()}
                {error && error}
                {success && 'You have successfully activated your account. Please signin.'}
                {showButton && <button style={{backgroundColor: 'antiquewhite', color: 'black',borderColor: 'black'}} className="btn btn-outline-primary" onClick={clickSubmit}>Activate Account</button>}
            </div>
        </Layout>
    )

};

export default withRouter(ActivateAccount)