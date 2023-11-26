import React from 'react'
import { Box,Flex } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box background-color= "rgb(131,58,180)"
    background= "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(252,176,69,1) 59%, rgba(29,99,253,1) 99%)">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={20}><p>Rohit • © 2023</p>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer