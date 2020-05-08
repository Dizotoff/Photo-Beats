import React from "react"
import { Typography } from "antd"
import Icon from "../images/microphone.svg"
import "../styles/step1.css"
const { Text } = Typography
const { Title } = Typography

const MicCanvas = () => {
  return (
    <div className={"wrapper"}>
      <div style={{ maxWidth: "600px" }}>
        <Title style={{ color: "#222222" }}>Wireless</Title>

        <p></p>

        <Text style={{ fontSize: "16px", color: "#86868b" }}>
          Utilizing sound input from laptop's build-in microphone, our service
          produces visuals which reacts to the soundscape in real time. There is
          no record created whatsoever, data from your mic never leaves your
          computer.
        </Text>
        <p></p>
        <Text style={{ fontSize: "12px", color: "#86868b" }}>
          Mobile/Tablet support is coming next
        </Text>
      </div>
      <div className={"wrapper-image"}>
        <Icon></Icon>
      </div>
    </div>
  )
}

export default MicCanvas
