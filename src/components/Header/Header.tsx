import React from 'react';
import './Header.scss';

type Props = {
  usdBuy: number;
  usdSell: number;
  eurBuy: number;
  eurSell: number;
};

export const Header: React.FC<Props> = ({
  eurBuy,
  usdBuy,
  eurSell,
  usdSell,
}) => {
  return (
    <div className="header">
      <h1 className="header__title">Курс гривны:</h1>
      <div className="header__rates">
        <div className="header__span">
          <p className="header__span-title">EUR</p>
          <span className="header__operation">BAY</span>
          {eurBuy}
          <br />
          <span className="header__operation">SALE</span>
          {eurSell}
        </div>

        <div className="header__span">
          <p className="header__span-title">USD</p>
          <span className="header__operation">BAY</span>
          {usdBuy}
          <br />
          <span className="header__operation">SALE</span>
          {usdSell}
        </div>
      </div>
    </div>
  );
};
