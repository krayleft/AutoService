import React from 'react';
import PhotoPriceJpg3 from '../../../Img/PricePhoto/3.jpg'
import PhotoPrice3 from '../Photo_Price`s/PhotoPrice3'

const PriceItemThree = () => {
    return (
        <div className='container'>
            <div className="container card">
            <PhotoPrice3 image={PhotoPriceJpg3}/>
            <div className="card-body">
                <h5 className="card-title">Шиномонтаж</h5>
              
            </div>
            <div className="card-body flex-button">
            <div>
                <button type="button" className="btn btn-outline-primary pricebutton" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">Цены</button>
            </div>
            <div class="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Шиномонтаж</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
        <h4>
            Шиномонтаж колес седана:
        </h4>
        <ul>
            <li>шиномонтаж колес радиусом R12 - 600 руб</li>
            <li>шиномонтаж колес радиусом R13 - 800 руб</li>
            <li>шиномонтаж колес радиусом R14 - 900 руб</li>
            <li>шиномонтаж колес радиусом R15 - 1000 руб</li>
            <li>шиномонтаж колес радиусом R16 - 1100 руб</li>
            <li>шиномонтаж колес радиусом R17 - 1300 руб</li>
            <li>шиномонтаж колес радиусом R18 - 1400 руб</li>
        </ul>
        <h4>
             Шиномонтаж колес для кроссовера:
        </h4>
        <ul>
            <li>шиномонтаж колес радиусом R15 - 1200 руб</li>
            <li>шиномонтаж колес радиусом R16 - 1500 руб</li>
            <li>шиномонтаж колес радиусом R17 - 1700 руб</li>
            <li>шиномонтаж колес радиусом R18 - 1900 руб</li>
        </ul>
        <ul>
          <li>Прокатка дисков - от 800 руб</li>
          <li>Балансировка колес - 800 руб</li>
        </ul>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
      </div>
    </div>
  </div>
</div>
            <div>
            <a href='#introlastform'><button type="button" className="btn btn-outline-success">Оставить заявку</button></a>
            </div>
            </div>
            </div>
        </div>
    );
};

export default PriceItemThree;