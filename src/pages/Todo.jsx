import React from 'react';
import ListContainer from '../components/ListContainer';
import styled from 'styled-components';

const MyToday = styled.p`
  padding: 20px 45px 0;
  text-align: right;
`;

export default function Todo() {
  const today = new Date();
  const currentDate = () => {
    const dateObj = {
      0: '일',
      1: '월',
      2: '화',
      3: '수',
      4: '목',
      5: '금',
      6: '토',
    };
    const cur = today.getDay();
    return dateObj[cur];
  };

  return (
    <>
      <MyToday>
        🗓️ Today {today.getMonth() + 1}월 {today.getDate()}일 ({currentDate()})
      </MyToday>
      <ListContainer />
    </>
  );
}
