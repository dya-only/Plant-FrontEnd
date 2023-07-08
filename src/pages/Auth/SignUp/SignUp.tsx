import style from './SignUp.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <div className={style.contain}>
            <div></div>

            <div className={style.main}>
                <div className={style.title}>회원가입</div>

                <div className={style.side}>
                    <FontAwesomeIcon className={style.icon} icon={faUser} />
                    <input type="text" className={style.input} placeholder={'아이디'} />
                </div>
                <div className={style.side}>
                    <FontAwesomeIcon className={style.icon} icon={faLock} />
                    <input type="password" className={style.input} placeholder={'비밀번호'} />
                </div>
                <Link className={style.move} to={'/in'}>계정이 이미 있으신가요?</Link>
            </div>

            <button className={style.btn} onClick={() => window.location.href='/in'}>회원가입</button>
        </div>
    )
}

export default SignUp