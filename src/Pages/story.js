import React from 'react';
import { Heading, Text, Container, Center, Link } from '@chakra-ui/react';
import { Redirect } from "react-router-dom"

export default function Story(props) {
  if ( !isNaN(props.id) ) {
    return (
      <Container>
        <Center>
          <Heading as="h1">THE RIFT</Heading>
        </Center>
        <Text as="p">ID: {props.id}</Text>
      </Container>
    );
  } else {
    return (
      <Container>
        <Center>
          <Heading as="h1">THE RIFT</Heading>
        </Center>
        <Text as="i">This ID is incorrect!</Text><br />
        <Link href="../" color="teal.500">Homepage</Link>
      </Container>
    );
  }
}
