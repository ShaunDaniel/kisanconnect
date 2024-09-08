import React from 'react';
import {
    Flex,
    Box,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    useToast
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

export default function Register() {
    const toast = useToast();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleSelection = (role) => {
        toast({
            title: `You selected ${role}.`,
            description: `You have selected ${role} as your role.`,
            status: "success",
            duration: 5000,
            isClosable: true,
        });
        role === 'Buyer' ? navigate('/signup/buyer') : navigate('/signup/seller');
    };

    return (
        <Flex
            minH={'80vh'}
            align={'start'}
            justify={'center'}
            bg={useColorModeValue('white', 'gray.800')}
            bgImage={'/register_main.png'}
            bgSize={'cover'}
            bgPosition={'center'}
            bgBlendMode={useColorModeValue('unset', 'overlay')}

        >

            <Stack spacing={8} mx={'auto'} w={'xl'} py={12} px={6}>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('gray.50', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}
                    w={"100%"}
                >
                    <Stack spacing={4}>
                        <Stack direction={'column'} spacing={4}>
                            <Heading fontSize={'4xl'} textAlign={'center'} fontWeight={'800'}>{t('iWantTo')}</Heading>

                            <Button
                                size="lg"
                                bg={useColorModeValue('blue.400', 'blue.700')}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                onClick={() => handleSelection('Buyer')}
                            >

                                {t('buyProduce')}

                            </Button>
                            <Button
                                size="lg"
                                bg={useColorModeValue('green.400', 'green.600')}
                                color={'white'}
                                _hover={{
                                    bg: 'green.500',
                                }}
                                onClick={() => handleSelection('Farmer')}
                            >

                                {t('SellProduce')}

                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}