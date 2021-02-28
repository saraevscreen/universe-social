import React from 'react'
import s from './Header.module.css'

const Header = () =>{
    return (
        <div className={s.header}>
            <div><img src='https://i.ibb.co/tbVp4Yp/logo0002.png' alt='Universe logo'/></div>
            <div>NIVERSE.social</div>
        </div>
    )
}

export default Header;