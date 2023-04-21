import "../styles/globals.css"
import type { AppType } from "next/app"

const WebApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default WebApp;
