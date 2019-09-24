import React from 'react';
import Foto from './Foto';
import Saludo from './Saludo';
import TotalAmount from './TotalAmount';
import WithDraw from './WithDraw';
import style from '../css/app.css';

const Background = () => (
    <div>
        <div className="background1">
            <Foto></Foto>
            <Saludo></Saludo>
            <TotalAmount></TotalAmount>
        </div>
        
        <div className="background2">
            <WithDraw></WithDraw>
        </div>
    </div>
);

export default Background;