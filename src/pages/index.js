import "../styles/layout.css"
import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Banner from "../components/Banner"
import Contact from "../components/Contact"
import MicCanvas from "../components/MicCanvas"
import SetupCanvas from "../components/SetupCanvas"
import CustomizableCanvas from "../components/CustomizableCanvas"
import Footer from "../components/Footer"

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
        <Footer></Footer>
      </Layout>
    </>
  )
}

export default IndexPage
