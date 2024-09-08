import React from 'react';
import { Box, Flex, Text, Link, Stack, useColorModeValue } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('green.100', 'green.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      py={4}
    >
      <Flex
        align={'center'}
        justify={'space-between'}
        direction={{ base: 'column', md: 'row' }}
        maxW={'6xl'}
        mx={'auto'}
        px={4}
      >
        <Text>© {new Date().getFullYear()} KisanConnect.</Text>
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'}>Home</Link>
          <Link href={'#'}>Contact</Link>
        </Stack>
      </Flex>
    </Box>
  );
}