import React from 'react'
import { Avatar, Heading, VStack } from '@chakra-ui/react';
import FullScreenSection from '../components/FullScreenSection';
import '../App.css'
import image from '../images/avatar.jpg'
import Resume from './resume';

const LandingSection = () => {
  return (
    <FullScreenSection 
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="orange"

    >
      <VStack spacing={4}>
        <Avatar size="4x4" src={image} width={20} height={20}/>
        <Heading as="h1" size="xl" color="white">
          Hello, I am Hamilpur Rohit!
        </Heading>
        <h2>A front End Developer Specialized in React</h2>

        <button className='button' ><Resume/></button>
        
      </VStack>
    </FullScreenSection>
  )
}

export default LandingSection;
