import React from 'react';
import Task from './Task'

const Column = (props) => {
  return <div className='column'>
    {props.title}
    <Task />
  </div>;
};

export default Column;
