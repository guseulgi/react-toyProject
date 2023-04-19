import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loading from './Loading';

const MyLi = styled.li`
  margin: 20px 45px;
`;

const MyContainer = styled.div`
  max-width: 700px;
  margin: auto;
`;

const MyH3 = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin: 40px 0 30px 15px;
`;

export default function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setUsers(null);
        setLoading(true);
        const resData = await axios.get(
          'https://jsonplaceholder.typicode.com/users',
        );

        setUsers(resData.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <Loading />;
  if (error) return <div>에러 발생</div>;
  if (!users) return <div>유저가 없습니다.</div>;

  return (
    <MyContainer>
      <MyH3>👤 API 를 사용한 유저 리스트</MyH3>
      <ul>
        {users.map((user, idx) => {
          return (
            <MyLi key={user.id}>
              {'(' + (idx + 1) + ')  '} {user.username} ({user.name})
            </MyLi>
          );
        })}
      </ul>
    </MyContainer>
  );
}
