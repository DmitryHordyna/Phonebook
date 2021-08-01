//module
import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import { authSelectors } from '../../redux/auth'
//components
import routes from '../../routes';
//style
import style from './Navigation.module.css'

const Navigation = ({isAuthenticated}) => (
    <nav>
        <NavLink to={routes.home} exact className={style.link} activeClassName={style.activeLink}>Main</NavLink>
      { isAuthenticated && <NavLink to={routes.phonebooks} exact className={style.link} activeClassName={style.activeLink}>Phonebook</NavLink>}
    </nav>
)


const mapStateToProps = state=>({
    isAuthenticated: authSelectors.getIsAuthenticated(state)
})


export default connect(mapStateToProps)(Navigation)