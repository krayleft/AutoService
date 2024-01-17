import React from 'react';
import PhotoPriceJpg1 from '../../../Img/PricePhoto/1.jpg'
import PhotoPrice1 from '../Photo_Price`s/PhotoPrice1'


const PriceItemOne = () => {
    return (
        <div className='container'>
            <div className="container card">
                <PhotoPrice1 image={PhotoPriceJpg1}/>
            <div className="card-body">
                <h5 className="card-title">Техническое обслуживание</h5>
               
            </div>
            <div className="card-body flex-button">
            <div>
                <button type="button" className="btn btn-outline-primary pricebutton " data-bs-toggle="modal" data-bs-target="#staticBackdrop">Цены</button>
            </div>
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Техническое обслуживание</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
          <ul>
              <li>Замена масла в ДВС - 400 руб</li>
              <li>Замена масла в АКПП - 1000(частичная) - 5000(полная) руб</li>
              <li>Замена масла в мосту - 300 руб</li>
              <li>Замена охлаждающей жидкости - 1000 руб</li>
              <li>Замена антифриза - 1000 руб</li>
              <li>Замена тормозной жидкости - 800 руб</li>
              <li>Замена жидкости ГУР - 600 руб</li>
              <li>Замена воздушного фильтра - 300 руб</li>
              <li>Замена салонного фильтра - 400 руб</li>
              <li>Замена топливного фильтра - 300 руб</li>
              <li>Замена топливного фильтра (Погружного типа) - 1000 руб</li>
              <li>Чистка сетки топливного насоса - 1000 руб</li>
              <li>Промывка топливной системы - 2000 руб</li>
              <li>Промывка системы охлаждения - 1500 руб</li>
              <li>Замена свечей зажигания - 100 руб/штука</li>
              <li>Комплексная диагностика электронных систем:
                  <ul>
                    <li>комплексная диагностика систем легкового автомобиля - 1000 руб</li>
                    <li>комплексная диагностика систем джипа или микроавтобуса - 1300 руб</li>
                  </ul>
              </li>
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

export default PriceItemOne;