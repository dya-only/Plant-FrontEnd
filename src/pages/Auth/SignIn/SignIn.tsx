import style from './SignIn.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock, faUser} from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {
    return (
        <div className={style.contain}>
            <div></div>

            <div className={style.main}>
                <div className={style.title}>로그인</div>

                <div className={style.side}>
                    <FontAwesomeIcon className={style.icon} icon={faUser} />
                    <input type="text" className={style.input} placeholder={'아이디'} />
                </div>
                <div className={style.side}>
                    <FontAwesomeIcon className={style.icon} icon={faLock} />
                    <input type="password" className={style.input} placeholder={'비밀번호'} />
                </div>
            </div>

            <button className={style.btn} onClick={() => window.location.href='/dashboard'}>로그인</button>
        </div>
    )
}

export default SignIn