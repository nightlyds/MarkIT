import { connect } from 'react-redux';
import { Password } from '../Password.jsx';
import mapStateToProps from '../../store/mapStateToProps.js';
import mapDispatchToProps from '../../store/mapDispatchToProps.js';

export const PasswordWrap = connect(mapStateToProps("Password"), mapDispatchToProps("Password"))(Password);