import React from 'react';
import { Box, Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import categoriesData from './data/categoriesData.json';

const Categories = () => {
    const navigate = useNavigate();
  return (
    <Box p={5} h={'70vh'}>
      <Heading as="h1" mb={5}>Categories</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
        {Object.keys(categoriesData.categories).map((category, index) => (
          <Box
            key={index}
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
            bg={useColorModeValue('green.100', 'gray.700')}
            _hover={{ boxShadow: 'lg', transform: 'translateY(-4px)', transition: 'all 0.3s' }}
            cursor={'pointer'}
            onClick={() => navigate(`/products?category=${categoriesData.categories[category].code}`)}
          >
            <Heading as="h2" size="md">
            {categoriesData.categories[category].emoji} {category}
            </Heading>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Categories;