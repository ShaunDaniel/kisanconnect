import { useState } from 'react'
import './App.css'
import { Button, Image, Flex, Text, useColorMode } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Flex justifyContent={'center'} alignItems={'center'} direction={'column'}>
        <Image src={colorMode=='light'?'kc_lightbg.png' : 'kc_darkbg.png'} w={'sm'} mx={'auto'}></Image>
          <Text my={5} fontSize={'x-large'}>Work in progress... 🚧</Text>
          <Button onClick={toggleColorMode} w={'fit-content'}>
            {colorMode === 'light' ? '🌙' : '☀'}
          </Button>
      </Flex>
    </>
  )
}

export default App
