import React from "react"
import Icon from "./../images/illustration_02.svg"
import { Typography, Input, Button } from "antd"
import "./step1.css"

const { Text } = Typography
const { Title } = Typography
const Step1 = () => {
  return (
    <div id={"MainTest"} className={"MainTest"}>
      <Title>Step 1.</Title>
      <Text style={{ fontSize: "16px" }} strong>
        Connect your laptop to a projector.
      </Text>
    </div>
  )
}

export default Step1
