import React from 'react';
import { useForm } from "react-hook-form";

const IntroPrice = () => {

    const { register, handleSubmit, formState:{errors}, reset } = useForm();
    const onSubmit = (data) => {
    console.log(data);
    reset()
    }

    return (
        <div className='IntroPrice'>
            <div className='textintroprice'>
                Полная диагностика и <br/> обслуживание системы <br/> кондиционирования - 1500р.
            </div>
            <div className='IntroPriceFormContact'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label id='MyData'>Оставьте заявку , мы Вам перезвоним</label>
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
                    <input {...register("Проблема", {required:true})} aria-invalid={errors.Проблема ? "true" : "false"} placeholder='Введите проблему'/>
                    {errors.Проблема?.type === 'required' &&
                                    <div className='FieldNeed'>
                                        Обязательное поле
                                    </div>}
                    <button id='sendcontact' type="submit" class="btn btn-success">Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default IntroPrice;