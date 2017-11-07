import { connect } from 'react-redux'
import { increment, incrementAsync } from '../services/counter/actions'
import Counter from '../components/Counter'

function mapStateToProps({ counter }) {
  return { counter }
}

export default connect(mapStateToProps, { increment, incrementAsync })(Counter)
