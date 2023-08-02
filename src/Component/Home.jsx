import React from 'react'
import { Box,Heading, Spacer } from '@chakra-ui/react';
const Home = () => {
  return (
    <div>
        <Box textAlign="center" background="gray" height="600" padding={4}>
        <Heading as="h1" size="xl">
         Welcome to the <span style={{ color: 'red' }}>Red</span> and <span style={{ color: 'white' }}>white</span>
         <Spacer/> 
          Multimedia blogging app
        </Heading>
      </Box>
    </div>
  )
}

export default Home