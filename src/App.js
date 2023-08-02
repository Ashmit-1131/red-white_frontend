
import './App.css';
import { Box,Heading, Spacer } from '@chakra-ui/react';
import Navbar from './Component/Navbar';


function App() {
  return (
    <div className="App">
     

      <Navbar/>
      <Box textAlign="center" background="gray" height="600" padding={4}>
        <Heading as="h1" size="xl">
         Welcome to the <span style={{ color: 'red' }}>Red</span> and <span style={{ color: 'white' }}>white</span>
         <Spacer/> 
          Multimedia blogging app
        </Heading>
      </Box>
    </div>
  );
}

export default App;
