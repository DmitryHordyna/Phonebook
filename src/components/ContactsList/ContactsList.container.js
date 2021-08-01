import { connect } from 'react-redux';
import { operationsContacts } from '../../redux/phonebook';

import { selectorsPhonebook } from '../../redux/phonebook';
import ContactsList from './ContactsList';

const mapStateToProps = state => ({
  contacts: selectorsPhonebook.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(operationsContacts.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
