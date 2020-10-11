import { connect } from 'react-redux';
import { SummaryCharts } from './SummaryCharts';
import {
  getDailyCountry,
  getDailyTotals,
} from '../../actions/summaryChartsAction';
import './styles.scss';

const mapStateToProps = ({ homeReducer: { summary } }) => ({
  summary,
});

const mapDispatchToProps = (dispatch) => ({
  getDailyTotals: (params) => dispatch(getDailyTotals(params)),
  getDailyCountry: (params) => dispatch(getDailyCountry(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SummaryCharts);
