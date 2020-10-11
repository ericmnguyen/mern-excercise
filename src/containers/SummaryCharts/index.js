import { connect } from 'react-redux';
import { SummaryCharts } from './SummaryCharts';
import './styles.scss';

const mapStateToProps = ({ homeReducer: { summary } }) => ({
  summary,
});

const mapDispatchToProps = (dispatch) => ({
  // getSummary: () => dispatch(getSummary()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SummaryCharts);
