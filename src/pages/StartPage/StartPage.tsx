import style from './StartPage.module.css'
import {Link} from "react-router-dom"

import env from '../../assets/imgs/env.svg'

export default function Home() {
  return (
    <div className={style.header}>
      <></>

      <div className={style.menu}>
        <img className={style.mainimg} src={env} alt=""/>
        <div className={style.title}><strong className={style.colored}>플랜팅</strong>, 쉬워졌네요.</div>
      </div>

      <Link className={style.btn} to={'/up'}>심으러 가기</Link>
    </div>
  )
}
