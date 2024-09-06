import React, { useState, useEffect } from 'react';
import {
    Box,
    Image,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Text,
    Button,
    Checkbox,
    Select,
    SimpleGrid,
    useColorModeValue,
    useToast
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { State, City } from 'country-state-city';

export default function RegisterBuyer() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [states, setStates] = useState(State.getStatesOfCountry('IN'));
    const [cities, setCities] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const { t } = useTranslation();
    const toast = useToast();

    useEffect(() => {
        if (selectedState) {
            // Load cities of the selected state
            setCities(City.getCitiesOfState('IN', selectedState));
        } else {
            setCities([]);
        }
    }, [selectedState]);


    const onSubmit = data => {
        toast({
            title: `Work in Progress!`,
            description: `This feature is under development. ${data.firstName} will be registered as a buyer.`,
            status: "info",
        });
    };

    return (
        <Flex gap={5}>
            {/* Left Image */}
            <Flex display={{ base: "none", md: "flex" }} w={'50%'} position="relative">
                <Box
                    position="absolute"
                    top="20%"
                    left="50%"
                    color="white"
                    lineHeight={1.5}
                    px={5}
                    whiteSpace="pre-line"
                    fontSize="4xl"
                    fontWeight="800"
                    textAlign="right"
                    py={4}
                    borderRadius="md"
                >
                    {t('registerAsBuyer')}
                </Box>
                <Image src='/register_buyer.png' objectFit={'cover'} borderTopRightRadius={'15'} borderBottomRightRadius={'15'} loading='lazy' />
            </Flex>
            
            {/* Right Form */}
            <Flex
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                px={8}
                w={{ base: '100%', md: '50%' }}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Heading textAlign={'start'} w={'full'} pt={5} pb={5}>Sign Up to Buy Produce</Heading>
                    
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                        
                        <FormControl id="firstName" isInvalid={errors.firstName}>
                            <FormLabel>First Name</FormLabel>
                            <Input type="text" placeholder='Ramesh' {...register('firstName', { required: 'First Name is required' })} />
                            {errors.firstName && <Text color="red.500">{errors.firstName.message}</Text>}
                        </FormControl>
                        
                        <FormControl id="lastName" isInvalid={errors.lastName}>
                            <FormLabel>Last Name</FormLabel>
                            <Input type="text" placeholder='Singh' {...register('lastName', { required: 'Last Name is required' })} />
                            {errors.lastName && <Text color="red.500">{errors.lastName.message}</Text>}
                        </FormControl>

                        <FormControl id="email" isInvalid={errors.email}>
                            <FormLabel>Email Address</FormLabel>
                            <Input
                                type="email"
                                placeholder='ramesh.singh@gmail.com'
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: 'Invalid email address'
                                    }
                                })} />
                            {errors.email && <Text color="red.500">{errors.email.message}</Text>}
                        </FormControl>

                        <FormControl id="phone" isInvalid={errors.phone}>
                            <FormLabel>Phone Number</FormLabel>
                            <Input type="phone" placeholder='+91 XXXXXXXXXX' {...register('phone', { required: 'Phone Number is required' })} />
                            {errors.phone && <Text color="red.500" align={'left'}>{errors.phone.message}</Text>}
                        </FormControl>

                        <FormControl id="password" isInvalid={errors.password}>
                            <FormLabel>Password</FormLabel>
                            <Input type="password" placeholder='********' {...register('password', { required: 'Password is required' })} />
                            {errors.password && <Text color="red.500">{errors.password.message}</Text>}
                        </FormControl>

                        <FormControl id="confirmPassword" isInvalid={errors.confirmPassword}>
                            <FormLabel>Confirm Password</FormLabel>
                            <Input type="password" placeholder='********' {...register('confirmPassword', { required: 'Confirm Password is required' })} />
                            {errors.confirmPassword && <Text color="red.500">{errors.confirmPassword.message}</Text>}
                        </FormControl>

                        <FormControl id="state" isInvalid={errors.state}>
                            <FormLabel>State</FormLabel>
                            <Select
                                placeholder="Select State"
                                {...register('state', { required: 'State is required' })}
                                onChange={(e) => setSelectedState(e.target.value)}
                            >
                                {states.map((state) => (
                                    <option key={state.isoCode} value={state.isoCode}>
                                        {state.name}
                                    </option>
                                ))}
                            </Select>
                            {errors.state && <Text color="red.500">{errors.state.message}</Text>}
                        </FormControl>

                        <FormControl id="city" isInvalid={errors.city}>
                            <FormLabel>City</FormLabel>
                            <Select
                                placeholder="Select City"
                                {...register('city', { required: 'City is required' })}
                                isDisabled={!selectedState}
                            >
                                {cities.map((city) => (
                                    <option key={city.name} value={city.name}>
                                        {city.name}
                                    </option>
                                ))}
                            </Select>
                            {errors.city && <Text color="red.500">{errors.city.message}</Text>}
                        </FormControl>

                        <FormControl id="businessName" isInvalid={errors.businessName}>
                            <FormLabel>Business/Organization Name</FormLabel>
                            <Input type="text" {...register('businessName', { required: 'Business/Organization Name is required' })} />
                            {errors.businessName && <Text color="red.500">{errors.businessName.message}</Text>}
                        </FormControl>
                        
                        <FormControl id="completeAddress" isInvalid={errors.completeAddress}>
                            <FormLabel>Business Address</FormLabel>
                            <Input type="text" {...register('completeAddress', { required: 'Complete Address is required' })} />
                            {errors.completeAddress && <Text color="red.500">{errors.completeAddress.message}</Text>}
                        </FormControl>

                        <FormControl id="terms" isInvalid={errors.terms} >
                            <Checkbox w={"full"} {...register('terms', { required: 'You must agree to the terms and conditions' })}>
                                I agree to the terms and conditions
                            </Checkbox>
                            {errors.terms && <Text color="red.500">{errors.terms.message}</Text>}
                        </FormControl>
                    </SimpleGrid>

                    <Button type="submit" colorScheme="green" w={'full'} size={'lg'} mt={4}>
                        Register
                    </Button>
                </form>
            </Flex>
        </Flex>
    );
}