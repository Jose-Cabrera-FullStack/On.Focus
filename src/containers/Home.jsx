import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';

import Principal from '../components/Principal/Principal';
import Discovery from '../components/Principal/Discovery';
import HowWeTeach from '../components/Principal/HowWeTeach';
import AboutUs from '../components/Principal/AboutUs';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/styles/App.scss';

const Home = () => {
  return(
    <div className="App">

        <Header/>
        <Principal/>
        <Discovery/>
        <HowWeTeach/>
        <AboutUs/>
        <Footer/>

    </div>

  );
}

const mapStateToProps = state => {
  return{

    myList: state.myList,
    trends: state.trends,
    originals: state.originals,

  }
}

export default connect(mapStateToProps,null)(Home);