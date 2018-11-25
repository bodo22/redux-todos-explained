import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

// this is a function component: https://reactjs.org/docs/components-and-props.html#function-and-class-components
// it uses the destructuring assigment to access the prop-objects content: http://mdn.io/destructuringassignment
const AddTodo = ({ dispatch }) => {
// alternative:
// const AddTodo = (props) => {
  // const dispatch = props.dispatch;
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        {/*
        here, we want the string that is typed into the actual html input node
        which is why we add the "ref" prop https://reactjs.org/docs/refs-and-the-dom.html
        it takes a function and calls this function with the html node. when we have that,
        we can access the string which it currently holds with "node.value"
        (or after the function is called: input.value, see the dispatch method)
        */}
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

// connecting the component to the store
// if the connect function gets no arguments, this component only has
// write-access to the store via the "dispatch" function
export default connect()(AddTodo)
