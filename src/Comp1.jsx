import React, { memo } from 'react'

const Comp1 = ({value}) => {
  console.log("renderizou o componente 1");
  return <div>{value}</div>
}

export default memo(Comp1);