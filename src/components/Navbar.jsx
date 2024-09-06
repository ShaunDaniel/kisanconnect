import { Box, Flex, Text, Image, IconButton, Button, Stack, Collapse, Icon, Popover, Menu, MenuButton, MenuItem, MenuList, PopoverTrigger, PopoverContent, useColorModeValue, useDisclosure, useColorMode } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, ChevronRightIcon, } from '@chakra-ui/icons'

import { useNavigate } from 'react-router';

import i18n from '../i18n';
import { useTranslation } from 'react-i18next'



export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()
    const { t } = useTranslation()
    const navigate = useNavigate();
    const light_logo = '/kc_lightbg.png';
    const dark_logo = '/kc_darkbg.png';

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };


    return (
        <Box minH={"20vh"}>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}

                py={{ base: 1 }}
                px={{ base: 10 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.800')}
                align={'center'}>

                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />

                </Flex>

                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} >

                    <Flex gap={2} alignItems={'center'}>
                        <Button display={{ base: 'none', md: 'block' }} onClick={toggleColorMode} w={'fit-content'} colorScheme='green'>
                            {colorMode === 'light' ? '🌙' : '☀'}
                        </Button>
                        <Menu>
                            <MenuButton as={Button} display={{ base: 'none', md: 'block' }} colorScheme='green' color={'white'} px={4}>
                                {i18n.language === 'en' ? 'A' : 'अ'}
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
                                <MenuItem onClick={() => changeLanguage('hi')}>हिन्दी</MenuItem>
                                <MenuItem onClick={() => changeLanguage('ml')}>മലയാളം</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                    <Image src={colorMode == 'light' ? light_logo : dark_logo} objectFit={'contain'} cursor={'pointer'} alt='kisanconnect logo' h={'10rem'} onClick={() => { navigate('/') }}></Image>

                    <Flex display={{ base: 'none', md: 'flex' }} alignItems={'center'} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={8}

                >
                    <Button
                        as={'a'}
                        fontSize={'sm'}
                        px={5}
                        py={3}
                        fontWeight={400}
                        variant={'link'}
                        cursor={'pointer'}
                        _hover={{ textDecoration: "none", backgroundColor: useColorModeValue('green.200', 'green.700') }}
                        onClick={() => { navigate('/login') }}
                    >
                        {t('signIn')}
                    </Button>
                    <Button
                        as={'a'}
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        cursor={'pointer'}
                        bg={useColorModeValue('green.400', 'green.600')}
                        _hover={{ bg: useColorModeValue('green.300', 'green.500') }}
                        onClick={() => { navigate('/signup') }}
                    >
                        {t('signUp')}
                    </Button>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    )
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200')
    const linkHoverColor = useColorModeValue('gray.800', 'white')
    const popoverContentBgColor = useColorModeValue('white', 'gray.800')
    const navItems = NAV_ITEMS();

    return (
        <Stack direction={'row'} spacing={4}>
            {navItems.map((navItem, key) => (
                <Box key={key}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Box
                                as="a"
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem}
                            </Box>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}

        </Stack>
    )
}



const MobileNav = () => {
    const navItems = NAV_ITEMS();
    const { colorMode, toggleColorMode } = useColorMode()
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
            {navItems.map((navItem, key) => (
                <MobileNavItem key={key} label={navItem} />
            ))}
            <Flex mb={2}>
                <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')} mr={2} alignContent={'center'}>
                    Dark Mode:
                </Text>
                <Button onClick={toggleColorMode} w={'fit-content'}>
                    {colorMode === 'light' ? '🌙' : '☀'}
                </Button>
            </Flex>
            <Flex>
            <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')} mr={2} alignContent={'center'}>
                    Language:
                </Text>
                <Menu>
                    <MenuButton as={Button} color={'white'} px={4}>
                        {i18n.language === 'en' ? 'A' : 'अ'}
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
                        <MenuItem onClick={() => changeLanguage('hi')}>हिन्दी</MenuItem>
                        <MenuItem onClick={() => changeLanguage('ml')}>മലയാളം</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Stack>
    )
}

const MobileNavItem = ({ label, href }) => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Stack spacing={4} onClick={onToggle}>
            <Box
                py={2}
                as="a"
                href={href ?? '#'}
                justifyContent="space-between"
                alignItems="center"
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
            </Box>


        </Stack>
    )
}

const NAV_ITEMS = () => {
    const { t } = useTranslation();
    return [
        t('marketplace'),
        t('categories'),
        t('myListing')
    ];
};