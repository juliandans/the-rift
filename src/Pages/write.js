import React, {useState} from 'react';
import { Heading, Text, Container, Center, Link, Textarea } from '@chakra-ui/react';
import { Redirect } from "react-router-dom"

export default function Write(props) {
  var [text, edittext] = useState();
  return (
    <Container>
      <Center>
        <Heading as="h1">THE RIFT</Heading>
      </Center>
      <Text as="p">Chapter: {props.old}</Text>
      <Text as="p">New Chapter: {props.newch}</Text>
      <Textarea onChange={msg => edittext(msg.target.value.replace(/\ /gm, '&nbsp;'))}>{text}</Textarea>
      <Text>{text}</Text>
    </Container>
  );
}