import React, { memo } from 'react'

const Comp1 = ({value, setValue, color}) => {
  // console.log("this color:",color)
  return <button 
            onClick={() =>setValue()} 
            style={{ "color": color  }}
            >func 1 - {value}
          </button>
};

export default memo(Comp1);