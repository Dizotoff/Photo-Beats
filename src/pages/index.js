import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Contact from "../components/contact"
import Footer from "../components/footer"
import Canvas from "../components/canvas"
import SetupIcon from "../images/illustration_02_black.svg"
import CustomizationIcon from "../images/illustration_03.svg"
import MicIcon from "../images/microphone.svg"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO
          title="Home"
          description="We provide customizable audio reactive visuals right in browser using microphone with zero setup!"
        />
        <Banner></Banner>
        <Canvas
          title="Instant"
          reverse
          text=" A concert, a play, a dj set or any live perfomance can benefit from
          carefully selected reactive lights. With our app, you don't need to
          spend hours to learn how to build audio reactive visuals, everything's
          ready right here in the browser. No installation required!"
        >
          <SetupIcon></SetupIcon>
        </Canvas>
        <Canvas
          title="Customizable"
          dark
          text="Use filters to change the colors and shapes, use knobs to control
          sensitivity. Customize the soundscape visualisation with own text,
          video or images. Collaborate with other creators. Interact with
          visuals live using computer keyboard or MIDI-keyboard."
        >
          <CustomizationIcon></CustomizationIcon>
        </Canvas>

        <Canvas
          title="Wireless"
          reverse
          text=" Utilizing sound input from laptop's build-in microphone, our service
          produces visuals which reacts to the soundscape in real time. There is
          no record created whatsoever, data from your mic never leaves your
          computer."
        >
          <MicIcon style={{ maxWidth: "20vw" }}></MicIcon>
        </Canvas>
        <Contact></Contact>
        <div id="contact">
          <Footer></Footer>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
