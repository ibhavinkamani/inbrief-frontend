import Layout from '../components/Layout';
import Head from 'next/head';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../config';
import { withRouter } from 'next/router';
import React, { Fragment, useState, useEffect } from 'react';
import ContactForm from "../components/form/contact-form";

const Contact = () => {
  return (
      <Layout>
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-8 offset-md-2">
                      <h2>We would love ❤️ to hear from you!</h2>
                      <hr/>
                      <ContactForm/>
                  </div>
              </div>
          </div>
      </Layout>
  )
};

export default withRouter(Contact);