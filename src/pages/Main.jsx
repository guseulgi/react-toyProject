import React, { useState } from 'react';
import styled from 'styled-components';

const MyContainer = styled.div`
  position: relative;
  background-color: #f2f2f2;
`;

const MyBackground = styled.img`
  width: 100vw;
  height: 100vh;
  opacity: 0.85;
`;

const MyH2 = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  max-width: 340px;
  line-height: 3.5rem;
  text-align: right;

  position: absolute;
  top: 40px;
  right: 30px;
`;

const MyStrong = styled.span`
  font-size: 3rem;
`;

const MyTimeSection = styled.p`
  position: absolute;
  right: 40px;
  top: 170px;
`;

export default function Main() {
  const [time, setTime] = useState(new Date());
  setTimeout(() => {
    const now = new Date();
    setTime(now);
  }, 1000);

  return (
    <MyContainer>
      <MyBackground src="/images/back2.jpg" />
      <MyH2>
        <MyStrong>리</MyStrong>액트와 <MyStrong>리</MyStrong>덕스를 연습하기
        위해 만든 예제들
      </MyH2>
      <MyTimeSection>
        Now ⏰ {time.getHours()}시 {time.getMinutes()}분 {time.getSeconds()}초
      </MyTimeSection>
    </MyContainer>
  );
}
