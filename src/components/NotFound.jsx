import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const NotFound = () => {
    return (
        <Box textAlign="center" mt={20} h={'50vh'}>
            <Heading as="h1" size="2xl" mb={4}>
                404 - Page Not Found
            </Heading>
            <Text fontSize="xl">Oops! The page you are looking for does not exist.</Text>
        </Box>
    );
};

export default NotFound;