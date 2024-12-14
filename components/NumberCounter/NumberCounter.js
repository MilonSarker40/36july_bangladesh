import React from 'react';
import CountUp from 'react-countup';
import Classes from '../../styles/counter.module.css';

const NumberCounter = () => {
  const data = [
    {
        Number:'2000',
        text:'নিহত',
        dsc:'আন্দোলনরত ও চিকিৎসারত অবস্থায়',
    },
    {
        Number:'34000' ,
        text:'মোট আহত',
        dsc:'১৯ জুলাই - ৫ আগস্ট',
    },
    {
        Number:'14000',
        text:'স্থায়ী পঙ্গু',
        dsc:'১৯ জুলাই - ৫ আগস্ট',
    },

    {
        Number:'87',
        text:'গণ কবর',
        dsc:'১৯ জুলাই - ৫ আগস্ট',
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
