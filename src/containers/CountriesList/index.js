import { connect } from 'react-redux';
import { CountriesList } from './CountriesList';
import './styles.scss';

const mapStateToProps = ({ homeReducer: { summary } }) => ({
  summary,
});

const mapDispatchToProps = (dispatch) => ({
  // getSummary: () => dispatch(getSummary()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountriesList);
