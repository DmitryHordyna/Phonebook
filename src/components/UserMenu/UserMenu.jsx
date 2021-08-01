//module
import React from 'react';
import { connect } from 'react-redux';
//component
import { authSelectors,authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png'
//style
import style from './UserMenu.module.css'

const UserMenu = ({avatar,name,onLogout}) => (
    <div className={style.container}>
        <img className={style.avatar}  src={avatar} alt="avatar"  width="32" />
        <p className={style.name}>Welcome,<span className={style.nameUser}> {name} </span>!</p>
        <button type='button' onClick={onLogout} className={style.button}>Log Out</button>
    </div>
)

const mapStateToProps = state => ({
    name:authSelectors.getUsername(state),
    avatar:defaultAvatar
})

const mapDispatchToProps = {
    onLogout:authOperations.logOut
}



export default connect(mapStateToProps,mapDispatchToProps)(UserMenu)
