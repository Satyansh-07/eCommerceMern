import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react';

// const { Button } = chakraTheme.components

// const theme = extendBaseTheme({
//   components: {
//     Button,
//   },
// })

function App() {
  return (

    <ChakraBaseProvider>
      <Router>
        <Routes />
      </Router>
    </ChakraBaseProvider>
  );
}

export default App;
