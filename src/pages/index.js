import React from "react"
import Player from "../components/player"
import SEO from "../components/seo"
import { Button } from "antd"
import { Typography } from "antd"
import { Input } from "antd"
import "../components/layout.css"

const { Title } = Typography
const { Text } = Typography
const IndexPage = () => (
  <div>
    <SEO title="Home" />

    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Player></Player>

      <div style={{ color: "white", zIndex: "1" }}>
        <Title style={{ color: "white", textAlign: "center", margin: "8px" }}>
          {" "}
          REAL-TIME AUDIO REACTIVE VISUALS IN THE BROWSER
        </Title>

        <p></p>
        <Text style={{ color: "grey" }}>
          Development is still in process. Submit your email and we will notify
          when we launch!
        </Text>

        <form name="contact" method="POST" data-netlify="true">
          <Input
            style={{ width: "200px", margin: "8px" }}
            name="email"
            type="email"
            placeholder="Email"
          />
          <Button type="submit">Sent</Button>
        </form>
      </div>
    </div>
  </div>
)

export default IndexPage
