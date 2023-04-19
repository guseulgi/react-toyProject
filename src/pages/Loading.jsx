import React from 'react';
import styled from 'styled-components';

const MyLoading = styled.div`
  width: 300px;
  height: 100px;
  margin: auto;
  line-height: 100px;
  text-align: center;
`;

export default function Loading() {
  return <MyLoading>Loading... 🏃‍♂️</MyLoading>;
}
