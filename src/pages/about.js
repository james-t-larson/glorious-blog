import React from 'react'
import Head from '../components/head'
import { Link } from "gatsby"
import Layout from "../components/layout"

function about() {
    return (
        <Layout>
            <Head title="About"/>
            <h1>About Me</h1>
            <p>Bio</p>
            <Link to="/contact">Contact</Link>
        </Layout>
    )
}

export default about
