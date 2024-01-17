import React from 'react';
import PriceItemOne from './PriceItem/PriceItemOne';
import PriceItemTwo from './PriceItem/PriceItemTwo';
import PriceItemThree from './PriceItem/PriceItemThree';
import PriceItemFour from './PriceItem/PriceItemFour';
import PriceItemFive from './PriceItem/PriceItemFive';
import PriceItemSix from './PriceItem/PriceItemSix';

const Price = () => {
    return (
        <div className='container price'>
            <div className='TextPrice'>
                <p id='NashiUslugiText'>
                    Наши услуги
                </p>
                <p id='NashiUslugiText2'>
                    Наш автосервис оснащен современным оборудованием для<br/>
                    диагностики и ремонта автомобилей Киа, ниссан, хендай, <br/>
                    ВАЗ и большинства других популярных марок!
                </p>
            </div>
            <div className='PriceItem'>
                <PriceItemOne/>
                <PriceItemTwo/>
                <PriceItemThree/>
                <PriceItemFour/>
                <PriceItemFive/>
                <PriceItemSix/>
            </div>
        </div>
    );
};

export default Price;