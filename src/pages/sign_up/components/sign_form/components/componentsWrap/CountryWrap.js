import { connect } from 'react-redux';
import { Country } from '../country/Country.jsx'
import mapStateToProps from '../../store/mapStateToProps.js';
import mapDispatchToProps from '../../store/mapDispatchToProps.js';

export const CountryWrap = connect(mapStateToProps("Country"), mapDispatchToProps("Country"))(Country);