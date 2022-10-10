import React, { useState } from 'react';
import classes from './Home.module.css';
import Button from './Button';

function Home() {
  const [res, setRes] = useState('');

  const buttons = [
    'C',
    '9',
    '/',
    '8',
    '7',
    '6',
    '*',
    '5',
    '4',
    '3',
    '+',
    '2',
    '1',
    '0',
    '-',
    '.',
    'Del',
    '=',
  ];

  const findVal = () => {
    let result = eval('return ' + res)();
    setRes(result.toString());
  };

  const handler = (arg) => {
    console.log(arg);
    if (arg == 'C') setRes('');
    else if (arg == '=') findVal();
    else if (arg == 'Del') {
      let n = res.length;
      if (n > 0) setRes(res.slice(0, n - 1));
    } else setRes(res.concat(arg));
  };

  return (
    <div className={classes.home}>
      <div className={classes.inner}>
        <div className={classes.result}>
          <div className={classes.resbox}>{res}</div>
        </div>
        <div className={classes.btns}>
          {buttons.map((elem, index) => {
            return <Button handler={handler} value={elem} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
