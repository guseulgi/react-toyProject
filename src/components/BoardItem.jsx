import React from 'react';

export default function BoardItem({ title, contents, createdTime }) {
  return (
    <li>
      <h5>제목 : {title}</h5>
      <p>내용 : {contents}</p>
      <span>작성일자 : {createdTime.toLocaleString('ko-KR')}</span>
      <button>📝</button>
      <button>❌</button>
    </li>
  );
}
