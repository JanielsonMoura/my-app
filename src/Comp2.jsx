import React from 'react'
import { memo } from 'react'

export const Comp2 = ({value, setValue}) => {
  return (<button onClick={() => setValue()}>func2 - {value}</button>);
};

export default memo(Comp2);