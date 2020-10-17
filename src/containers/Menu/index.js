import { connect } from 'react-redux';
import { Menu } from './Menu';
import { setUsername, getUserInfo } from '../../actions/userAction';
import './styles.scss';

const mapStateToProps = ({
  userReducer: { isVerify, loadingLogin, userInfo },
}) => ({
  isVerify,
  loadingLogin,
  userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  setUsername: (username) => dispatch(setUsername(username)),
  getUserInfo: (userInfo) => dispatch(getUserInfo(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
