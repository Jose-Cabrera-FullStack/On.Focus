import React from 'react';

import '../../assets/styles/components/Teacher.scss';
import Button from '../Utils/ButtonArrowRight'

import Hero from '../../assets/static/images/img/hero-teacher-down.png'
import Arrow from '../../assets/static/images/svg/arrow-right.svg'


const HeroDown = () => (
        <section className="teacher__course">
            <div className="flex">
                <img src={Hero} alt=""/>
                <h1>Lorem ipsum dolor sit amet dolor sit, lorem ipsum dolor sit. </h1>
                <Button text={'Contactar'} margin={'btn__secundary--about__us'}/>
            </div>
        </section>
)
export default HeroDown;