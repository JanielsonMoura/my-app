import { useState } from 'react'
import './App.css';
import Comp1 from './Comp1.jsx'
import { Comp2 } from './Comp2'

const App = () => {

  const [cont1, setCont1] = useState(1)
  const [cont2, setCont2] = useState(1)

  return (
    <div className="App">
      <div>olá</div>
      <Comp1 value={cont1} />
      <button onClick={()=>setCont1(cont1+ 1)}>INCREMENT 1</button>
      <Comp2 value={cont2} />
      <button onClick={()=>setCont2(cont2 + 1)}>INCREMENT 2</button>
    </div>
  );
}

export default App;
