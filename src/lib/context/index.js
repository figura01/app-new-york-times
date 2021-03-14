import React, { useState } from 'react';



const links = [
  {name: "Top Stories", icon: "newspaper"}, 
  {name: "Most Popular", icon: "star"}
];

const TabsContext = React.createContext();
const { Provider, Consumer } = TabsContext;

const TabsContextProvider = ({ children }) => {
  const [state, setState] = useState({
    links: links,
    active: links[0],
  });
  const setActive = link => {
    setState({ ...state, active: link})
  }
  return <Provider value={{state, setActive}}>{children}</Provider>;
}

const TabsContextConsumer = ({ children }) => {
  return <Consumer>{children}</Consumer>
}

export  { TabsContextProvider, TabsContextConsumer };