import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './app/001_App.tsx';
import { ChakraProvider } from '@chakra-ui/react';

const document_root = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(document_root);


root.render(

    <ChakraProvider>
      <App />

    </ChakraProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
