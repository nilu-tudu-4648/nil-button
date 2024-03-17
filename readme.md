# react-native-nilbutton

Library for handling device information, keyboard events, and touch events in React Native.

## Installation

Install the package using npm:

```bash
npm install react-native-nilbutton
yarn add react-native-nilbutton

import { getDeviceInfo } from 'react-native-nilbutton';

const fetchDeviceInfo = async () => {
  try {
    const deviceInfo = await getDeviceInfo();
    console.log(deviceInfo);
  } catch (error) {
    console.error('Error retrieving device information:', error);
  }
};


import { captureKeyboardEvents } from 'react-native-nilbutton';

const keyboardEventListener = captureKeyboardEvents((eventName, event) => {
  console.log(`${eventName} event captured:`, event);
});

// To stop listening to keyboard events, call the returned cleanup function
// keyboardEventListener();


import { captureTouchEvents } from 'react-native-nilbutton';

const touchEventListener = captureTouchEvents((eventName, event) => {
  console.log(`${eventName} event captured:`, event);
});



This documentation provides installation instructions, usage examples, and a brief overview of the package's features. Make sure to include additional information or examples if your package has more functionality or configuration options. Additionally, adjust the documentation based on any updates or changes you make to your package in the future.


