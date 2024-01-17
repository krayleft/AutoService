import React from 'react';
import PhotoPriceJpg6 from '../../../Img/PricePhoto/6.jpg'
import PhotoPrice6 from '../Photo_Price`s/PhotoPrice6'

const PriceItemSix = () => {
    return (
        <div className='container'>
            <div className="container card">
            <PhotoPrice6 image={PhotoPriceJpg6}/>
            <div className="card-body">
                <h5 className="card-title">Тормозная система</h5>
            </div>
            <div className="card-body flex-button">
            <div>
                <button type="button" className="btn btn-outline-primary pricebutton" data-bs-toggle="modal" data-bs-target="#staticBackdrop6">Цены</button>
            </div>
            <div class="modal fade" id="staticBackdrop6" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Тормозная система</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
        <ul>
          <li>Замена тормозных колодок (перед) - 400 руб</li>
          <li>Замена тормозных колодок (зад) - 400 - 600 руб</li>
          <li>Замена тормозных колодок ВИП (перед) - 500 - 600 руб</li>
          <li>Замена тормозных колодок барабанного типа (зад) - 800 руб</li>
          <li>Замена тормозных дисков - 800 руб</li>
          <li>Замена барабанов - 1000 руб</li>
          <li>Замена троса ручника - 1000 руб</li>
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

export default PriceItemSix;