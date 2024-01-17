import React from 'react';
import PhotoPriceJpg2 from '../../../Img/PricePhoto/2.jpg'
import PhotoPrice2 from '../Photo_Price`s/PhotoPrice2'

const PriceItemTwo = () => {
    return (
        <div className='container'>
            <div className="container card">
            <PhotoPrice2 image={PhotoPriceJpg2}/>
            <div className="card-body">
                <h5 className="card-title">Ходовая часть</h5>
                
            </div>
            <div className="card-body flex-button">
            <div>
                <button type="button" className="btn btn-outline-primary pricebutton"  data-bs-toggle="modal" data-bs-target="#staticBackdrop2">Цены</button>
            </div>
            <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Ходовая часть</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
        <ul>
          <li>Диагностика ходовой и тормозной систем автомобилей:
              <ul>
                <li>диагностика ходовой и тормозной систем автомобиля класса А или В - 350 руб</li>
                <li>диагностика ходовой и тормозной систем автомобиля класса C, D или E - 550 руб</li>
                <li>диагностика ходовой и тормозной систем джипов или микроавтобусов 900 - руб</li>
              </ul>
          </li>
          <li>Замена нижнего рычага - 400 руб</li>
          <li>Замена сайлентблока - 400 руб</li>
          <li>Замена стоек амортизаторов - 1200 руб</li>
          <li>Замена стоек стабилизатора - 500 руб</li>
          <li>Замена втулок стабилизатора (Перед) - 600 руб</li>
          <li>Замена втулок стабилизатора (Зад) - 400 руб</li>
          <li>Замена шаровой - 400 руб</li>
          <li>Замена подшипника ступницы - 1200 руб</li>
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

export default PriceItemTwo;