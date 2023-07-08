import {Fragment, useState} from "react"
import style from "../Create/Create.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlus, faClose} from "@fortawesome/free-solid-svg-icons"
import {useNavigate} from "react-router-dom"

const Dashboard = () => {
    const navigate = useNavigate()
    const [isExist, setIsExist] = useState(false)
    const [modal, setModal] = useState(false)
    const [type, setType] = useState('허브')
    const [status, setStatus] = useState(0)

    const getStart = () => {
        navigate('/dashboard')
    }

    return (
        <Fragment>
            { modal ?
                <div className={modal ? style.modal_contain : style.notmodal_contain}>
                    <div className={modal ? style.modal : style.notmodal}>
                        <div className={style.menu_modal}>
                            <div></div>
                            <div className={style.modal_title}>플랜팅 시작하기</div>
                            <FontAwesomeIcon className={style.close} icon={faClose} onClick={() => setModal(false)} />
                        </div>
                        <div className={style.main_modal}>
                            {/*<div className={style.h}>식물의 간단한 정보들</div>*/}

                            <div className={style.sub_h}>식물의 종류</div>
                            <div>
                                <button className={type === '허브' ? style.ctype_l : style.type_l} onClick={() => setType('허브')}>허브</button>
                                <button className={type === '딸기' ? style.ctype : style.type} onClick={() => setType('딸기')}>딸기</button>
                                <button className={type === '토마토' ? style.ctype : style.type} onClick={() => setType('토마토')}>토마토</button>
                                <button className={type === '상추' ? style.ctype : style.type} onClick={() => setType('상추')}>상추</button>
                                <button className={type === '바질' ? style.ctype : style.type} onClick={() => setType('바질')}>바질</button>
                                <button className={type === '샐러리' ? style.ctype : style.type} onClick={() => setType('샐러리')}>샐러리</button>
                                <button className={type === '케일' ? style.ctype_r : style.type_r} onClick={() => setType('케일')}>케일</button>
                            </div>

                            <div className={style.sub_h}>키우기 시작 날짜</div>
                            <input type="date" className={style.date} />

                            <div className={style.sub_h}>현재 성장 상태</div>
                            <div className={style.btn_contain}>
                                <button className={status === 0 ? style.ctype_l : style.type_l} onClick={() => setStatus(0)}>씨앗</button>
                                <button className={status === 1 ? style.ctype : style.type} onClick={() => setStatus(1)}>새싹</button>
                                <button className={status === 2 ? style.ctype_r : style.type_r} onClick={() => setStatus(2)}>생장</button>
                            </div>

                            <button className={style.btn} onClick={getStart}>시작하기</button>
                        </div>
                    </div>
                </div>
            : null }

            { !isExist ?
            <div className={style.main}>
                <div className={style.warn}>현재 진행중인 플랜팅이 없어요.</div>

                <button className={style.create} onClick={() => setModal(true)}>
                    <FontAwesomeIcon className={style.plus} icon={faPlus} />
                </button>
            </div>
            : null }
        </Fragment>
    )
}

export default Dashboard