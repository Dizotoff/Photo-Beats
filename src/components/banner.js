import React from "react"
import { Button } from "antd"
import { Typography } from "antd"
import { Input } from "antd"
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
      <Title style={{ color: "white", textAlign: "center", margin: "8px" }}>
        REAL-TIME AUDIO REACTIVE VISUALS IN THE BROWSER
      </Title>
      <p></p>
      <Text style={{ color: "white" }}>
        Having a live performance tomorrow, but got no visuals? Just use this
        website to have it! We provide customizable audio reactive visuals right
        in your browser with zero hustle!
      </Text>
    </div>
  </div>
)

export default Banner
