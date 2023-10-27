import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'; // Importa ChakraProvider
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header />
      </div>
    </ChakraProvider>
  );
}

export default App;