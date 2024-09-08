import React from 'react';
import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Button, Heading, Text, useColorModeValue, Image, useToast } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import userService from '../services/userService'; // Ensure this import is correct
import { useUser } from '../contexts/UserContext';

export default function Login() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const toast = useToast();
    const { register, handleSubmit,setError, formState: { errors } } = useForm();
    const { saveUser } = useUser();

    const onSubmit = data => {
        toast.promise(
            userService.loginUser(data,toast).then(response => {
                // Access the returned data here
                console.log('Login response:', response.data);
                saveUser(response.data);
                navigate('/products'); // Navigate to the dashboard or any other page
            }),
            {
                loading: { title: 'Logging in...', description: 'Please wait...' },
                success: { title: 'Login Successful', description: 'You have successfully logged in!', status: 'success', duration: 5000, isClosable: true },
                error: { title: 'Login Failed!',status: 'error', duration: 5000, isClosable: true }
            }
        );
    };

    return (
        <Flex>
            <Flex display={{ base: "none", md: "flex" }} w={'50%'}>
                <Image src='login.jpg' objectFit={'cover'} borderTopRightRadius={'15'} borderBottomRightRadius={'15'} loading='lazy' />
            </Flex>
            <Flex
                minH={{ base: "50vh", md: '100vh' }}
                align={'center'}
                justify={'center'}
                w={{ base: "100%", md: '50%' }}
            >
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>{t('signInToYourAccount')}</Heading>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Stack spacing={4}>
                                <FormControl id="email" isInvalid={errors.email}>
                                    <FormLabel>{t('Email')}</FormLabel>
                                    <Input
                                        type="email"
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                message: 'Invalid email address'
                                            }
                                        })}
                                    />
                                    {errors.email && (
                                        <Text color="red.500" fontSize="sm">
                                            {errors.email.message}
                                        </Text>
                                    )}
                                </FormControl>

                                <FormControl id="password" isInvalid={errors.password}>
                                    <FormLabel>{t('password')}</FormLabel>
                                    <Input
                                        type="password"
                                        {...register('password', {
                                            required: 'Password is required',
                                            minLength: {
                                                value: 6,
                                                message: 'Password must be at least 6 characters long'
                                            }
                                        })}
                                    />
                                    {errors.password && (
                                        <Text color="red.500" fontSize="sm">
                                            {errors.password.message}
                                        </Text>
                                    )}
                                </FormControl>
                                <Stack spacing={10}>
                                    <Stack
                                        direction={{ base: 'column', sm: 'row' }}
                                        align={'start'}
                                        justify={'space-between'}>
                                        <Checkbox>{t('rememberMe')}</Checkbox>
                                        <Text color={'blue.400'}>{t('forgotPassword')}</Text>
                                    </Stack>
                                    <Button
                                        bg={useColorModeValue('green.400', 'green.600')}
                                        color={'white'}
                                        type='submit'
                                        _hover={{
                                            bg: useColorModeValue('green.300', 'green.500')
                                        }}>
                                        {t('signIn')}
                                    </Button>
                                    <Text color={'blue.400'} cursor={'pointer'} onClick={() => { navigate('/signup') }}>{t('newtoKC')}</Text>
                                </Stack>
                            </Stack>
                        </form>
                    </Box>
                </Stack>
            </Flex>
        </Flex>
    );
}