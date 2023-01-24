import { SiderbarDrawerProvider } from '@/contexts/SiderbarDrawerContext'
import { makeServer } from '@/services/miraje'
import { theme } from '@/styles/theme'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '@/services/queryClient'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SiderbarDrawerProvider>
          <Component {...pageProps} />
        </SiderbarDrawerProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
