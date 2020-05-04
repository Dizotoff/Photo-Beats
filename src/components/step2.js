import React from "react"
import { Typography } from "antd"
import Icon from "../images/illustration_01.svg"
import "../styles/step2.css"
const { Text } = Typography
const { Title } = Typography

const Step2 = () => {
  return (
    <div className={"wrapper-step-2"}>
      <div style={{ maxWidth: "600px" }}>
        <Title style={{ color: "white" }}>Step 2</Title>
        <Text style={{ fontSize: "16px", color: "white" }} strong>
          Enter browser full screen mode and give permission to use your
          microphone
        </Text>
        <p></p>
        <Text style={{ fontSize: "16px", color: "white" }}>
          No worries about your privacy! There is no recordings created, data
          from the microphone doesn't leave your computer
        </Text>
      </div>
      <div className={"wrapper-step-2-image"}>
        <Icon></Icon>
      </div>
    </div>
  )
}

export default Step2
