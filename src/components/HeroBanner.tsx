import * as React from 'react'
import styled from '@emotion/styled'

interface HeroBanner {
  heading: string
  text: string
  img: string
}

const HeroBannerWrapper = styled.div``

const HeroBanner: React.FC<HeroBanner> = ({ heading, text, img }) => (
  <HeroBannerWrapper>
    {heading}
    {text}
    {img}
  </HeroBannerWrapper>
)

export default HeroBanner
