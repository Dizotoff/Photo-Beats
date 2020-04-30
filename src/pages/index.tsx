import * as React from 'react'
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
              height: `100vh`,
              margin: '15px',
              backgroundColor: 'transparent',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <h1>Live synchronised music video right in your browser</h1>
          </div>
        </div>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
