import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { TabsContextProvider } from './lib/context';
import { store } from './lib/state/store';

import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TabsContextProvider>
        <App />
      </TabsContextProvider>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

