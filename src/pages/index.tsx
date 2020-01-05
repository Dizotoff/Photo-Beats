import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Live synchronised music video right in your browser for free!</h1>
        <p>
          Use a series of pictures to create audio responsive music video. You can use your mic to synchronise it with the music on the go
          or manually match it with the beat!
        </p>
        <p>
          It's easy and quick way to create an unique graphics. Apply some filters on top to make it look even more funky. Filters also can
          be changed while playing live!
        </p>
        <p>Connect your smartphone or laptop to the projector and enjoy your graphics perfectly synched to your music.</p>

        <Link to="/visualizer/">Go to page 2</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
