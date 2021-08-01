//module
import React, { Component } from 'react';
import { connect } from 'react-redux';
//component
import authOperation from '../../redux/auth/auth-operation';
//style
import style from './LoginView.module.css'

class LoginView extends Component {
    state = {
        email: '',
        password: ''
    }
    
    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]:value})
    }
    handleSubmit = (e) => {
        e.preventDefault()

        this.props.onLogin(this.state)

        this.setState({ email: '', password: '' })
    }

    render() {
        const { email, password } = this.state
              const { handleChange,handleSubmit } = this;
        const { form, label } = style;
        
        return (
            <div className={style.container}>
                <h1 className={style.title}>Login Page</h1>
                <form
                    className={form}
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    
                >
                    <label className={label}
                    >Email
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="☞ DevidCoperfild@mail.ru"
                        /></label>
                    <label className={label}>
                        Password
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                           placeholder="☞ *******"
                        /></label>
                    
                    <button
                        type='submit'
                        className={style.button}
                    
                    >Enter</button>
                </form>
                <ul className={style.list}>
                      <li className={style.item}><span className={style.span}>P.S.</span> If you forgot your password or email, register again, <span className={style.span}>please</span> .</li>
                  
                    </ul>
      </div>
        )
}

}

const mapDispatchToProps = {
   onLogin:authOperation.logIn 
}


export default connect(null,mapDispatchToProps)(LoginView)