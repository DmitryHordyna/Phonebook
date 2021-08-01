import { connect } from 'react-redux';
//component
import * as actionPhonebook from '../../redux/phonebook/action_phonebook';
import Filter from './Filter';

const mapStateToProps = state => ({
  value: state.phonebook.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actionPhonebook.filterContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
