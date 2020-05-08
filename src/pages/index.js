import "../styles/layout.css"
import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Contact from "../components/contact"
import MicCanvas from "../components/micCanvas"
import SetupCanvas from "../components/setupCanvas"
import CustomizableCanvas from "../components/customizableCanvas"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <>
      <SEO
        title="Home"
        description="We provide customizable audio reactive visuals right in browser using microphone with zero setup!"
      />

      <Layout>
        <Banner></Banner>
        <SetupCanvas></SetupCanvas>
        <CustomizableCanvas></CustomizableCanvas>
        <MicCanvas></MicCanvas>
        <Contact></Contact>
        <div id="contact">
          <Footer></Footer>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
