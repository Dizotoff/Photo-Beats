import "../styles/layout.css"
import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Canvas from "../components/canvas"
import Step1 from "../components/step1"
import Step2 from "../components/step2"
import Step3 from "../components/step3"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Banner></Banner>
        <Step2></Step2>
        <Step3></Step3>
        <Step1></Step1>
        <Canvas></Canvas>
        <Footer></Footer>
      </Layout>
    </>
  )
}

export default IndexPage
