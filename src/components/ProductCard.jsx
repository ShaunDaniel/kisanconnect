// src/components/ProductCard.jsx
import React from 'react';
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

const ProductCard = ({
  product: {
    image,
    name,
    category,
    grade,
    price,
    negotiable,
    quantity,
    location,
    organic,
    harvestDate,
    shelfLife,
    certifications,
    farmerName,
    rating,
  },
}) => {
  const toast = useToast();
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
              {name}
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
                Quantity Available: {quantity}
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
            Harvest Date: {harvestDate}
          </Text>
          <Text fontSize="sm" color="gray.500">
            Shelf Life: {shelfLife} days
          </Text>

          <Flex justifyContent={'space-between'} mt={5}>
            <Tag size={{base:'sm',md:'xl'}} p={2} colorScheme='green' borderRadius='full' w={'fit-content'}>
              <Avatar
                src='https://bit.ly/sage-adebayo'
                size='xs'
                name='Segun Adebayo'
                ml={-1}
                mr={2}

              />
              <TagLabel>{farmerName}</TagLabel>
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