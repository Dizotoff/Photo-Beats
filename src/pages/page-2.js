import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { motion, useViewportScroll } from "framer-motion"

const SecondPage = () => {
  const { scrollYProgress } = useViewportScroll()
  let i = 0
  const ebanko = number => {
    for (i = 0; i < 50; i++) {
      console.log(i)
      return <p>YA EBLAN</p>
    }
  }

  return (
    <Layout>
      <SEO title="Page two" />
      <motion.path
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{ pathLength: scrollYProgress }}
      />
      {ebanko(500)}
    </Layout>
  )
}

export default SecondPage
