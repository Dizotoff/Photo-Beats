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
          With your computer enter browser full screen mode and give permission
          to use your microphone.
        </Text>
        <p></p>
        <Text style={{ fontSize: "14px", color: "grey" }}>
          Utilizing sound from computer's microphone, our service produces image
          which reacts to the soundscape. There is no record created, data from
          the microphone doesn't leave your computer
        </Text>
      </div>
      <div className={"wrapper-image"}>
        <Icon></Icon>
      </div>
    </div>
  )
}

export default Step1
