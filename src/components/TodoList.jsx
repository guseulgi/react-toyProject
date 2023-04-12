import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove, done } from '../store/modules/todo';
import styled from 'styled-components';

const MyH4 = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 25px;
  text-align: center;
`;

const MyContainer = styled.div`
  width: 300px;

  border: 1px solid #777;
  border-radius: 9px;
  padding: 25px;
`;

const MyLi = styled.li`
  background-color: #e7f3fe;
  padding: 0 8px;
  height: 32px;
  display: flex;
  position: relative;
  margin-bottom: 10px;

  box-shadow: 1px 1px 1px #aaa;
`;

const MyContent = styled.p`
  line-height: 32px;
`;

const MyDeleteButton = styled.button`
  position: absolute;
  width: 50px;
  height: 25px;

  right: 5px;
  top: 50%;
  transform: translateY(-50%);

  background-color: #7ea9d2;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  font-weight: 700;
`;

const MyDoneButton = styled.button`
  position: absolute;
  width: 50px;
  height: 25px;

  right: 60px;
  top: 50%;
  transform: translateY(-50%);

  background-color: #7ed28d;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  font-weight: 700;
`;

export default function TodoList() {
  const list = useSelector((state) => state.todo.todoList).filter(
    (e) => !e.done,
  );
  const dispatch = useDispatch();

  return (
    <MyContainer>
      <MyH4>🔨Todo</MyH4>
      {list.length === 0 ? (
        <div>할일을 입력해주세요 🥺</div>
      ) : (
        <ul>
          {list.map((e) => (
            <MyLi key={e.id}>
              <MyContent>{'📌 ' + e.text}</MyContent>
              <MyDeleteButton onClick={() => dispatch(remove(e.id))}>
                삭제
              </MyDeleteButton>
              <MyDoneButton onClick={() => dispatch(done(e.id))}>
                완료
              </MyDoneButton>
            </MyLi>
          ))}
        </ul>
      )}
    </MyContainer>
  );
}
