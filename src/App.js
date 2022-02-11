import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './components/logo';
import NavBar from './components/navbar';
import Hero from './components/hero'
import Footer from './components/footer'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <NavBar/>
        <Hero/>
        <Footer/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
