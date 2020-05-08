import React from "react"
import { Typography } from "antd"
import Icon from "../images/illustration_02_black.svg"
import "../styles/setupStyles.css"
const { Text } = Typography
const { Title } = Typography

const SetupCanvas = () => {
  return (
    <div className={"wrapper-step-2"}>
      <div style={{ maxWidth: "600px" }}>
        <Title style={{ color: "#222222" }}>Instant</Title>
        <Text style={{ fontSize: "16px", color: "#86868b", padding: "8px" }}>
          A concert, a play, a dj set or any live perfomance can benefit from
          carefully selected reactive lights. With our app, you don't need to
          spend hours to learn how to build audio reactive visuals, everything's
          ready right here in the browser. No installation required!
        </Text>
      </div>
      <div>
        <Icon className={"wrapper-step-2-image"}></Icon>
      </div>
    </div>
  )
}

export default SetupCanvas
