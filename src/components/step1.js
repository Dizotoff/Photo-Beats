import React from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { Typography } from "antd"
import Icon from "../images/microphone.svg"
import "../styles/step1.css"
const { Text } = Typography
const { Title } = Typography

const Step1 = () => {
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])

  return (
    <div className={"wrapper"}>
      <div style={{ maxWidth: "600px" }}>
        <Title style={{ color: "#222222" }}>
          Use your microphone to capture the soundscape
        </Title>

        <p></p>

        <Text style={{ fontSize: "16px", color: "#86868b" }}>
          No more wires! Utilizing sound from laptop's build-in microphone, our
          service produces visuals which reacts to the soundscape in real time.
          There is no record created whatsoever, data from your mic never leaves
          your computer.
        </Text>
        <p></p>
        <Text style={{ fontSize: "12px", color: "#86868b" }}>
          Mobile/Tablet support is coming next
        </Text>
      </div>
      <div className={"wrapper-image"}>
        <Icon></Icon>
      </div>
    </div>
  )
}

export default Step1
