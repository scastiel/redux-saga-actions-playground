import { connect } from 'react-redux'
import { increment } from '../services/counter/actions'
import Counter from '../components/Counter'

function mapStateToProps({ counter }) {
  return { counter }
}

export default connect(mapStateToProps, { increment })(Counter)
