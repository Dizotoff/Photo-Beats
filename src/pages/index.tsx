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
        <div
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <div>
            <h1 style={{ textAlign: 'center' }}>REAL-TIME AUDIO REACTIVE VISUALS IN THE BROWSER</h1>
            <p></p>

            <p>Submit your email and we will notify you on launch!</p>
            <form name="contact" method="POST" data-netlify="true">
              <label>
                Email: <input type="email" name="email" />
              </label>
              <button style={{}} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </Page>
    </IndexLayout>
  )
}

export default IndexPage
