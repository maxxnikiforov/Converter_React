import React, { useState } from 'react';
import './Converter.scss';

type Props = {
  usdBuy: number;
  usdSell: number;
  eurBuy: number;
  eurSell: number;
};

export const Converter: React.FC<Props> = ({
  eurBuy,
  usdBuy,
  eurSell,
  usdSell,
}) => {
  const [operation, setOperation] = useState<string>('sale');
  const [amount, setAmount] = useState<number>(0);
  const [yourSum, setYourSum] = useState<number>(0);
  const [yourCurrency, setYourCurrency] = useState<string>('UAH');
  const [changeTo, setChangeTo] = useState<string>('USD');

  const changeOperation = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOperation(event.target.value);
  };

  const chooseYourCurrency = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYourCurrency(event.target.value);
  };

  const chooseChangeTo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setChangeTo(event.target.value);
  };

  const countSum = () => {
    if (yourCurrency === changeTo) {
      setYourSum(amount);
    }

    if (operation === 'sale') {
      if (yourCurrency === 'UAH' && changeTo === 'USD') {
        const sum = amount / usdBuy;

        setYourSum(+sum.toFixed(2));
      }

      if (yourCurrency === 'UAH' && changeTo === 'EUR') {
        const sum = amount / eurBuy;

        setYourSum(+sum.toFixed(2));
      }

      if (yourCurrency === 'USD' && changeTo === 'UAH') {
        const sum = amount * usdBuy;

        setYourSum(+sum.toFixed(2));
      }

      if (yourCurrency === 'EUR' && changeTo === 'UAH') {
        const sum = amount * eurBuy;

        setYourSum(+sum.toFixed(2));
      }

      if (yourCurrency === 'USD' && changeTo === 'EUR') {
        const sum = amount * (usdBuy / eurBuy);

        setYourSum(+sum.toFixed(2));
      }

      if (yourCurrency === 'EUR' && changeTo === 'USD') {
        const sum = amount * (eurBuy / usdBuy);

        setYourSum(+sum.toFixed(2));
      }
    }

    if (operation === 'buy') {
      if (yourCurrency === 'UAH' && changeTo === 'USD') {
        const sum = amount / usdSell;

        setYourSum(+sum.toFixed(2));
      }

      if (yourCurrency === 'UAH' && changeTo === 'EUR') {
        const sum = amount / eurSell;

        setYourSum(+sum.toFixed(2));
      }

      if (yourCurrency === 'USD' && changeTo === 'EUR') {
        const sum = amount * (usdBuy / eurSell);

        setYourSum(+sum.toFixed(2));
      }

      if (yourCurrency === 'EUR' && changeTo === 'USD') {
        const sum = amount * (eurBuy / usdSell);

        setYourSum(+sum.toFixed(2));
      }
    }
  };

  return (
    <div className="converter">
      <div className="converter__operation">
        <h2>Your operation</h2>
        <select
          name="operation"
          value={operation}
          onChange={changeOperation}
        >
          <option value="sale">sale</option>
          <option value="buy">buy</option>
        </select>
      </div>

      <div>
        <h2>Your Sum</h2>
        <input
          name="input"
          type="number"
          className="converter__input"
          value={amount.toString().replace(/^0+/, '')}
          onChange={(event) => setAmount(+event.target.value)}
          placeholder="write your amount"
        />
      </div>

      <div className="converter__operation">
        <h2>Change from:</h2>
        <select
          name="operation"
          value={yourCurrency}
          onChange={chooseYourCurrency}
        >
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>

      <div className="converter__operation">
        <h2>Change to:</h2>
        <select
          name="operation"
          value={changeTo}
          onChange={chooseChangeTo}
        >
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>

      <button
        type="button"
        onClick={countSum}
        className="converter__button"
      >
        Change
      </button>
      <p className="converter__output">
        {`Your sum: ${yourSum} ${changeTo}`}
      </p>
    </div>
  );
};
