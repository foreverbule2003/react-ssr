import React from 'react';

export default props => {
  console.log(props);
  console.log('render by ssr');
  return (
    <h1>Hello {props.name}</h1>
  )
}