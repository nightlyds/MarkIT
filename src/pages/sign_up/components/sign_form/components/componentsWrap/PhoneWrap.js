import { connect } from 'react-redux';
import { Phone } from '../Phone.jsx'
import mapStateToProps from '../../store/mapStateToProps.js';
import mapDispatchToProps from '../../store/mapDispatchToProps.js';

export const PhoneWrap = connect(mapStateToProps("Phone"), mapDispatchToProps("Phone"))(Phone);