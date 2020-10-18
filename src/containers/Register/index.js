import { connect } from 'react-redux';
import { Register } from './Register';
import { userRegister, clearUser } from '../../actions/userAction';
import './styles.scss';

const mapStateToProps = ({
  userReducer: { registerSuccess, registerMessage },
}) => ({
  registerSuccess,
  registerMessage,
});

const mapDispatchToProps = (dispatch) => ({
  userRegister: (params) => dispatch(userRegister(params)),
  cleanUp: () => dispatch(clearUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
