import {useState } from 'react'
import Layout from '../../../../components/Layout'
import {forgotPassword, resetPassword} from '../../../../actions/auth'
import {withRouter } from 'next/router'

const ResetPassword = ({router}) => {
    const [values, setValues] = useState({
        name: '',
        newPassword: '',
        error: '',
        message: '',
        showForm: true
    })

    const {showForm, name, newPassword, error, message} = values;

    const handleSubmit = e => {
        e.preventDefault()
        resetPassword({
            newPassword, 
            resetPasswordLink: router.query.id
        }).then(data=> {
            if(data.error) {
                setValues({...values, error: data.error, showForm:true, newPassword: ''})
            } else {
                setValues({...values, message: data.message, showForm: false, newPassword: '', error: false})
            }
        })
    }

    const EmptyArea = () => (
        <div style={{backgroundColor: 'bisque', height: '20rem'}}>

        </div>
    );

    const passwordResetForm = () => (
        <div>
            <div style={{fontSize: 'xxx-large'}}>Reset Password</div>
            <hr/>
            <form onSubmit = {handleSubmit}>
                <div className="form-group">
                    <input type="password" onChange={e => setValues({...values, newPassword: e.target.value})} 
                    className="form-control" 
                    value={newPassword} 
                    placeholder="Type your new Password" 
                    required/>
                </div>
                <div>
                    <button className="btn btn-primary" style={{backgroundColor: 'black', borderColor: 'black'}}>Reset</button>
                </div>
            </form>
        </div>
    );

    const showError = () => (error ? <div className="alert alert-danger">{error}</div>: '');
    const showMessage = () => (message ? <div className="alert alert-success">{message}</div>: '');

    return (
        <Layout>
            <div style={{backgroundColor: 'bisque', padding: '3rem 3rem 9rem 3rem'}}>
                {showError()}
                {showMessage()}
                {showForm && passwordResetForm()}
                {!showForm && EmptyArea()}
            </div>
        </Layout>
    );
};

export default withRouter(ResetPassword);