import React from 'react';
import LoaderImg from '../../assets/images/Loader.gif';
import './loader.scss'

const Loader = () => {
    return (
        <img
        className="loader" 
        src={LoaderImg} 
        alt="Подождите..."></img>
    );
};

export default Loader;