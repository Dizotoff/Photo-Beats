import "../components/layout.css"
import React from "react"
import Player from "../components/player"
import SEO from "../components/seo"
import { Button } from "antd"
import { Typography } from "antd"
import { Input } from "antd"
import Layout from "../components/layout"

const { Title } = Typography
const { Text } = Typography
const IndexPage = () => {
  return (
    <div>
      <SEO title="Home" />
      <Layout>
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
            <Title
              style={{ color: "white", textAlign: "center", margin: "8px" }}
            >
              REAL-TIME AUDIO REACTIVE VISUALS IN THE BROWSER
            </Title>

            <p></p>
            <Text style={{ color: "grey" }}>
              Development is still in process. Submit your email and we will
              notify when we launch!
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
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage
