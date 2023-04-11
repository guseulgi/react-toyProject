const initState = {
  boardList: [
    {
      id: 0,
      title: '첫글',
      contents: '내용1',
      createdTime: new Date(),
    },
    {
      id: 1,
      title: '222글',
      contents: '내용2',
      createdTime: new Date(),
    },
  ],
};

let count = initState.boardList.length;
initState['nextId'] = count;

const CREATE = 'board/CREATE';
const MODIFY = 'board/MODIFY';
const REMOVE = 'board/REMOVE';

export function create(boardInfo) {
  return {
    type: CREATE,
    payload: boardInfo,
  };
}
export function modify(boardInfo) {
  return { type: MODIFY, payload: boardInfo };
}
export function remove(id) {
  return { type: REMOVE, id };
}

export default function board(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        boardList: [
          {
            id: action.payload.id,
            title: action.payload.title,
            contents: action.payload.contents,
          },
          ...state,
        ],
        nextId: action.payload.id + 1,
      };
    case MODIFY:
      return {
        ...state,
        boardList: state.boardList.map((e) => {
          if (e.id === action.payload.id) {
            return {
              ...e,
              title: action.payload.title,
              contents: action.payload.contents,
            };
          } else {
            return e;
          }
        }),
      };
    case REMOVE:
      return {
        boardList: state.boardList.filter((e) => e.id !== action.id),
      };
    default:
      return state;
  }
}
