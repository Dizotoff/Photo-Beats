import "../components/layout.css"
import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Canvas from "../components/canvas"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Banner></Banner>
        <Canvas></Canvas>
      </Layout>
    </>
  )
}

export default IndexPage
