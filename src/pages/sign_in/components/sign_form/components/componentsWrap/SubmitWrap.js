import { connect } from 'react-redux';
import { Submit } from '../Submit.jsx';
import mapStateToProps from '../../store/mapStateToProps.js';
import mapDispatchToProps from '../../store/mapDispatchToProps.js';

export const SubmitWrap = connect(mapStateToProps("Submit"), mapDispatchToProps("Submit"))(Submit);