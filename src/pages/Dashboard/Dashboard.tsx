import {Fragment, useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import style from './Dashboard.module.css'
import axios from "axios"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faClose,
  faSeedling,
  faCakeCandles,
  faTemperatureThreeQuarters,
  faDroplet,
  faEarthAsia,
  faLeaf,
  faTree
} from '@fortawesome/free-solid-svg-icons'
import DegreeChart from "../../components/charts/DegreeChart"
import HumidityChart from "../../components/charts/HumidityChart"
import EarthChart from "../../components/charts/EarthChart"
import LeafChart from "../../components/charts/LeafChart"
import Navigator from "../../components/Navi/Navi"

import eco from '../../assets/imgs/eco.svg'
import plant from '../../assets/imgs/plant.png'

export default function Dashboard() {
  const navigate = useNavigate()
  const [modal, setModal] = useState(false)
  const [type, setType] = useState('허브')
  const [status, setStatus] = useState(0)
  const [isExist, setIsExist] = useState(false)
  const [predictDays, setPredictDays] = useState(0)
  const [date, setDate] = useState<Date>()
  const [plantState, setPlantState] = useState(0)
  const [information, setInformation] = useState({
    humidity: 0.0,
    soilMoisture: 0.0,
    temperature: 0.0
  })

  const getStart = async () => {
    setModal(false)
    setIsExist(true)
    sessionStorage.setItem('plant', type)
  }

  useEffect(() => {
    if (sessionStorage.getItem('plant')) {
      setIsExist(true)
      setType(sessionStorage.getItem('plant')!)
    }

    const getPlantData = async () => {
      axios.get('/upload_sensor_data', {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Origin' : '*'
        }})
        .then(resp => {
          const res = resp.data[0]
          const predict = res.predicted_days
          console.log(predict)

          setPlantState(res.leaf_status)
          setInformation({
            humidity: res.information.humidity,
            soilMoisture: res.information.soil_moisture,
            temperature: res.information.temperature
          })


          if (type === '허브')
            setPredictDays(predict.Herb)
          else if (type === '딸기')
            setPredictDays(predict.StrawBerry)
          else if (type === '토마토')
            setPredictDays(predict.Tomato)
          else if (type === '상추')
            setPredictDays(predict.Lettuce)
          else if (type === '바질')
            setPredictDays(predict.Basil)
          else if (type === '샐러리')
            setPredictDays(predict.Celery)
          else
            setPredictDays(predict.Kale)
        })
    }
    if (!sessionStorage.getItem('CLIENT_TOKEN')) {
      navigate('/in')
    }

    getPlantData()
  }, [navigate, type])

  return (
    <Fragment>
      <Navigator/>

      {modal ?
        <div className={modal ? style.modal_contain : style.notmodal_contain}>
          <div className={modal ? style.modal : style.notmodal}>
            <div className={style.menu_modal}>
              <div></div>
              <div className={style.modal_title}>플랜팅 시작하기</div>
              <FontAwesomeIcon className={style.close} icon={faClose} onClick={() => setModal(false)}/>
            </div>
            <div className={style.main_modal}>
              <div className={style.sub_h}>식물의 종류</div>
              <div>
                <button className={type === '허브' ? style.ctype_l : style.type_l}
                        onClick={() => setType('허브')}>허브
                </button>
                <button className={type === '딸기' ? style.ctype : style.type}
                        onClick={() => setType('딸기')}>딸기
                </button>
                <button className={type === '토마토' ? style.ctype : style.type}
                        onClick={() => setType('토마토')}>토마토
                </button>
                <button className={type === '상추' ? style.ctype : style.type}
                        onClick={() => setType('상추')}>상추
                </button>
                <button className={type === '바질' ? style.ctype : style.type}
                        onClick={() => setType('바질')}>바질
                </button>
                <button className={type === '샐러리' ? style.ctype : style.type}
                        onClick={() => setType('샐러리')}>샐러리
                </button>
                <button className={type === '케일' ? style.ctype_r : style.type_r}
                        onClick={() => setType('케일')}>케일
                </button>
              </div>

              <div className={style.sub_h}>키우기 시작 날짜</div>
              <input type="date" className={style.date} onChange={(e: any) => setDate(e.target.value)}/>

              <div className={style.sub_h}>현재 성장 상태</div>
              <div className={style.btn_contain}>
                <button className={status !== 0 ? style.type_l : style.ctype_l}
                        onClick={() => setStatus(0)}>씨앗
                </button>
                <button className={status === 1 ? style.ctype : style.type}
                        onClick={() => setStatus(1)}>새싹
                </button>
                <button className={status === 2 ? style.ctype_r : style.type_r}
                        onClick={() => setStatus(2)}>생장
                </button>
              </div>

              <button className={style.startbtn} onClick={getStart}>시작하기</button>
            </div>
          </div>
        </div>
        : null}

      {!isExist ?
        <div className={style.main}>
          <div></div>
          <div className={style.warn_contain}>
            <img className={style.warn_img} src={eco} alt=""/>
            <div className={style.warn}>현재 진행중인 플랜팅이 없어요.</div>
          </div>

          <button className={style.create} onClick={() => setModal(true)}>추가하기</button>
        </div>
        : <div className={style.d_main}>
          <div className={style.d_contain}>
            <img className={style.img} src={plant} alt=""/>

            <div className={style.profile_contain}>
              <div className={style.profile}>
                <div className={style.item}><span><FontAwesomeIcon className={style.icon} icon={faSeedling}/></span>
                  { type === '허브' ? '허브' : type === '딸기' ? '딸기' : type === '토마토' ? '토마토' : type === '상추' ? '상추' : type === '바질' ? '바질' : type === '샐러리' ? '샐러리' : type === '케일' ? '케일' : '' }
                </div>
                <div className={style.dateitem}>
                  <FontAwesomeIcon className={style.icon} icon={faCakeCandles} />
                  <p className={style.birth}>{ date?.toString() }</p>
                </div>
              </div>
            </div>
          </div>

          <div className={style.graph_card}>
            <p className={style.center_text}>20</p>
            <div className={style.center}/>
            <div className={style.graph_contain}>
              <div className={style.graph_text}><span><FontAwesomeIcon className={style.clogo}
                                                                       icon={faTemperatureThreeQuarters}/></span></div>
              <DegreeChart chart={information.temperature}/>
            </div>
            <p className={style.graph_warn}>{information.temperature > 25 ? '주변이 좀 더워요!' : information.temperature < 15 ? '주변이 좀 추워요!' : null}</p>
            <p className={style.graph_nice}>{information.temperature > 25 ? null : information.temperature < 15 ? null : '현재 온도를 유지해주세요.'}</p>
          </div>

          <div className={style.graph_card}>
            <p className={style.center_text1}>75</p>
            <div className={style.center1}/>
            <div className={style.graph_contain}>
              <div className={style.graph_text}><span><FontAwesomeIcon className={style.clogo} icon={faDroplet}/></span>
              </div>
              <HumidityChart chart={information.humidity}/>
            </div>
            <p className={style.graph_warn}>{information.humidity < 70 ? '주변이 좀 건조해요!' : information.humidity > 90 ? '주변이 좀 습해요!' : null}</p>
            <p className={style.graph_nice}>{information.humidity < 70 ? null : information.humidity > 90 ? null : '현재 습도를 유지해주세요.'}</p>
          </div>

          <div className={style.graph_card}>
            <p className={style.center_text2}>75</p>
            <div className={style.center2}/>
            <div className={style.graph_contain}>
              <div className={style.graph_text}><span><FontAwesomeIcon className={style.clogo}
                                                                       icon={faEarthAsia}/></span></div>
              <EarthChart chart={information.soilMoisture}/>
            </div>
            <p className={style.graph_warn}>{information.soilMoisture < 70 ? '흙에 물이 더 필요해요!' : information.soilMoisture > 90 ? '흙에 물이 너무 많아요!' : null}</p>
            <p className={style.graph_nice}>{information.soilMoisture < 70 ? null : information.soilMoisture > 90 ? null : '현재를 유지해주세요.'}</p>
          </div>

          <div className={style.graph_card}>
            <div className={style.graph_contain}>
              <div className={style.graph_text}><span><FontAwesomeIcon className={style.clogo} icon={faLeaf}/></span>
              </div>
              <LeafChart chart={plantState}/>
            </div>
            <p className={style.graph_warn}>{plantState < 60 ? '식물의 상태가 안좋아요!' : null}</p>
            <p className={style.graph_yellow}>{plantState >= 60 && plantState < 80 ? '식물의 상태가 양호해요!' : null}</p>
            <p className={style.graph_nice}>{plantState >= 80 ? '식물의 상태가 건강해요.' : null}</p>
          </div>

          <div className={style.predict}>
            <FontAwesomeIcon className={style.grow} icon={status === 0 || status === 1 ? faSeedling : faTree}/>
            <div className={style.predict_text}><span className={style.colored}>예상일:</span> { Math.floor(predictDays) }일 남음</div>
          </div>
        </div>
      }
    </Fragment>
  )
}
