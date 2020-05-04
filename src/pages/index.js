import "../components/layout.css"
import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Canvas from "../components/canvas"

import Step1 from "../components/step1"
const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Banner></Banner>
        <Step1></Step1>
        <Canvas></Canvas>
      </Layout>
    </>
  )
}

export default IndexPage
