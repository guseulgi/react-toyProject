import React from 'react';
import styled from 'styled-components';

const MyContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin: 100px 40px 0 40px;
`;
const MyTitle = styled.div`
  margin-top: 70px;
`;
const MyInputField = styled.div`
  width: 330px;
  height: 270px;
  border: 1px solid #b2b2b2;
  border-radius: 7px;
  position: relative;
  padding: 65px 25px;
  box-sizing: border-box;
`;

const MyH3 = styled.h3`
  font-size: 2rem;
  font-weight: 700;

  &:last-child {
    margin-top: 15px;
  }
`;

const MyId = styled.p`
  margin-bottom: 15px;
`;
const MyPw = styled.p`
  margin-bottom: 15px;
`;

const MyIdInput = styled.input`
  position: absolute;
  top: 55px;
  right: 25px;
  width: 170px;
  height: 24px;
  padding-left: 8px;
`;

const MyPwInput = styled.input`
  position: absolute;
  top: 101px;
  right: 25px;
  width: 170px;
  height: 24px;
  padding-left: 8px;
`;

const MyRemember = styled.div`
  position: relative;
  text-align: right;
`;

const MyCheckBox = styled.input`
  width: 15px;
  height: 15px;
  margin: 3px 82px 0 0;
`;

const MyCheckSpan = styled.span`
  position: absolute;
  display: block;
  right: 0;
  top: 6px;
  font-size: 0.7rem;
`;

const MyLoginButton = styled.button`
  display: block;
  width: 100%;
  height: 40px;
  margin: 15px auto;
  font-size: 1.1rem;
  font-weight: 700;
  box-shadow: 2px 2px 3px #777;
  cursor: pointer;
`;

export default function Login() {
  return (
    <MyContainer>
      <MyTitle>
        <MyH3>어서오세요!</MyH3>
        <MyH3>로그인 예제입니다.</MyH3>
      </MyTitle>
      <MyInputField>
        <MyId>아이디 </MyId>
        <MyIdInput type="text" placeholder="아이디" />
        <br />
        <MyPw>비밀번호</MyPw>
        <MyPwInput type="password" placeholder="비밀번호" />
        <MyRemember>
          <MyCheckBox type="checkbox" name="remeber" />
          <MyCheckSpan>아이디 기억하기</MyCheckSpan>
        </MyRemember>

        <MyLoginButton>로그인</MyLoginButton>
      </MyInputField>
    </MyContainer>
  );
}
