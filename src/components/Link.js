import React from 'react'
import PropTypes from 'prop-types'

// task: console log children here
// hint: arrow function syntactic sugar
const Link = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px',
    }}
  >
    {/*
      the "children" prop is a reserved prop name
      which contains the children (the stuff between the jsx-tags) defined in the parent component.
      in this case, the children is the string of the button text
    */}
    {children}
  </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
