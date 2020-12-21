import React from 'react'
import Layout from "../components/layout"
import Head from '../components/head'

function Contact() {
    return (
        <Layout>
        <Head title="Contact"/>
            <h1>Contact Title</h1>
            <p>
                Andrew Mead:
               <a href="https://twitter.com/andrew_j_mead" 
                 target="_blank"> 
                 Twitter </a>
            </p>
        </Layout>
    )
}

export default Contact
