import React from "react"
import { Typography } from "antd"
import Icon from "../images/illustration_02.svg"
import "../styles/step1.css"
const { Text } = Typography
const { Title } = Typography

const Step1 = () => {
  return (
    <div className={"wrapper"}>
      <div>
        <Title>Step 1</Title>
        <Text style={{ fontSize: "16px" }} strong>
          Connect your laptop to a projector.
        </Text>
      </div>
      <div className={"wrapper-image"}>
        <Icon></Icon>
      </div>
    </div>
  )
}

export default Step1
