import React from 'react';
import { ChakraProvider, Flex, Spacer } from '@chakra-ui/react';
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom"
import Home from "./Pages/home"
import Fof from "./Pages/404"
import Story from "./Pages/story"
import Write from "./Pages/write"
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Login from "./Pages/login"



export default function App() {
  return (
    <ChakraProvider>
      <Flex justify="right">
        <Spacer />
        <ColorModeSwitcher /> {/* Dark Mode/Light Mode */}
      </Flex>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/story/:chapter">
            <ProcessedStory />
          </Route>
          <Route path="/write/:chapter/:newchapid">
            <ProcessedWrite />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <Fof />
          </Route>
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export function ProcessedStory() { // <Story /> page with built-in props using :chapter param
  const { chapter } = useParams();
  return <Story id={ chapter } />
}

export function ProcessedWrite() { // <Write /> page with built-in props using :chapter & :newchapid param
  const { chapter, newchapid } = useParams();
  return <Write old={ chapter } newch={ newchapid } />
}
