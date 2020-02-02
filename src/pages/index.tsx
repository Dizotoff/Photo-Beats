import * as React from 'react'
import { Link } from 'gatsby'
import { heights } from '../styles/variables'
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import BackgroundVideo from 'react-background-video-player'
import video from '../videos/vhs.mp4'
const IndexPage = () => (
  <IndexLayout>
    <BackgroundVideo
      style={{ display: 'inline' }}
      containerHeight={typeof window !== 'undefined' ? window.innerHeight : 0}
      containerWidth={typeof window !== 'undefined' ? window.innerWidth : 0}
      src={video}
      autoPlay={true}
      playsInline={true}
    ></BackgroundVideo>

    <Page>
      <Container>
        <div>
          <div
            style={{
              height: `calc(100vh - ${heights.header}px)`,
              backgroundColor: 'transparent',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <h1>Live synchronised music video right in your browser</h1>
          </div>
        </div>
        <p>
          It's easy and quick way to create an unique graphics. Apply some filters on top to make it look even more funky. Filters also can
          be changed while playing live!
        </p>

        <p></p>

        <Link to="/visualizer/">Go to page 2</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
