//module
import React, { Component } from 'react';
import {connect} from 'react-redux'
//component
import {authOperations} from '../../redux/auth'
//style
import style from './RegisterView.module.css'

class RegisterView extends Component{
    state={
        name: '',
        email: '',
        password:'',
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({[name]:value})
        
    }
    handleSubmit = e => {
        e.preventDefault()

        this.props.onRegister(this.state)

        this.setState({ name: '',
        email: '',
        password:'',})

    }


    render() {
        const { name, email, password } = this.state;
        // const { handleChange,handleSubmit } = this; 
        const { form, label } = style;

        return (
            <div className={style.container}>
                <h1 className={style.title}>Registration Page</h1>
                <form
                    className={form}
                    autoComplete="off"
                    onSubmit={this.handleSubmit}
                    
                >
                    <label className={label}>
                        Name and Surname
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                            placeholder="☞ Martin Iden"
                        /></label>
                    <label className={label}
                    >Email
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            placeholder="☞ grafMonteCristo@mail.ru"
                        /></label>
                    <label className={label}>
                        Password
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            placeholder="☞ *******"
                        /></label>
                    
                    <button
                        type='submit'
                        className={style.button}
                    
                    >Register</button>
                </form>
                <ul className={style.list}>
                   <li className={style.item}><span className={style.span}>Attention!</span> Password must include one or more big letter and numbers.</li>
                    <li className={style.item}><span className={style.span}>Attention!</span> Password must have be length 7 or more letters.</li>
               
                </ul>
      </div>
    )
}

}



const mapDispatchToProps = {
    onRegister: authOperations.register,
    // onSubmit:(data)=>dispatch(authOperations.register(data))
}



export default connect(null,mapDispatchToProps)(RegisterView)
