import React from 'react';
import Akcsii1Jpg from '../../Img/Akcsii1.jpeg'
import Akcsii2Jpg from '../../Img/Akcsii2.jpg'
import Akcsii1 from './Akcsii_Item/Akcsii1'
import Akcsii2 from './Akcsii_Item/Akcsii2'

const Akcsii = () => {
    return (
        <div className='container Akcsii'>
            <div className='introAkcsii'>
                    <p id='introAkcsii'>
                        Акции
                    </p>
                    <p id='NewsAndAkcsii'>
                        Следите за новостями и акциями нашего салона
                    </p>
            </div>
            <div className='ItemsAkcsii'>
            <div class="card mb-3 card1">
                <div class="row g-0">
                    <div class="col-md-4">
                    <Akcsii1 image={Akcsii1Jpg}/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="card-title ">Диагностика автомобиля бесплатно</h2>
                        <p class="card-text card-text-akcsii">Уверены, что Ваш автомобиль готов к сезону? Проведем полную диагностику всех систем совершенно бесплатно</p>
                    </div>
                    </div>
                </div>
                </div>
                <div class="card mb-3 card1">
                <div class="row g-0">
                    <div class="col-md-4">
                    <Akcsii2 image={Akcsii2Jpg}/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="card-title">При покупке масла в нашей мастерской, замена БЕСПЛАТНО</h2>
                        <p class="card-text card-text-akcsii">Мы выбираем лучшее масло из представленных на рынке</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Akcsii;