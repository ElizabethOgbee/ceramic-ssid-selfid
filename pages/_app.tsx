import '../styles/globals.css'
import type { AppProps } from 'next/app'
import{ Provider } from "@self.id/react"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider client={{ ceramic: "testnet-clay"}}>
      <Component {...pageProps} />
    </Provider>
  );
}
