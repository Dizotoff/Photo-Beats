import React from "react"
import Icon from "./../images/illustration_02.svg"
import { Typography, Input, Button } from "antd"
const { Text } = Typography
const Canvas = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "black" }}>
      <Icon></Icon>
      <p></p>
      <Text style={{ color: "grey" }}>
        Submit your email and we will notify you when we launch!
      </Text>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <Input
          style={{
            marginRight: "8px",
            maxWidth: "200px",
            marginTop: "12px",
          }}
          name="email"
          type="email"
          placeholder="Email"
        />
        <Button type="primary" htmlType="submit">
          Sent
        </Button>
      </form>
    </div>
  )
}

export default Canvas
