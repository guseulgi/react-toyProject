import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MyHeader = styled.header`
  width: 100%;
  padding: 25px 10px;
  border-bottom: 1px solid #464646;
  box-shadow: 1px 1px 3px #aaa;
`;

const MyUlContainer = styled.ul`
  max-width: 1000px;
  margin: auto;
  display: flex;
  justify-content: space-around;
`;

const MyLi = styled.li`
  width: 100px;
  text-align: center;
`;

export default function Header() {
  return (
    <MyHeader>
      <MyUlContainer>
        <MyLi>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            Home
          </Link>
        </MyLi>
        <MyLi></MyLi>
        <MyLi>
          <Link to="/todo" style={{ textDecoration: 'none', color: 'black' }}>
            Todo
          </Link>
        </MyLi>
        <MyLi>
          <Link to="/board" style={{ textDecoration: 'none', color: 'black' }}>
            게시판
          </Link>
        </MyLi>
        <MyLi>
          <Link to="/users" style={{ textDecoration: 'none', color: 'black' }}>
            유저 리스트
          </Link>
        </MyLi>
        <MyLi>
          <MyUlContainer>
            <MyLi>
              <Link
                to="/login"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                Login
              </Link>
            </MyLi>
            <MyLi>
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                SignUp
              </Link>
            </MyLi>
          </MyUlContainer>
        </MyLi>
      </MyUlContainer>
    </MyHeader>
  );
}
