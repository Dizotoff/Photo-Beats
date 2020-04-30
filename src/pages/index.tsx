import * as React from 'react'
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Player from '../components/Player'
//import domready from 'domready'

const IndexPage = () => {
  // Domready package is ready to be remove if video playback is working on the first load
  // if (typeof document !== 'undefined') {
  //   domready(() => {
  //     console.log('DOM is ready')
  //   })
  // }
  return (
    <IndexLayout>
      <Player />

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
              <h1 style={{ textAlign: 'center' }}>REAL-TIME AUDIO REACTIVE VISUALS IN THE BROWSER</h1>
            </div>
          </div>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default IndexPage
