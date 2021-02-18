import React, {useState, useEffect} from 'react';
import { Heading, Text, Container, Center, Link, Textarea } from '@chakra-ui/react';
import { useQuill } from "react-quilljs";
import { Redirect } from "react-router-dom" 
import 'quill/dist/quill.snow.css';

export default function Write(props) {
  const { quill, quillRef } = useQuill();
  const [ text, changetext ] = useState("");

  useEffect(()=>{
    if (quill) {
      quill.on('text-change', () => {
        changetext(quill.root.innerHTML);
      });
    }
  }, [quill]);

  return (
    <Container>
      <Center>
        <Heading as="h1">THE RIFT</Heading>
      </Center>
      <Text as="p">Chapter: {props.old}</Text>
      <Text as="p">New Chapter: {props.newch}</Text>
      <div ref={quillRef} />
      <div className="ql-snow">
        <div className="ql-editor" style={{whiteSpace: 'pre-wrap'}} dangerouslySetInnerHTML={{__html: quill && text}} />
      </div>
    </Container>
  );
}