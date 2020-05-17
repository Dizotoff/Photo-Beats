import React from "react"
import { Typography } from "antd"
import "../styles/canvas.css"

const { Text } = Typography
const { Title } = Typography

const Canvas = ({ title, text, dark, children, reverse }) => {
  return (
    <div
      style={{
        backgroundColor: !dark ? "white" : "black",
        display: "flex",
        height: "100vh",
        justifyContent: "space-around",

        textAlign: "center",
      }}
      className={"canvas-wrapper"}
    >
      <div
        className={"canvas-content"}
        style={{
          display: "flex",
          flexDirection: reverse ? "row-reverse" : "row",

          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "600px" }}>
          <Title style={{ color: dark ? "white" : "black" }}>{title}</Title>
          <Text style={{ fontSize: "16px", color: "#86868b", padding: "8px" }}>
            {text}
          </Text>
        </div>
        <div className={"canvas-image"}>{children}</div>
      </div>
    </div>
  )
}

export default Canvas
