import { ReactBricks } from 'react-bricks/frontend'
import type { AppProps } from 'next/app'
import config from '../react-bricks/config'

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ReactBricks {...config}>
      <Component {...pageProps} />
    </ReactBricks>
  )
}

export default MyApp
