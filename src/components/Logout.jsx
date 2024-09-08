import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { useUser } from '../contexts/UserContext';
import userService from '../services/userService';

export default function Logout() {
    const { saveUser } = useUser();
    const navigate = useNavigate();
    const toast = useToast();

    useEffect(() => {
        try{
            saveUser(null);
            toast({
                title: 'Logout successful.',
                description: 'You have been logged out successfully.',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            navigate('/login');
        }catch(error){
            toast({
                title: 'Logout failed.',
                description: 'An error occurred while logging out. Please try again.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            console.error('Logout failed', error);
        };
    }, [saveUser, navigate, toast]);

    return null;
}