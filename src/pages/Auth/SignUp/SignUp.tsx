import style from './SignUp.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons'
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import {Fragment, useEffect, useState} from "react";

export default function Up() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [passwd, setPasswd] = useState('')
  const [toggle, setToggle] = useState(false)

  const onSignUp = async () => {
    axios.post('http://ec2-13-125-243-232.ap-northeast-2.compute.amazonaws.com:4321/api/user/create', {name, passwd}, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin' : '*'
      }
    }).then(res => {
      const resp = res.data
      console.log(resp)

      if (resp.status === 200) {
        setToggle(true)
      }
    })
  }

  useEffect(() => {
    if (sessionStorage.getItem('CLIENT_TOKEN')) navigate('/dashboard')
  }, [navigate])

  return (
    <Fragment>
      {toggle ?
        <div className={style.modal_contain}>
          <div className={style.modal}>
            <h3 className={style.modal_title}>회원가입이 완료되었습니다!</h3>
            <Link className={style.modal_btn} to={'/in'}>로그인하기</Link>
          </div>
        </div>
        : null}

      <div className={style.contain}>
        <div></div>

        <div className={style.main}>
          <div className={style.title}>회원가입</div>

          <div className={style.side}>
            <FontAwesomeIcon className={style.icon} icon={faUser}/>
            <input type="text" className={style.input} placeholder={'아이디'} onChange={(e: any) => setName(e.target.value)}/>
          </div>
          <div className={style.side}>
            <FontAwesomeIcon className={style.icon} icon={faLock}/>
            <input type="password" className={style.input} placeholder={'비밀번호'} onChange={(e: any) => setPasswd(e.target.value)}/>
          </div>
          <Link className={style.move} to={'/in'}>계정이 이미 있으신가요?</Link>
        </div>

        <button className={style.btn} onClick={onSignUp}>회원가입</button>
      </div>
    </Fragment>
  )
}