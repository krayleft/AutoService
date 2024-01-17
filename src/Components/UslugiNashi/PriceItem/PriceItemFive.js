import React from 'react';
import PhotoPriceJpg5 from '../../../Img/PricePhoto/5.jpg'
import PhotoPrice5 from '../Photo_Price`s/PhotoPrice5'

const PriceItemFive = () => {
    return (
        <div className='container'>
            <div className="container card">
            <PhotoPrice5 image={PhotoPriceJpg5}/>
            <div className="card-body">
                <h5 className="card-title">Рулевое управление</h5>
            </div>
            <div className="card-body flex-button">
            <div>
                <button type="button" className="btn btn-outline-primary pricebutton" data-bs-toggle="modal" data-bs-target="#staticBackdrop5">Цены</button>
            </div>
            <div class="modal fade" id="staticBackdrop5" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Рулевое управление</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
        <ul>
          <li>Замена рулевых тяг - 500 руб</li>
          <li>Замена рулевых наконечников - 400 руб</li>
          <li>Замена рулевых реек - от 4000 руб</li>
          <li>Сход/Развал (Геометрия колес) - 800 руб/ось</li>
          <li>Ремонт рулевых реек от 3.000 рублей!</li>
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

export default PriceItemFive;