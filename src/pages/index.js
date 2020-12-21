import React from "react"
import { Link } from "gatsby"
import Head from '../components/head'
import Layout from "../components/layout"

const IndexPage = () => {
  return (
      <Layout>
        <Head title="Home"/>
        <h1>Hello</h1>
        <h2>I am James, living in Lithuania</h2>
        <p>Need a Dev? <Link to="/contact">Contact Me</Link></p>
      </Layout>
  )
}

export default IndexPage