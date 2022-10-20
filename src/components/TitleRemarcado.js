import React from 'react'
import { Text } from '@chakra-ui/react'
import styled from 'styled-components';

const Span = styled.span`
    background: rgb(255,236,74);
    background: linear-gradient(90deg, #F6AD55 0%, rgba(255,168,11,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
const TitleRemarcado = (props) => {
  return (
    <Text fontSize={["40px","40px","60px"]} >
    <Span id="span-title">{props.contenido}</Span>
  </Text>
  )
}

export default TitleRemarcado