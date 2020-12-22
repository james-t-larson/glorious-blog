import React from 'react'
import Head from '../components/head'
import { Link } from "gatsby"
import Layout from "../components/layout"

function about() {
    return (
        <Layout>
            <Head title="About"/>
            <h1>About Me</h1>
            <p>
            Nullam commodo tincidunt mauris. Morbi imperdiet iaculis augue, 
            eu efficitur nibh consectetur sed. Vivamus auctor fringilla mollis. 
            Maecenas imperdiet purus id risus dapibus mattis. Aenean euismod ac odio 
            ut commodo. Fusce consequat nulla vel elementum vestibulum. Mauris maximus 
            eleifend sem, iaculis feugiat tellus faucibus ac. Phasellus odio nulla, 
            pellentesque ut odio id, tincidunt egestas lectus. Etiam et cursus erat, 
            ut iaculis ante. Suspendisse nec tellus mollis risus dictum pretium in eget 
            nisl. 
            </p>
        </Layout>
    )
}

export default about
