import { connect } from 'react-redux';
import { News } from './News';
import './styles.scss';

const mapStateToProps = ({}) => ({
  // summary,
});

const mapDispatchToProps = (dispatch) => ({
  // getSummary: () => dispatch(getSummary()),
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
