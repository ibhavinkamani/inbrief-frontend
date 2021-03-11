import React, {Fragment, useState, useEffect } from 'react';
import { signup, isAuth, preSignup } from '../../actions/auth';
import Router from 'next/router';
import LoginGoogle from './LoginGoogle'
import EmptySpace from '../../components/auth/EmptySpace'


const SignupComponent = () => {

    const [values, setValues] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const { name, username, email, password, error, loading, message, showForm } = values;

    useEffect(() => {
        isAuth() && Router.push(`/`);
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        setValues({ ...values, loading: true, error: false });
        const user = { name, username, email, password };

        preSignup(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                setValues({
                    ...values,
                    name: '',
                    username: '',
                    email: '',
                    password: '',
                    error: '',
                    loading: false,
                    message: data.message,
                    showForm: false
                });
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const showLoading = () => (loading ? <div className="alert alert-info" style={{margin: '1rem'}}>Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger" style={{margin: '1rem'}}>{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info" style={{margin: '1rem'}}>{message}</div> : '');

    const signupForm = () => {
        return (
            <div className="row" style={{backgroundColor: 'darksalmon', fontSize: 'xxx-large', padding: '3rem'}}>
                    <div className ="col-md-8 bulb" style={{padding: '3rem 0 3rem 0', alignSelf: 'center', color: 'antiquewhite'}}>
                        Why find other
                        <strong>"MEDIUM",</strong>
                        <br/>
                        When you can get
                        <br/>
                        <strong>Paid Better.</strong>
                    </div>
                    <div className ="col-md-4" style={{color: 'darksalmon', backgroundColor: 'antiquewhite', padding: '0 3rem 3rem 3rem', borderRadius: '2rem', textAlign: 'center'}}>
                        <h2 className="text-center pt-4 pb-4">Signup</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    value={username}
                                    onChange={handleChange('username')}
                                    type="text"
                                    className="form-control"
                                    placeholder="Type your username"
                                    style={{backgroundColor: 'antiquewhite', borderColor: 'darksalmon'}}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    value={name}
                                    onChange={handleChange('name')}
                                    type="text"
                                    className="form-control"
                                    placeholder="Type your name"
                                    style={{backgroundColor: 'antiquewhite', borderColor: 'darksalmon'}}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    value={email}
                                    onChange={handleChange('email')}
                                    type="email"
                                    className="form-control"
                                    placeholder="Type your email"
                                    style={{backgroundColor: 'antiquewhite', borderColor: 'darksalmon'}}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    value={password}
                                    onChange={handleChange('password')}
                                    type="password"
                                    className="form-control"
                                    placeholder="Type your password"
                                    style={{backgroundColor: 'antiquewhite', borderColor: 'darksalmon'}}
                                />
                            </div>

                            <div>
                                <div style={{textAlign: "center"}}>
                                <button style = {{backgroundColor: 'darksalmon'}} className="btn btn-warning">Signup</button>
                                </div>
                                <hr/>
                                <LoginGoogle/>
                            </div>
                        </form>
                    </div>
                </div>
        );
    };

    return (
        <React.Fragment>
            {showError()}
            {showLoading()}
            {showMessage()}
            {showForm && signupForm()}
            {!showForm && <EmptySpace/>}
        </React.Fragment>
    );
};

export default SignupComponent;