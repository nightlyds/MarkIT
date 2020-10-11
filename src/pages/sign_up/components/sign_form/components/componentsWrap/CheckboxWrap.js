import { connect } from 'react-redux';
import { Checkbox } from '../Checkbox.jsx'
import mapStateToProps from '../../store/mapStateToProps.js';
import mapDispatchToProps from '../../store/mapDispatchToProps.js';

export const CheckboxWrap = connect(mapStateToProps("Checkbox"), mapDispatchToProps("Checkbox"))(Checkbox);