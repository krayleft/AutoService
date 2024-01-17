import React from 'react';
import Number1 from './Number1'
import Number2 from './Number2'
import Number3 from './Number3'
import Number4 from './Number4'
import Number1Jpg from '../../Img/Team/admin.jpg'
import Number2Jpg from '../../Img/Team/avtoslesar.jpg'
import Number3Jpg from '../../Img/Team/avtoslesar2.jpg'
import Number4Jpg from '../../Img/Team/avtoslesar3.jpg'

const Team = () => {
    return (
        <div className='container Team'>
            <div className='IntroTextTeam'>
                <p id='myteam'>
                    Наша команда
                </p>
                <p>
                    Высококвалифицированные специалисты<br/> и знатоки своего дела
                </p>
            </div>
            <div className='PeopleTeam'>
                <div className='container NumberOne'>
                    <Number1 image={Number1Jpg}/>
                    <h1>
                        Дитя Тьмы
                    </h1>
                    <p>
                        Администратор автосервиса
                    </p>
                </div>
                <div className='container NumberTwo'>
                    <Number2 image={Number2Jpg}/>
                    <h1>
                        Лепс
                    </h1>
                    <p>
                        Автослесарь
                    </p>
                </div>
                <div className='container NumberThree'>
                    <Number3 image={Number3Jpg}/>
                    <h1>
                        Игорь
                    </h1>
                    <p>
                        Автослесарь по ремонту и обслуживанию
                    </p>
                </div>
                <div className='container NumberFour'>
                    <Number4 image={Number4Jpg}/>
                    <h1>
                        Сергей
                    </h1>
                    <p>
                        Автослесарь
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Team;