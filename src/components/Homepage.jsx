import React, { useState } from 'react';
import { Button, Flex, Heading, Text, Image, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useUser } from '../contexts/UserContext';

function Homepage() {
    const [count, setCount] = useState(0);
    const { colorMode, toggleColorMode } = useColorMode();
    const navigate = useNavigate();
    const { user } = useUser()
    
    const handleGetStarted = () => {
        if(user){
            navigate('/products');
        }
        else{
            navigate('/signup');

        }

    }
    const { t } = useTranslation();
    


    return (

        <Flex w={'full'} direction={{ base: 'column', md: 'row' }} minH={'80vh'} gap={5}>
            <Flex w={{ base: "100%", md: "50%" }} h={{ base: "30vh", md: "50vh" }} bgColor={useColorModeValue('green.100', 'green.900')} borderRightRadius={{ base: 0, md: 20 }} p={{ base: 5, md: 10 }} direction={'column'}>
                <Heading fontSize={{ base: '3xl', md: '5xl' }} fontWeight={800} textAlign={'left'}>{t('Empowering')}</Heading>
                <Text fontSize={{ base: 'md', md: 'xl' }} textAlign={'left'} mt={4}>
                    {t('supportingindian')}
                </Text>
                <Button colorScheme='green' w={"50%"} variant='solid' mt={4} onClick={handleGetStarted}>
                    {t('GetStarted')}
                </Button>
            </Flex>
            <Flex w={{ base: "100%", md: "50%" }} justifyContent={'end'} direction={'column'} >
                <Image alt='image of a happy farmer' src={'/farmer_landing.png'} objectFit={'cover'} boxSize={{ base: '50vh', md: '80vh' }} m={0} alignSelf={'center'} />
                <Flex h={'100px'} display={{ base: 'flex', md: 'none' }} bgColor={'green.800'} w={'full'}></Flex>
            </Flex>

        </Flex>


    );
}

export default Homepage;