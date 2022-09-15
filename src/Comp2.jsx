import React from 'react'
import {memo} from 'react'

export const Comp2 = ({value}) => {
  console.log("renderizou o componente 2");
  return (<div>{value}</div>);
}

export default memo(Comp2);