import { connect } from 'react-redux';
import { Home } from './Home';
import { cleanUp, getSummary } from '../../actions/homeAction';
import './styles.scss';

const mapStateToProps = ({ homeReducer: { summary, summaryError } }) => ({
  summary,
  summaryError,
});

const mapDispatchToProps = (dispatch) => ({
  getSummary: () => dispatch(getSummary()),
  cleanUp: () => dispatch(cleanUp()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
