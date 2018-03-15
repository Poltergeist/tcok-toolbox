import React, { Component } from "react";
import styled from "styled-components";
let counter = 0;

const Label = styled.label`
  font-size: 2.3rem;
  width: 20px;
`;

const Input = styled.input`
  width: calc(100% - 25px);
`;

export default function(props) {
  counter++;
  return (
    <div>
      <Input id={counter} type="range" {...props} />
      <Label htmlfor={counter}>{props.value}</Label>
    </div>
  );
}
