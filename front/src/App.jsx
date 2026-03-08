import { useState } from 'react'

import Header from './components/UI/Header'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>

      <h1>Счётчик кликов</h1>
      <button onClick={() => setCount(count + 1)}>
        Увеличить: {count}
      </button>
      <button onClick={function() {
         if(count > 0){setCount(count - 1)}}
      }>
        Уменьшить: {count}
      </button>  
      <button onClick={function() {
         if(count > 0){setCount(count == 0)}}
      }>
      Сбросить: {count}
      </button>       

    </>
  )
}

export default App