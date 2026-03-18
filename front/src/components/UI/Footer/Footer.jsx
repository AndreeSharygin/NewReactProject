import { useState, useEffect } from 'react'
import styles from './Footer.module.css'


const Footer = ({ text ="До новых встреч", title = "До свидания" }) => {
useEffect(
  () => {

    alert("Добро пожаловать!")  
  },
  []
)
    return (
        <footer className={styles.footer}>
            <p>{text}</p>
            <p>{title}</p>
        </footer>
    )
}
export default Footer