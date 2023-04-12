import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { remove } from '../store/modules/todo';

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
  text-decoration: line-through;
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

export default function DoneList() {
  const doneList = useSelector((state) => state.todo.todoList).filter(
    (e) => e.done,
  );
  const dispatch = useDispatch();

  return (
    <MyContainer>
      <MyH4>✨Done</MyH4>
      {doneList.length === 0 ? (
        <div>모두 완료! 🎉</div>
      ) : (
        <ul>
          {doneList.map((e) => (
            <MyLi key={e.id}>
              <MyContent>{e.text}</MyContent>
              <MyDeleteButton onClick={() => dispatch(remove(e.id))}>
                삭제
              </MyDeleteButton>
            </MyLi>
          ))}
        </ul>
      )}
    </MyContainer>
  );
}
