import style from './SignIn.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faLock} from '@fortawesome/free-solid-svg-icons'
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import {useEffect, useState} from "react";

export default function In() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [passwd, setPasswd] = useState('')

  const onSignIn = async () => {
    axios.post('//ec2-13-125-243-232.ap-northeast-2.compute.amazonaws.com:4321/api/user', {name, passwd}, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    }).then(res => {
      const resp = res.data

      console.log(resp)
      if (resp.status === 200) {
        sessionStorage.setItem("CLIENT_TOKEN", resp.accessToken)
        sessionStorage.setItem("USER", resp.name)
        navigate('/dashboard')
      }
    })
  }

  useEffect(() => {
    if (sessionStorage.getItem('CLIENT_TOKEN')) navigate('/dashboard')
  }, [navigate])

  return (
    <div className={style.contain}>
      <div></div>

      <div className={style.main}>
        <div className={style.title}>로그인</div>

        <div className={style.side}>
          <FontAwesomeIcon className={style.icon} icon={faUser}/>
          <input type="text" className={style.input} placeholder={'아이디'} onChange={(e: any) => setName(e.target.value)}/>
        </div>
        <div className={style.side}>
          <FontAwesomeIcon className={style.icon} icon={faLock}/>
          <input type="password" className={style.input} placeholder={'비밀번호'} onChange={(e: any) => setPasswd(e.target.value)}/>
        </div>
        <Link className={style.move} to={'/up'}>계정이 없으신가요?</Link>
      </div>

      <button className={style.btn} onClick={onSignIn}>로그인</button>
    </div>
  )
}