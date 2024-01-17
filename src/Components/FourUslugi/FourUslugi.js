import React from 'react';
import UslugaPhoto1Png from "../../Img/diagnosticks.png"
import UslugaPhoto1 from './UslugaPhoto1'
import UslugaPhoto2Png from "../../Img/tex.png"
import UslugaPhoto2 from './UslugaPhoto2'
import UslugaPhoto3Png from "../../Img/repair.png"
import UslugaPhoto3 from './UslugaPhoto3'
import UslugaPhoto4Png from "../../Img/shini.png"
import UslugaPhoto4 from './UslugaPhoto4'

const FourUslugi = () => {
    return (
        <>
            <div className='FourUslugi'>
                <div id='intro'>
                    Автосервис в Ростове-на-Дону
                </div>
                <div className='container Uslugi'>
                    <div className='Usluga1'>
                        <a href='#introAkcsii'><UslugaPhoto1 image={UslugaPhoto1Png}/></a>
                        <br/><h3>Диагностика</h3>
                    </div>
                    <div className='Usluga2'>
                        <a href='#NashiUslugiText'><UslugaPhoto2 image={UslugaPhoto2Png}/></a>
                        <br/><h3 id='repair'>Ремонт</h3>
                    </div>
                    <div className='Usluga3'>
                    <a href='#NashiUslugiText'><UslugaPhoto3 image={UslugaPhoto3Png}/></a>
                        <br/><h3 id='tex'>Техобслуживание</h3>
                    </div>
                    <div className='Usluga4'>
                    <a href='#NashiUslugiText'><UslugaPhoto4 image={UslugaPhoto4Png}/></a>
                        <br/><h3 id='shini'>Шиномонтаж</h3>
                    </div>  
                </div>
            </div>
        </>
    );
};

export default FourUslugi;