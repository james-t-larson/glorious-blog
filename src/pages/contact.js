import React from 'react'
import Layout from "../components/layout"
import Head from '../components/head'
import contactStyles from './contact.module.scss'

function Contact() {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact Info</h1>
            <ul>
                <li className='contact-item'>
                    Twitter:
                        <a href="https://twitter.com" className={contactStyles.link}>
                        MockTwitterHandle
                        </a>
                </li>
                <li className='contact-item'>
                    Github:
                        <a href="https://github.com/" className={contactStyles.link}>
                        MockGithubUserName
                        </a>
                </li>
                <li className='contact-item'>
                    Email:
                        <a href="mailto:mock_email_account@mail.com" className={contactStyles.link}>
                        mock_email_account@mail.com
                        </a>
                </li>
            </ul>
        </Layout>
    )
}

export default Contact
