import "../styles/layout.css"
import React, { useEffect, useState } from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Banner from "../components/banner"
import Canvas from "../components/canvas"

import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion"

import Step1 from "../components/step1"
import Step2 from "../components/step2"
import Step3 from "../components/step3"
import Footer from "../components/footer"

const IndexPage = () => {
  const [isComplete, setIsComplete] = useState(false)

  const { scrollYProgress } = useViewportScroll()

  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1])

  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 })

  useEffect(
    () =>
      yRange.onChange(v => {
        console.log(v)
        return setIsComplete(v >= 1)
      }),
    [yRange]
  )

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Banner>
          <div>
            <svg className="progress-icon" viewBox="0 0 60 60">
              <motion.path
                fill="none"
                strokeWidth="5"
                stroke="red"
                strokeDasharray="0 1"
                d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                style={{
                  pathLength,
                  rotate: 90,
                  translateX: 5,
                  translateY: 5,
                  scaleX: -1, // Reverse direction of line animation
                }}
              />
              <motion.path
                fill="none"
                strokeWidth="5"
                stroke="red"
                d="M14,26 L 22,33 L 35,16"
                initial={false}
                strokeDasharray="0 1"
                animate={{ pathLength: isComplete ? 1 : 0 }}
              />
            </svg>
          </div>
        </Banner>
        <Step2></Step2>
        <Step3></Step3>
        <Step1></Step1>

        <Canvas></Canvas>
        <Footer></Footer>
      </Layout>
    </>
  )
}

export default IndexPage
