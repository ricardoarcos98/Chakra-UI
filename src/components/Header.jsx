import React from 'react';
import { Box, Image, Text, Center } from '@chakra-ui/react';
import myImage from '../assets/myImage.png'

const Header = () => {
  return (
    <Box bg="teal.500" w="100%" p={4} color="white" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Center>
        <Image src={myImage}/>
      </Center>
      <Text fontSize="xl">Bienvenido a mi aplicación</Text>
    </Box>
  );
};

export default Header;