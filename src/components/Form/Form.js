//module
import { Component } from 'react';
import React from './Form';
import PropTypes from 'prop-types';
//component
import { connect } from 'react-redux';
import { operationsContacts } from '../../redux/phonebook';
//style
import './Form.scss';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onSubmit } = this.props;

    onSubmit(name, number);

    this.setState({ name, number });
  };

  handleNameChange = ({ currentTarget }) => {
    this.setState({ name: currentTarget.value });
  };

  handleNumberChange = ({ currentTarget }) => {
    this.setState({ number: currentTarget.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label className="label">
          Name and Surname
          <input
            className="input"
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleNameChange}
            placeholder="☞ Rebekka Lolita"
          />
        </label>
        <label className="label">
          Number
          <input
            className="input"
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleNumberChange}
            placeholder="+45 94 124 2434"
          />
        </label>
        <button className="button">Add contacts</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(operationsContacts.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(Form);

// handleChange = e => {
//   this.setState({
//     [e.currentTarget.name]: e.currentTarget.value,
//   });
// };
