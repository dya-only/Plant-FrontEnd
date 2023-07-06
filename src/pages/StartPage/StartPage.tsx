import {Fragment} from "react"
import {Link} from "react-router-dom";
import style from './StartPage.module.css'
import Environment from '../../assets/imgs/env.svg'

const StartPage = () => {
    return (
        <Fragment>
            <div className={style.header}>
                <></>

                <div className={style.menu}>
                    <img className={style.mainimg} src={Environment} alt=""/>
                    <div className={style.title}><strong className={style.colored}>플랜팅</strong>, 쉬워졌네요.</div>
                </div>

                <Link className={style.btn} to={'/up'}>심으러 가기</Link>
            </div>
        </Fragment>
    )
}

export default StartPage