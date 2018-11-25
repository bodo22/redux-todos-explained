import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

// with mapStateToProps, the Link component gets a prop called "active"
// it compares the redux states current visiblityFilter with the
// prop called "filter" which comes from a place elsewhere than the props
// we are defining here
// (mostly ownProps are the props given by the parent component,
// in this case the parent component of FilterLink is Footer)
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})
// alternative method:
// const mapStateToProps = (state, ownProps) => {
//   return {
//     active: ownProps.filter === state.visibilityFilter
//   }
// }

// here similarly to mapStateToProps, the Link component gets a prop called "onClick"
// its value is a function, which dispatchs the action to set the states visibility filter
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

// the Link component is imported and connected to the redux store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
