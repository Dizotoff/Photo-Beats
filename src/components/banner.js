import React from "react"
import { Typography, Button } from "antd"
import Player from "./player"
import scrollTo from "gatsby-plugin-smoothscroll"
const { Title } = Typography
const { Text } = Typography

const Banner = ({ children }) => (
  <div
    style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      position: "static",
      backgroundColor: "black",
    }}
  >
    <Player></Player>
    <div style={{ color: "white", zIndex: "1", maxWidth: "600px" }}>
      <Title style={{ color: "white", textAlign: "center" }}>
        REAL-TIME AUDIO REACTIVE VISUALS IN THE BROWSER
      </Title>
      <p></p>
      <Text style={{ color: "white", fontSize: "16px", padding: "8px" }}>
        Having a live performance, but got no visuals? We provide customizable
        audio reactive visuals right in browser using microphone with zero
        setup!
      </Text>
      <p></p>
      <Button type="primary" ghost onClick={() => scrollTo("#contact")}>
        Get Started
      </Button>
    </div>
  </div>
)

export default Banner
