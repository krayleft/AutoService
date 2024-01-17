import React from 'react';
import { useForm } from "react-hook-form";

const LastForm = () => {

    const { register, handleSubmit, formState:{errors}, reset } = useForm();
    const onSubmit = (data) => {
    console.log(data);
    reset()
    }

    return (
        <div className='container lastform'>
                            <form className='lastFormAllObject' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='introlastform' id='introlastform'>
                    Дарим скидку 10% для наших новых клиентов
                    </h1>
                    <h5 className='introlastform'>
                    Пожалуйста, заполните форму, и стоимость услуг в вашем первом чеке будет на 10% ниже прайс-листа
                    </h5>
                    <hr />
                    <input {...register("Имя", {required:true})} aria-invalid={errors.Имя ? "true" : "false"} placeholder='Введите имя'/>
                    {errors.Имя?.type === 'required' &&
                                    <div className='FieldNeed'>
                                        Обязательное поле
                                    </div>}
                    <input {...register("Телефон", {required:true})} aria-invalid={errors.Телефон ? "true" : "false"} placeholder='Введите телефон'/>
                    {errors.Телефон?.type === 'required' &&
                                    <div className='FieldNeed'>
                                        Обязательное поле
                                    </div>}
                    <input {...register("Email")} placeholder='Введите email'/>
                    <input {...register("Marka")} placeholder='Введите марку автомобиля'/>
                    <input {...register("Probeg")} placeholder='Введите пробег'/>
                    <button id='sendcontact' type="submit" class="btn btn-success">Отправить</button>
                    <p id='oferta'>Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p>
                </form>
        </div>
    );
};

export default LastForm;