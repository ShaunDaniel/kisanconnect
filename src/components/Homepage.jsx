import React, { useState } from 'react';
import { Button, Flex, Heading, Text, Image, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

function Homepage() {
    const [count, setCount] = useState(0);
    const { colorMode, toggleColorMode } = useColorMode();
    const navigate = useNavigate();
    const handleGetStarted = () => {
        navigate('/signup');
    };

    return (




        <Flex w={'full'} direction={{ base: 'column', md: 'row' }} minH={'80vh'} gap={5}>
            <Flex w={{ base: "100%", md: "50%" }} h={{ base: "30vh", md: "50vh" }} bgColor={useColorModeValue('green.100', 'green.900')} borderRightRadius={{ base: 0, md: 20 }} p={{ base: 5, md: 10 }} direction={'column'}>
                <Heading fontSize={{ base: '3xl', md: '5xl' }} fontWeight={800} textAlign={'left'}>Empowering Farmers, Connecting Buyers</Heading>
                <Text fontSize={{ base: 'md', md: 'xl' }} textAlign={'left'} mt={4}>
                    Supporting Indian Farmers through Transparent and Secure Contract Farming
                </Text>
                <Button colorScheme='green' w={"50%"} variant='solid' mt={4} onClick={handleGetStarted}>
                    Get Started
                </Button>
            </Flex>
            <Flex w={{ base: "100%", md: "50%" }} justifyContent={'end'} direction={'column'} >
                <Image src={'/farmer_landing.png'} objectFit={'cover'} boxSize={{ base: '50vh', md: '80vh' }} m={0} alignSelf={'center'} />
                <Flex h={'100px'} display={{ base: 'flex', md: 'none' }} bgColor={'green.800'} w={'full'}></Flex>
            </Flex>

        </Flex>


    );
}

export default Homepage;