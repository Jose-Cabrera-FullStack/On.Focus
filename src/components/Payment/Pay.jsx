import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/ShoppingCar.scss';

import CreditCard from '../../assets/static/images/svg/credit-card-color.svg'
import Visa from '../../assets/static/images/img/visa.png'
import MasterCard from '../../assets/static/images/img/mastercard.png'
import AmeticaExpress from '../../assets/static/images/img/american-express.png'


const Pay = () => (
    <form action="submit" className="way-to-pay">
        <p className="way-to-pay__text">Ingresá tu correo electrónico.</p>
        <input type="text" placeholder="E-mail" className="way-to-pay__input"/>
        <div className="way-to-pay__box">
            <div className="flex">
                <div className="way-to-pay__box__card">
                    <img className="way-to-pay__box__card__img" src={CreditCard} alt="Tarjeta de credito"/>
                </div>
                <div className="way-to-pay__box__card">
                    <img className="way-to-pay__box__card__img" src={CreditCard} alt="Tarjeta de credito"/>
                </div>
                <div className="way-to-pay__box__card">
                    <img className="way-to-pay__box__card__img" src={CreditCard} alt="Tarjeta de credito"/>
                </div>
            </div>
            <p className="way-to-pay__text">Ingresá los datos de tu tarjeta</p>
            <input className="way-to-pay__input way-to-pay__input--card" type="text" placeholder="Número de la tarjeta"/>
            <div className="flex">
                <input type="text" placeholder="MM/AA" className="way-to-pay__input way-to-pay__input--MM"/>
                <input type="text" placeholder="Código de seguridad" className="way-to-pay__input way-to-pay__input--segurity"/>
            </div>
            <p className="checkbox">todos los campos son obligatorios</p>
            <div className="flex">
                <label class="container">Guardar mi tarjeta
                    <input type="checkbox" /> 
                <span class="checkmark"></span>
            </label>
                <div className="flex">
                    <img className="way-to-visa" src={Visa} alt="Visa"/>
                    <img className="way-to-express" src={AmeticaExpress} alt="American Express"/>
                    <img className="way-to-master" src={MasterCard} alt="Mastercard"/>
                </div>
            </div>
            <Link to="/adquirido">
                <button class="btn__secundary btn__secundary--buy btn__secundary--way-to-pay"> Comprarlo ahora</button>
            </Link>
        </div>
    </form>
)
export default Pay;