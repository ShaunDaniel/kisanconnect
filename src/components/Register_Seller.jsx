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
import { Country, State, City } from 'country-state-city';
import { useTranslation } from 'react-i18next';

export default function RegisterSeller() {
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
            description: `This feature is under development. ${data.firstName} will be registered as a farmer.`,
            status: "info",
        });
        console.log("Data submitted: ", data);
    };

    return (
        <Flex gap={5}>
            <Flex display={{ base: "none", md: "flex" }} w={'50%'} position="relative">
                <Image
                    src='/register_farmer.png'
                    objectFit={'cover'}
                    borderTopRightRadius={'15'}
                    borderBottomRightRadius={'15'}
                    loading='lazy'
                    w="100%"
                    h="100%"
                />
                <Box
                    position="absolute"
                    top="5%"
                    left="50%"
                    color="green.800"
                    lineHeight={1.5}
                    px={5}
                    fontSize="3xl"
                    fontWeight="800"
                    textAlign="right"
                    py={4}
                    borderRadius="md"
                >
                    {t('registerAsFarmer')}
                </Box>
            </Flex>
            <Flex
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                px={8}
                w={{ base: '100%', md: '50%' }}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Heading textAlign={'start'} w={'full'} pt={5} pb={5}>Become a Farmer Partner</Heading>
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
                            <Input type="tel" placeholder='+91 XXXXXXXXXX' {...register('phone', { required: 'Phone Number is required' })} />
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

                        <FormControl id="landArea" isInvalid={errors.landArea}>
                            <FormLabel>Land Area</FormLabel>
                            <Select
                                placeholder="Select Land Area"
                                {...register('landArea', { required: 'Land Area is required' })}
                            >
                                <option value="Less than 1 acre">Less than 1 acre</option>
                                <option value="1-5 acres">1-5 acres</option>
                                <option value="5-10 acres">5-10 acres</option>
                                <option value="more than 10 acres">More than 10 acres</option>
                            </Select>
                            {errors.landArea && <Text color="red.500">{errors.landArea.message}</Text>}
                        </FormControl>

                        <FormControl id="farmingType" isInvalid={errors.farmingType}>
                            <FormLabel>Type of Farming</FormLabel>
                            <Select
                                placeholder="Select Type of Farming"
                                {...register('farmingType', { required: 'Type of Farming is required' })}
                            >
                                <option value="Organic">Organic</option>
                                <option value="Traditional">Traditional</option>
                                <option value="Mixed">Mixed</option>
                                <option value="Others">Others</option>
                            </Select>
                            {errors.farmingType && <Text color="red.500">{errors.farmingType.message}</Text>}
                        </FormControl>

                        <FormControl id="transportation" isInvalid={errors.transportation}>
                            <FormLabel>Transportation Facilities</FormLabel>
                            <Checkbox>
                                Do you have your own vehicle for delivery?
                            </Checkbox>
                            {errors.transportation && <Text color="red.500">{errors.transportation.message}</Text>}
                        </FormControl>

                        <FormControl id="certifications">
                        <FormLabel>Certification</FormLabel>
                            <Checkbox {...register('certifications')} w={'full'} my={1}>
                                I have certifications
                            </Checkbox>
                            <Text fontSize="sm" color="gray.500">
                                Note: You will need to verify your certifications later.
                            </Text>
                        </FormControl>

                        <FormControl id="terms" isInvalid={errors.terms}>
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