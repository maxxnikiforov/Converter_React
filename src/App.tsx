import React, { useState, useEffect } from 'react';
import { getRate } from './api';
import { Header } from './components/Header/Header';
import { Converter } from './components/Converter/Converter';
import './App.scss';

export const App: React.FC = () => {
  const [usdCourseBuy, setUsdCourseBuy] = useState<number>(0);
  const [usdCourseSell, setUsdCourseSell] = useState<number>(0);
  const [eurCourseBuy, setEurCourseBuy] = useState<number>(0);
  const [eurCourseSell, setEurCourseSell] = useState<number>(0);

  useEffect(() => {
    const newCourse = async () => {
      const currentCourse = await getRate();

      const euroRate = currentCourse.find(item => item.ccy === 'EUR');
      const usdRate = currentCourse.find(item => item.ccy === 'USD');

      if (euroRate) {
        setEurCourseBuy(+euroRate.buy);
        setEurCourseSell(+euroRate.sale);
      }

      if (usdRate) {
        setUsdCourseBuy(+usdRate.buy);
        setUsdCourseSell(+usdRate.sale);
      }
    };

    newCourse();
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <Header
          usdBuy={usdCourseBuy}
          eurBuy={eurCourseBuy}
          usdSell={usdCourseSell}
          eurSell={eurCourseSell}
        />
      </div>
      <div className="app__converter">
        <Converter
          usdBuy={usdCourseBuy}
          eurBuy={eurCourseBuy}
          usdSell={usdCourseSell}
          eurSell={eurCourseSell}
        />
      </div>
    </div>
  );
};
