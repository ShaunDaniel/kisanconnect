// src/components/ProductCard.jsx
import React, {useEffect, useState} from 'react';
import {
  Box,
  Image,
  Badge,
  Text,
  Stack,
  Button,
  Flex,
  Tag,
  Avatar,
  TagLabel,
  useColorModeValue,
  useToast
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { format } from 'date-fns';
import userService from '../services/userService';

const ProductCard = ({
  product: {
    image,
    variety,
    productName,
    category,
    grade,
    price,
    unit,
    quantityAvailable,
    quantityUnit,
    location,
    organic,
    harvestDate,
    expectedShelfLife,
    certifications,
    farmerName,
    rating,
    addedBy
  },
}) => {

  const toast = useToast();
  const [createdByUser, setCreatedByUser] = useState({});
  
  const date = new Date(harvestDate);
  const formattedDate = format(date, 'MMMM do, yyyy');
  
  useEffect(() => {
    userService.getUser(addedBy).then((response) => {
      setCreatedByUser(response.data);
    });
  }, []);


  console.log("ProductCard: ", productName);
  const loadProductDetails = () => {
    toast({title:"Working on it!", description: "This feature is under development", status: "info", duration: 3000, isClosable: true});
  };
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="lg"
      _hover={{ boxShadow: 'xl', transform: 'translateY(-4px)', transition: 'all 0.3s' }}
      onClick={() => loadProductDetails()}
    >
      <Image src={image} alt={name} minH={'sm'} cursor={'pointer'}/>

      <Box p="6">
        <Stack spacing="2">
          <Flex justifyContent={'space-between'} mb={2}>
            <Text fontWeight="bold" fontSize="xl" w={"50%"} lineHeight={'1'}>
              {productName} {`(${variety})`}
            </Text>
            <Flex gap={2}>
              <Tag colorScheme='blue' fontWeight={'bold'} h={'fit-content'}>{category}</Tag>
              <Tag display={organic ? 'flex' : 'none'} colorScheme='green' fontWeight={'bold'} h={'fit-content'}>ORGANIC</Tag>
            </Flex>
          </Flex>
          <Flex justifyContent={'space-between'}>
            <Flex direction={'column'}>
              <Text fontSize="md" color="gray.500">
                <strong>Grade</strong>: {grade}
              </Text>
              <Text fontSize="md" color="gray.500">
                Quantity Available: {quantityAvailable}
              </Text>
            </Flex>
            <Flex direction={'column'}>
              <Text fontSize="xl" fontWeight="bold" textAlign={'right'}>
                ₹{price}
              </Text>
              <Text fontSize="sm" color="gray.500">
                per unit
              </Text>
            </Flex>
          </Flex>

          <Text fontSize="sm" color="gray.500">
            Location: {location}
          </Text>

          <Text fontSize="sm" color="gray.500">
            Harvest Date: {formattedDate}
          </Text>
          <Text fontSize="sm" color="gray.500">
            Shelf Life: {expectedShelfLife} days
          </Text>

          <Flex justifyContent={'space-between'} mt={5}>
            <Tag size={{base:'sm',md:'xl'}} p={2} colorScheme='green' borderRadius='full' w={'fit-content'}>
              <Avatar
                src='#'
                size='xs'
                name={`${createdByUser.firstName} ${createdByUser.lastName}`}
                ml={-1}
                mr={2}

              />
              <TagLabel>{`${createdByUser.firstName} ${createdByUser.lastName}`}</TagLabel>
            </Tag>
            <Flex mx={5} alignItems="center">
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < rating ? 'teal.500' : 'gray.300'}
                  />
                ))}
              <Text ml="2" fontSize="sm" color="gray.500">
                {rating} / 5
              </Text>
            </Flex>
          </Flex>
        </Stack>



        <Stack mt="5" direction="row" spacing="4" justifyContent={'space-between'}>
          <Button colorScheme="blue">View More</Button>
          <Button colorScheme="green">Save to list</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard;