import { connect } from 'react-redux';
import { Home } from './Home';
import { getSummary } from '../../actions/homeAction';
import './styles.scss';

const mapStateToProps = ({ homeReducer: { summary } }) => ({
  summary,
});

const mapDispatchToProps = (dispatch) => ({
  getSummary: () => dispatch(getSummary()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
