import React from 'react';
import {connect} from 'react-redux';

import Politicy from '../components/Profile/Politicy'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/styles/App.scss';
import '../assets/styles/components/Payment.scss';

const Payment = () => {

  return(
    <div className="App">
        <Header/>
        <Politicy/>
        <Footer/>
    </div>

  );
}

export default connect(null,null)(Payment);