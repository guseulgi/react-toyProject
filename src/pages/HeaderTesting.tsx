import React from 'react'

export default function HeaderTesting({
  isLogin,
  userID,
} : {
  isLogin: boolean,
  userID: string,
}) {
  return (
    <div>
      {isLogin ? (
        <h1>{userID} 님 환영합니다.</h1>
      ) : (
        <h1>
          로그인을 해주세요. <button>로그인</button>
        </h1>
      )}
    </div>
  );
}
