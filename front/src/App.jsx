import { useState, useEffect } from 'react'

import Header from './components/UI/Header'
import Footer from './components/UI/Footer'


function App() {
  const [count, setCount] = useState(0)
    const pHover = () => { 
    console.log("Навели на p")
    }
const [showHeader, setShowHeader] = useState(true)
const [showFooter, setShowFooter] = useState(true)

  return (
    <>
      {/* <Header text="ВАС ПРИВЕТСТВУЕТ СЧЕТЧИК КЛИКОВ" title="ВЫБЕРИТЕ ДЕЙСТВИЕ С ПОМОЩЬЮ КНОПОК" /> */}
      {showHeader && <Header text="ВАС ПРИВЕТСТВУЕТ СЧЕТЧИК КЛИКОВ" title="ВЫБЕРИТЕ ДЕЙСТВИЕ С ПОМОЩЬЮ КНОПОК"  />}
      <button onClick={() => setShowHeader(!showHeader)}>{showHeader ? "Скрыть" : "Показать"} Header</button>
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
      {/* <Footer text="СЧЕТЧИК КЛИКОВ ПРОЩАЕТСЯ С ВАМИ" title="ДО СКОРЫХ ВСТРЕЧ" /> */}
      {showFooter&& <Footer text='СЧЕТЧИК КЛИКОВ ПРОЩАЕТСЯ С ВАМИ' title='ДО СКОРЫХ ВСТРЕЧ' />}
      <button onClick={() => setShowFooter(!showFooter)}>{showFooter ? "Скрыть":"Показать"} Footer</button>
    </>
  )
}

export default App