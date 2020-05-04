import React from "react"
import { Typography } from "antd"
import Icon from "../images/illustration_02.svg"
const { Text } = Typography
const { Title } = Typography
const Step1 = () => {
  return (
    <div
      className={"MainTest"}
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Title>Step 1</Title>
        <Text style={{ fontSize: "16px" }} strong>
          Connect your laptop to a projector.
        </Text>
      </div>
      <div>
        <Icon style={{ width: "40vw" }}></Icon>
      </div>
    </div>
  )
}

export default Step1
