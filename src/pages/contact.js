import React from 'react'
import Layout from "../components/layout"
import Head from '../components/head'

function Contact() {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact Info</h1>
            <ul>
                <li>
                    Twitter:
                        <a href="https://twitter.com">
                        MockTitterHandle</a>
                </li>
                <li>
                    Github:
                        "<a href="https://github.com/">
                        GithubUserName</a>
                </li>
                <li>
                    Email:
                        <a href="mailto:mock_email_account@mail.com">
                        mock_email_account@mail.com</a>
                </li>
            </ul>
        </Layout>
    )
}

export default Contact
