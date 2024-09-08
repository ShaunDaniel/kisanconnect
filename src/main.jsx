import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import './i18n.js'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <UserProvider>
        <App />
      </UserProvider>
    </ChakraProvider>
  </BrowserRouter>

)
