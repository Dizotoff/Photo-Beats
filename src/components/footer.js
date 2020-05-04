import React from "react"
import { Typography } from "antd"
const { Text } = Typography

const Footer = () => {
  return (
    <div
      style={{
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "static",
      }}
    >
      <Text style={{ color: "black" }}>© Photo-Beats 2020</Text>
    </div>
  )
}

export default Footer
