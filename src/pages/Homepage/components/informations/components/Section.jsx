import React from 'react'
import styles from './Section.module.scss'
import Button from './../../../../../components/Buttons'

export default function Section({img, title, text, btn_text, btn_click, isReversed = false}) {
  return (
    <div className={`d-flex w-100 ${styles.container}`}>
        {!isReversed && <div className={`${styles.img}`} style={{backgroundImage:`url(../../../../../../public/img/${img})`}}></div>}
        <div className={`${styles.desc}`}>
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="d-flex w-100 justify-content-center">
            <Button message={btn_text} handleClick={btn_click}/>
            </div>
        </div>
        {isReversed && <div className={`${styles.img}`} style={{backgroundImage:`url(../../../../../../public/img/${img})`}}></div>}
        
    </div>
  )
}
