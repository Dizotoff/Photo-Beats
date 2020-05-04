import React from "react"
import { Typography, Button } from "antd"
import Player from "./player"
const { Title } = Typography
const { Text } = Typography

const Banner = () => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      position: "static",
    }}
  >
    <Player></Player>

    <div style={{ color: "white", zIndex: "1", maxWidth: "600px" }}>
      <Title style={{ color: "white", textAlign: "center" }}>
        REAL-TIME AUDIO REACTIVE VISUALS IN THE BROWSER
      </Title>
      <p></p>
      <Text style={{ color: "white", fontSize: "14px" }}>
        Having a live performance, but got no visuals? Just use our website to
        have them in 3 easy steps! We provide customizable audio reactive
        visuals right in your browser with zero knowledge required!
      </Text>
      <p></p>
      <Button type="primary">Get Started</Button>
    </div>
  </div>
)

export default Banner
