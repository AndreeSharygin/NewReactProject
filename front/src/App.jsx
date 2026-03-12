import { useState } from 'react'

import Header from './components/UI/Header'
import Footer from './components/UI/Footer'


function App() {
  const [count, setCount] = useState(0)
    const pHover = () => { 
    console.log("Навели на p")
    }


  return (
    <>
      <Header text="ВАС ПРИВЕТСТВУЕТ СЧЕТЧИК КЛИКОВ" title="ВЫБЕРИТЕ ДЕЙСТВИЕ С ПОМОЩЬЮ КНОПОК" />
      <p onMouseEnter={pHover}>Hello World</p>
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
      <Footer text="СЧЕТЧИК КЛИКОВ ПРОЩАЕТСЯ С ВАМИ" title="ДО СКОРЫХ ВСТРЕЧ" />
    </>
  )
}

export default App