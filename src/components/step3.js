import React from "react"
import { Typography } from "antd"
import Icon from "../images/illustration_03.svg"
import "../styles/step3.css"
const { Text } = Typography
const { Title } = Typography

const Step3 = () => {
  return (
    <div className={"wrapper-step-3"}>
      <div style={{ maxWidth: "600px" }}>
        <Title style={{ color: "white" }}>Customizable</Title>
        <Text style={{ fontSize: "16px", color: "#86868b" }}>
          Use filters to change the colors and shapes, use knobs to control
          sensitivity. Customize the soundscape visualisation with own text,
          video or images. Perform with visuals live using computer keyboard or
          MIDI-keyboard.
        </Text>
      </div>
      <div>
        <Icon className={"wrapper-step-3-image"}></Icon>
      </div>
    </div>
  )
}

export default Step3
