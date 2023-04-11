const initState = {
  todoList: [],
};

let count = initState.todoList.length;
initState['nextId'] = count;

const ADD = 'todo/ADD';
const REMOVE = 'todo/REMOVE';
const DONE = 'todo/DONE';

export function add(todo) {
  return {
    type: ADD,
    payload: todo,
  };
}

export function remove(id) {
  return {
    type: REMOVE,
    id,
  };
}

export function done(id) {
  return {
    type: DONE,
    id,
  };
}

export default function todo(state = initState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: action.payload.id,
            text: action.payload.text,
            done: false,
          },
        ],
        nextId: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        todoList: state.todoList.map((e) => {
          if (action.id === e.id) {
            return {
              ...e,
              done: true,
            };
          } else {
            return e;
          }
        }),
      };
    case REMOVE:
      return {
        ...state,
        todoList: state.todoList.filter((e) => {
          if (action.id !== e.id) return { ...e };
        }),
      };
    default:
      return state;
  }
}
