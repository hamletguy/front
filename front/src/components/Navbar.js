import { ColorModeSwitcher } from '../ColorModeSwitcher';
import React from 'react';
import 'remixicon/fonts/remixicon.css';
import 'boxicons';
import { ChakraProvider, theme } from '@chakra-ui/react';
import map from '../map/map';
import '../styles/Navbar.css';
function Navbar() {
  return (
    <div id="header">
      <ul className="Navbar">
        <ChakraProvider theme={theme}>
          <ColorModeSwitcher justifySelf="flex-end" />
        </ChakraProvider>
        <li>Home</li>
        <li>Contact</li>
        <li>About us</li>
        <li>Doctors</li>
        <li>Profile</li>
      </ul>
    </div>
  );
}

export default Navbar;
