import React from "react"
import Head from '../components/head'
import Layout from "../components/layout"

const IndexPage = () => {
  return (
      <Layout>
        <Head title="Home"/>
        <h1>Hello,</h1>
        <h2>I am Glorious, living in Glorvania</h2>
        <h4>The following would be a discription of this blog if it were real.</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maecenas non ullamcorper massa. Duis malesuada justo mauris, a convallis nulla 
          eleifend quis. Vestibulum non faucibus ante. In cursus odio vel urna eleifend, 
          congue tincidunt metus condimentum. Proin ac ultricies tortor. Mauris fermentum 
          orci ut vulputate interdum. Proin finibus interdum posuere. Aenean sollicitudin 
          quam a nunc posuere bibendum. Donec id magna vel nisi malesuada fringilla quis 
          nec massa. In tincidunt nisl at orci facilisis, at tristique eros tincidunt. 
          Sed ut volutpat ante. Quisque vitae blandit erat. Aliquam nec hendrerit odio, 
          id tincidunt lorem. Maecenas tempor quam vitae neque malesuada, eget accumsan 
          velit luctus. Duis eu imperdiet neque.
        </p>


      </Layout>
  )
}

export default IndexPage