import React from 'react';
import PhotoPriceJpg4 from '../../../Img/PricePhoto/4.jpg'
import PhotoPrice4 from '../Photo_Price`s/PhotoPrice4'

const PriceItemFour = () => {
    return (
        <div className='container'>
            <div className="container card">
            <PhotoPrice4 image={PhotoPriceJpg4}/>
            <div className="card-body">
                <h5 className="card-title">Двигатель и КПП</h5>
               
            </div>
            <div className="card-body flex-button">
            <div>
                <button type="button" className="btn btn-outline-primary pricebutton" data-bs-toggle="modal" data-bs-target="#staticBackdrop4">Цены</button>
            </div>
            <div class="modal fade" id="staticBackdrop4" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Двигатель и КПП</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
        <ul>
          <li>Замена патрубка системы охлаждения - 400 руб</li>
          <li>Замена сцепления - 3500 руб</li>
          <li>Замена сальника - 300 руб</li>
          <li>Замена радиатора охлаждения ДВС - 1500 руб</li>
          <li>Замена радиатора кондиционера - 1000 руб</li>
          <li>Замена ремня ГРМ - от 3000 руб</li>
          <li>Замена ремня навесного оборудования - 600 руб</li>
          <li>Замена ролика навесного оборудования - 800 руб</li>
          <li>Замена прокладки клапаной крышки - 1500 руб</li>
          <li>Замена цепи ГРМ - 8000 руб</li>
          <li>Снятие/Установка топливного бака - 2500 руб</li>
          <li>Ремонт мКПП - от 5000 руб</li>
          <li>Замена ДВС - 10 000 руб</li>
          <li>Замена карданного вала - 1000 руб</li>
          <li>Замена вентилятора охлаждения ДВС - 1000 руб</li>
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

export default PriceItemFour;