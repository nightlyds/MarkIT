import { connect } from 'react-redux';
import { Email } from '../Email.jsx';
import mapStateToProps from '../../store/mapStateToProps.js';
import mapDispatchToProps from '../../store/mapDispatchToProps.js';

export const EmailWrap = connect(mapStateToProps("Email"), mapDispatchToProps("Email"))(Email);