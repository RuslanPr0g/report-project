import React from 'react';
import { useState } from 'react';

function HeaderNav(){


    const screenWidth = window.screen.width;
    let [setOpen, open] = useState('close');

    if (screenWidth > 768){
        setOpen = 'open';
    }

    return (
    <nav className="headerNav divFlex">
        <li className="logo h3"><a>Statsnet X</a></li>
        <ul className={setOpen}>
            <li className="h3"><a className="rightSide" href="#">Мои отчеты</a></li>
            <li className="h3"><a className="rightSide" href="#">Баланс</a></li>
            <li className="h3"><a className="rightSide" href="#">Выйти</a></li>
        </ul>
        <div className="burger-menu" onClick={() => open(setOpen === 'open' ? 'close' : 'open')}>
            <div className="burger-menu__line"/>
            <div className="burger-menu__line"/>
            <div className="burger-menu__line"/>
        </div>
    </nav>
    );
};

export default HeaderNav;