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
        <Title>Step 3</Title>
        <Text style={{ fontSize: "16px" }} strong>
          Use filters to change the visual patters, use knobs to control
          sensitivity. Customize the soundscape visualisation with own text,
          video or images.
        </Text>
      </div>
      <div className={"wrapper-step-3-image"}>
        <Icon></Icon>
      </div>
    </div>
  )
}

export default Step3
