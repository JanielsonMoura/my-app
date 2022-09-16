import { useState, useCallback, useMemo } from 'react'
import './App.css';
import Comp1 from './Comp1.jsx'
import { Comp2 } from './Comp2'

const App = () => {

  const [cont1, setCont1] = useState(0)
  const [cont2, setCont2] = useState(0)

  const handleincrement1 = useCallback(() =>{
    console.log("incrementou 1")
    setCont1(cont1+ 1)
  },[cont1])

  const handleincrement2 = useCallback(() =>{
    console.log('incrementou 2')
    setCont2(cont2 + 1)
  },[cont2])
  const chooseStyle = useMemo(()=>{
    if(cont1%2 === 0){
      return 'green'
    }
    else{
      return 'purple'
    }
  },[cont1]);

  return (
    <div className="App">
      <h1>HELLO</h1>
      <Comp1 value={cont1} setValue={handleincrement1} color={chooseStyle}/>
      <Comp2 value={cont2} setValue={handleincrement2} />
    </div>
  );
}

export default App;
