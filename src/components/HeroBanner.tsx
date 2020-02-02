import * as React from 'react'
import styled from '@emotion/styled'

interface HeroBanner {
  heading: string
  text: string
}

const HeroBannerWrapper = styled.div`
  z-index: 100;
`

const HeroBanner: React.FC<HeroBanner> = ({ heading, text }) => (
  <HeroBannerWrapper>
    {heading}
    {text}
  </HeroBannerWrapper>
)

export default HeroBanner
