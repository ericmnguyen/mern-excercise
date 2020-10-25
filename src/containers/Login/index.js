import { connect } from 'react-redux';
import { Login } from './Login';
import { withFormik } from 'formik';
import { setUsername, getUserInfo, clearUser } from '../../actions/userAction';
import './styles.scss';

const mapStateToProps = ({
  userReducer: { isVerify, loadingLogin, userInfo, isLoading },
}) => ({
  isVerify,
  loadingLogin,
  userInfo,
  isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setUsername: (username) => dispatch(setUsername(username)),
  getUserInfo: (userInfo) => dispatch(getUserInfo(userInfo)),
  cleanUp: () => dispatch(clearUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
