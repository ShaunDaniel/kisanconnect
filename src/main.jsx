import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './index.css'

import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({config})

createRoot(document.getElementById('root')).render(

  <ChakraProvider theme={theme}>
    <StrictMode>
      <App />
    </StrictMode>
  </ChakraProvider>

)
