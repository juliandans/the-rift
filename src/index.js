import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ColorModeScript } from '@chakra-ui/react';

ReactDOM.render(
    (<>
      <ColorModeScript />
      <App />
    </>),
  document.getElementById('root')
);

