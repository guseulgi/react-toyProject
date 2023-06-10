import React from 'react';
import styled from 'styled-components';

const MyLoading = styled.div`
  width: 500px;
  height: 150px;
  margin: 100px auto;
  line-height: 100px;
  text-align: center;
  font-size: 70px;
  font-weight: 600;
`;

export default function Loading() {
  return <MyLoading>Loading... 🏃‍♂️</MyLoading>;
}
