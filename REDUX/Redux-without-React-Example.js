import { createStore } from "redux"

// Define Reducer that deals with adding and toggling todo items
function reducer(state, action) {
  switch (action.type) {
    case "TODO_ADD": {
      return applyAddTodo(state, action)
    }
    case "TODO_TOGGLE": {
      return applyToggleTodo(state, action)
    }
    default:
      return state
  }
}

function applyAddTodo(state, action) {
  return state.concat(action.todo)
}

function applyToggleTodo(state, action) {
  return state.map((todo) => (todo.id === action.todo.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo))
}

// Initialize the Redux store that uses the reducer and an initial state
const store = createStore(reducer, [])

// Dispatch first action on the store
store.dispatch({
  type: "TODO_ADD",
  todo: { id: "0", name: "learn redux", completed: false }
})

// Retrieve the state by getting it from the store
console.log(store.getState())

// But rather than outputting it manually, you can subscribe a callback function to the store
// to output the latest state after it has changed.Make sure to subscribe to the store before
// dispatching your actions in order to get the output.
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

///////////////// Add Notes To The Below /////////////////

function reducer(state, action) {
  switch (action.type) {
    case "TODO_ADD": {
      return applyAddTodo(state, action)
    }
    case "TODO_TOGGLE": {
      return applyToggleTodo(state, action)
    }
    default:
      return state
  }
}

function applyAddTodo(state, action) {
  return state.concat(action.todo)
}

function applyToggleTodo(state, action) {
  return state.map((todo) => (todo.id === action.todo.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo))
}

const store = Redux.createStore(reducer, [])

console.log("initial state:")
console.log(store.getState())

const unsubscribe = store.subscribe(() => {
  console.log("store update, current state:")
  console.log(store.getState())
})

store.dispatch({
  type: "TODO_ADD",
  todo: { id: "0", name: "learn redux", completed: false }
})

store.dispatch({
  type: "TODO_ADD",
  todo: { id: "1", name: "learn mobx", completed: false }
})

store.dispatch({
  type: "TODO_TOGGLE",
  todo: { id: "0" }
})

unsubscribe()
