import React from "react"
import { Typography, Input, Button } from "antd"
const { Text } = Typography

const Canvas = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "black",
      }}
    >
      <p></p>
      <Text style={{ color: "white", maxWidth: "600px" }}>
        Unfortunatelly, the development is still in the progress. Submit your
        email and we will notify you when we launch!
      </Text>
      <p></p>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div style={{ display: "flex" }}>
          <Input
            style={{ width: "250px" }}
            name="email"
            type="email"
            placeholder="Email"
          />

          <Button
            style={{ marginLeft: "8px" }}
            type="primary"
            htmlType="submit"
          >
            Sent
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Canvas
