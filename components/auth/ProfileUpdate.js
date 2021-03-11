import Link from 'next/link'
import React, {Fragment, useState, useEffect} from 'react'
import Router from 'next/router'
import {getCookie, isAuth, updateUser} from '../../actions/auth'
import {getProfile, update } from '../../actions/user'
import {API} from '../../config'

const ProfileUpdate = () => {
    const [values, setValues] = useState({
        username: '',
        name: '',
        email: '',
        about: '',
        password: '',
        error: false,
        success: false,
        loading: false,
        photo: '',
        userData: ''
    })

    const token = getCookie('token')
    const {username, name, email, about, password, error, success, loading, photo, userData} = values

    const init = () => {
        getProfile(token).then(data => {
            if(data.error) {
                setValues({...values, error:data.error})
            } else {
                setValues({...values, 
                    username: data.username, 
                    name:data.name, 
                    email:data.email, 
                    about:data.about
                });
            }
        })
    }

    useEffect(() => {
        init();
    }, []);

    const handleChange = name => e => {
        // review
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        let userFormData = new FormData()
        userFormData.set(name, value);
        setValues({ ...values, [name]: value, userData: userFormData, error: false, success: false });
    }

    const handleSubmit = e => {
        e.preventDefault()
        setValues({...values, loading: true})
        update(token, userData).then(data => {
            if(data.error) {
                setValues({...values, error: data.error, success:false, loading: false});
            } else {
                updateUser(data, ()=> {
                    setValues({...values, 
                        username: data.username, 
                        name:data.name, 
                        email:data.email, 
                        about:data.about,
                        success: true,
                        loading:false
                    });
                })
            }
        })
    }

    const profileUpdateForm = () => (
        <div className="col-md-6">
            <form style={{padding: '3rem 0 3rem 0'}} onSubmit={handleSubmit}> 
            <div className="form-group">
                <label className="btn btn-outline-info">
                                    Profile photo
                                    <input onChange={handleChange('photo')} type="file" accept="image/*" hidden />
                                </label>
                </div>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} type="text" value={name} className="form-control"/>
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} type="text" value={email} className="form-control"/>
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} type="password" value={password} className="form-control"/>
            </div>
            <div className="form-group">
                <label className="text-muted">About</label>
                <textarea onChange={handleChange('about')} type="text" value={about} className="form-control"/>
            </div>
            <div>
                <button style={{backgroundColor: 'antiquewhite', borderColor: 'black'}} type="submit" className="btn btn-warning">Submit</button>
            </div>
        </form>
        </div>
    )

    const showError = () => (
        <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>
            {error}
        </div>
    )

    const showSuccess = () => (
        <div className="alert alert-success" style={{display: success ? '' : 'none'}}>
            Profile updated!
        </div>
    )

    const showLoading = () => (
        <div className="alert alert-info" style={{display: loading ? '' : 'none'}}>
            Loading...
        </div>
    )

    return(
        <React.Fragment>
            <div className="container">
                    <div style={{paddingTop: '3rem'}}>
                        <img src={`${API}/user/photo/${username}`}
                            style={{maxWidth: '20rem'}}
                            alt={`${name}`}
                        />
                    </div>
                    <div>
                        {showError()}
                        {showLoading()}
                        {showSuccess()}
                        {profileUpdateForm()}
                    </div>
                </div>
        </React.Fragment>
    )

}

export default ProfileUpdate;