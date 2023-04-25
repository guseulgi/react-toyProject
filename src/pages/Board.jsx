import React from 'react';
import styled from 'styled-components';
import BoardList from '../components/BoardList';

const MyContainer = styled.div`
  position: relative;
`;

const MyH3 = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin: 40px 0 20px 0;
`;

const MyContent = styled.div`
  width: 85vw;
  height: 100vh;
  background-color: #dee4ec;
  margin: 0 auto 50px auto;
`;

const MyWriteButton = styled.button`
  width: 80px;
  height: 40px;

  font-weight: 700;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  background-color: #6c96cb;
  border-radius: 6px;
  position: absolute;
  right: 7vw;
  top: 0;
`;

export default function Board() {
  return (
    <MyContainer>
      <MyH3>📄 게시판</MyH3>
      <MyWriteButton>글쓰기</MyWriteButton>
      <MyContent>
        <BoardList />
      </MyContent>
    </MyContainer>
  );
}
