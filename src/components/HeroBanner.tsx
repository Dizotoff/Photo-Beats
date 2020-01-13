import * as React from 'react'
import styled from '@emotion/styled'

interface HeroBanner {
  heading: string
  text: string
}

const HeroBannerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: black;
  height: 400px;
  width: 100%;
`
const HeroBannerTextWrapper = styled.div`
  flex-grow: 1;

  max-width: 50%;
  background-color: red;
  padding: 10px 10px 10px 10px;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

const HeroBannerImageWrapper = styled.div`
  flex-grow: 1;
  min-width: 200px;
  background-color: blue;
`

const HeroBanner: React.FC<HeroBanner> = ({ heading, text }) => (
  <HeroBannerWrapper>
    <HeroBannerTextWrapper>
      <h1>{heading}</h1>
      <p>{text}</p>
    </HeroBannerTextWrapper>
    <HeroBannerImageWrapper />
  </HeroBannerWrapper>
)

export default HeroBanner
