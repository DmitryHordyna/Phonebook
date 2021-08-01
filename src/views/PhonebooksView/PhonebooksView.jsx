//module
import React, { Component } from 'react';
import { connect } from 'react-redux';
//component
import Container from '../../components/Container';
import Form from '../../components/Form';
import Stats from '../../components/Stats';
import Filter from '../../components/Filter';
import {operationsContacts} from '../../redux/phonebook';
import ContactsList from '../../components/ContactsList';

//style
import style from './PhonebooksView.module.css'


class PhonebooksView extends Component {
    componentDidMount() {
        this.props.featchContacts();
    }

    render() {
        return (
            <Container>
                <section className={style.Container}>
                    <h2 className={style.contactsTitle}>Phonebook</h2>
                    <Form />
                    <article className={style.contactsArticle}>
                        <h2 className={style.contactsTitle}>Contacts</h2>
                        <Stats />
                        <Filter />
                        {this.props.isLoading && <h1>Loading...</h1>}
                        <ContactsList />
                    </article>
                </section>
            </Container>
        )
    }

}
const mapDispatchToProps = dispatch => ({
  featchContacts: () => dispatch(operationsContacts.featchContacts()),
});

export default connect(null,mapDispatchToProps)(PhonebooksView)

