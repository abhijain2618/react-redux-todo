import { ADD_TODO, DELETE_TODO } from "../constants/action-type";

const initialState = {
  todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      let updatedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return { ...state, todos: updatedTodos };
    default:
      return state;
  }
};

export default todos;