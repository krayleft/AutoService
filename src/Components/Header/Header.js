import React from 'react';
import LogoTeam from './LogoTeam';
// import Logo from "../../Img/Logo.png"
import Logo from '../../Img/motor.jpg'

const Header = () => {
    return (
    <div id='HeaderNonContainer'>
        <div className="container menubar">
        <div className="menu_section">
            <a href="/">
            <div className="menu_item logo">
                <LogoTeam image={Logo} />
            </div>
            </a>
          <div className="menu_item menubutton">
          <a href="#intro">О нас</a>
          </div>
          <div className="menu_item menubutton">
          <a href="#NashiUslugiText">Услуги</a>
          </div>
          <div className="menu_item menubutton">
          <a href="#introAkcsii">Акции</a>
          </div>
          <div className="menu_item menubutton">
          <a href="#footer">Контакты</a>
          </div>
          <div className="menu_item menubutton">
          <a href="#otzivi">Отзывы</a>
          </div>
          <div className="menu_item">
            г. Ростов-на-Дону
            <br/> ул. Плеханова 187
            <br/> Тел. 8 (989) 726-33-73
          </div>     
        </div>
        </div>
    </div>
    );
};

export default Header;