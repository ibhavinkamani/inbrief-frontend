import MailchimpSubscribe from "react-mailchimp-subscribe";
import React from 'react'
import Layout from "../../components/Layout";

const Subscribe = () => {
    const url = "https://dev.us1.list-manage.com/subscribe/post?u=31a978b1cd4f42c760a3d215f&amp;id=466c128394";

    return (
        <React.Fragment>
            <Layout>
                <main>
                    <div className="container-fluid" style={{padding: '9rem', background: 'darkseagreen'}}>
                        <strong><p style={{fontSize: '3rem'}}>Would you like me to keep you in loop?</p></strong>
                        <p style={{fontSize: 'x-large'}}>We will not share you email address with anyone.</p>
                        <div>
                            <MailchimpSubscribe url={url} />
                        </div>
                    </div>
                </main>
            </Layout>
        </React.Fragment>
    )
}


export default Subscribe;