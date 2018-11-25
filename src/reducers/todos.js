
// initialState is the default function parameter: https://mdn.io/defaultparameters
const todos = (state = [], action) => {
  let newState;
  switch (action.type) {
    case 'ADD_TODO':
      // alternative method:
      newState = state.slice(0);
      newState.push({
        id: action.id,
        text: action.text,
        completed: false
      });
      return newState;
      // spread operator (usable for objects and arrays): https://mdn.io/spreadoperator
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      newState = state.map((todo) => {
        if (todo.id === action.id) {
          // shallow copy object: https://mdn.io/objectassign
          let newTodo = Object.assign({}, todo);
          newTodo.completed = !newTodo.completed;
          return newTodo;
        } else {
          return todo;
        }
      });
      return newState;
      // when there is only one function parameter, the surrounding parentheses can be left out
      // when the function isn't surrounded by curly brackets, return keyword is implicit 
      // see: https://mdn.io/arrowfunctions#Syntax
      // also, ternary operator, and spread operator, but for an object, not an array like above
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}

export default todos
