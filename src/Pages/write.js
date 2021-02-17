import React, {useState} from 'react';
import { Heading, Text, Container, Center, Link, Textarea } from '@chakra-ui/react';
import { useQuill } from "react-quilljs";
import { Redirect } from "react-router-dom" 
import 'quill/dist/quill.snow.css';

export default function Write(props) {
  const { quill, quillRef } = useQuill();
  return (
    <Container>
      <Center>
        <Heading as="h1">THE RIFT</Heading>
      </Center>
      <Text as="p">Chapter: {props.old}</Text>
      <Text as="p">New Chapter: {props.newch}</Text>
      <div ref={quillRef} />
      {quill && console.log(quill.getText())}
      {/* paste html, regex out <script> */}
    </Container>
  );
}