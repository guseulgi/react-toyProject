import React from 'react';
import { useSelector } from 'react-redux';
import BoardItem from './BoardItem';

export default function BoardList() {
  const boardList = useSelector((state) => state.board.boardList);

  return (
    <ul>
      {boardList.map((e) => (
        <BoardItem key={e.id} {...e} />
      ))}
    </ul>
  );
}
