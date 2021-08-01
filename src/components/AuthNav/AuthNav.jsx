//module
import React from 'react'
import {NavLink} from 'react-router-dom'
//components
import routes from '../../routes';
//style
import style from './AuthNav.module.css'

const AuthNav = () => (
    <div>
<NavLink to={routes.register} exact className={style.link} activeClassName={style.activeLink}>Register</NavLink>
<NavLink to={routes.login} exact className={style.link} activeClassName={style.activeLink}>Login</NavLink>
    </div>
)
export default AuthNav
