import { connect } from 'react-redux';
import { SummaryCharts } from './SummaryCharts';
import { getTotalCasesDaily } from '../../actions/homeAction';
import './styles.scss';

const mapStateToProps = ({
  homeReducer: { summary, dailyCasesInfo, dailyCuredInfo, dailyDeathInfo },
}) => ({
  summary,
  dailyCasesInfo,
  dailyCuredInfo,
  dailyDeathInfo,
});

const mapDispatchToProps = (dispatch) => ({
  getTotalCasesDaily: () => dispatch(getTotalCasesDaily()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SummaryCharts);
