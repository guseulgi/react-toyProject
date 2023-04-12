import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/modules/todo';
import styled from 'styled-components';

const MyContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const MyTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 10px;
`;

const MyButton = styled.button`
  width: 70px;
  height: 30px;
  box-sizing: border-box;
  font-size: 1.1rem;
  border-radius: 6px;

  background-color: #ffdb29;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  font-weight: 700;
`;

const MyInput = styled.input`
  width: 240px;
  height: 30px;
  box-sizing: border-box;
  border: 1px solid #777;
  padding: 2px 6px;
  border-radius: 6px;
  margin-right: 4px;
  outline: none;
  &:focus {
    border-color: #ffdb29;
  }
`;

export default function TodoInput() {
  const nextId = useSelector((state) => state.todo.nextId);
  const dispatch = useDispatch();
  const inputValue = useRef();

  const addTodo = () => {
    dispatch(
      add({
        id: nextId,
        text: inputValue.current.value,
        done: false,
      }),
    );
    inputValue.current.value = '';
  };

  return (
    <MyContainer>
      <MyTitle>TodoList</MyTitle>
      <MyInput
        required
        type="text"
        ref={inputValue}
        placeholder="할일을 입력하세요."
      />
      <MyButton onClick={addTodo}>추가</MyButton>
    </MyContainer>
  );
}
