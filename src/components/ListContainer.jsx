import React from 'react';
import DoneList from './DoneList';
import TodoList from './TodoList';
import styled from 'styled-components';
import TodoInput from './TodoInput';

const MyListContainer = styled.div`
  max-width: 1100px;
  margin: auto;
`;

const MyContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

export default function ListContainer() {
  return (
    <MyListContainer>
      <TodoInput />
      <MyContainer>
        <TodoList />
        <DoneList />
      </MyContainer>
    </MyListContainer>
  );
}
