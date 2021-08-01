//module
import { connect } from 'react-redux';
//component
import Stats from './Stats.jsx';
import { selectorsPhonebook } from '../../redux/phonebook';

const mapStateToProps = state => ({
  total: selectorsPhonebook.getTotalContactsCount(state),
});

export default connect(mapStateToProps)(Stats);
