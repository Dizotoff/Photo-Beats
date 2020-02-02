import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import HeroBanner from './../components/HeroBanner'
import BackgroundVideo from 'react-background-video-player'
import video from '../videos/vhs.mp4'
const IndexPage = () => (
  <IndexLayout>
    <BackgroundVideo
      containerHeight={window && window.innerHeight}
      containerWidth={window && window.innerWidth}
      src={video}
      autoPlay={true}
      playsInline={true}
    />
    <Page>
      <Container>
        <div style={{ height: window && window.innerHeight, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ paddingBottom: '0px' }}>
            <h1>Live synchronised music video right in your browser</h1>
          </div>
        </div>

        <p>
          It's easy and quick way to create an unique graphics. Apply some filters on top to make it look even more funky. Filters also can
          be changed while playing live!
        </p>

        <p></p>
        <HeroBanner
          heading="We don't need no trouble"
          text="(We don't need) no, we don't need (no more trouble) no more trouble! (We don't need no more trouble) Wo! Oh-oh-oh! (We don't need)
        we don't need no, no more trouble! We don't need no trouble! (We don't need no more trouble) Make love and not war! 'Cause we don't
        need no trouble What we need is love (love)"
        ></HeroBanner>
        <p></p>
        <p>
          Use a series of pictures to create audio responsive music video. You can use your mic to synchronise it with the music on the go
          or manually match it with the beat!
        </p>
        <p>Connect your smartphone or laptop to the projector and enjoy your graphics perfectly synched to your music.</p>
        <HeroBanner
          heading="What we need is love"
          text="We don't need no trouble, we don't really need no trouble!
          Oh! We don't need no trouble!
          What we need is love!"
        ></HeroBanner>
        <Link to="/visualizer/">Go to page 2</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
