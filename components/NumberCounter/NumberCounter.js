import React from 'react';
import CountUp from 'react-countup';
import Classes from '../../styles/counter.module.css';

const NumberCounter = () => {
  const data = [
    {
        Number:'1600',
        text:'নিহত',
        dsc:'২০২৪ সালের জুলাইয়ে',
    },
    {
        Number:'2000',
        text:'নিহত',
        dsc:'২০২৪ সালের জুলাইয়ে',
    },
    {
        Number:'2000',
        text:'নিহত',
        dsc:'২০২৪ সালের জুলাইয়ে',
    },
    {
        Number:'2000',
        text:'নিহত',
        dsc:'২০২৪ সালের জুলাইয়ে',
    },
  ];

  return (
    <div className={Classes.number_counter_wrap}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className={Classes.counter__head}>
                        <h2>শহীদ</h2>
                    </div>
                    <div className={Classes.number_counter}>
                        <ul className='clearfix reset-list'>
                            {data.map((item, index) => (
                                <li key={index}>
                                    <div className={Classes.number_counter_grid}>
                                        <strong><CountUp end={item.Number} duration={2} /></strong>
                                        <h5>{item.text}</h5>
                                        <p>{item.dsc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default NumberCounter;
