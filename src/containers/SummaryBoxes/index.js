import { connect } from 'react-redux';
import { SummaryBoxes } from './SummaryBoxes';
import { getSummary } from '../../actions/homeAction';
import './styles.scss';

const mapStateToProps = ({ homeReducer: { summary } }) => ({
  summary,
});

const mapDispatchToProps = (dispatch) => ({
  getSummary: () => dispatch(getSummary()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SummaryBoxes);
