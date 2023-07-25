import Styled, {keyframes} from 'styled-components'
import style from './chart.module.css'

export default function HumidityChart (props: { chart: any }) {
  const chartToLeft = keyframes`
    from {
      width: 0;
    }
    to {
      width: ${props.chart - 20}%;
    }
  `

  const StyledHumidity = Styled.div`
    z-index: 20;
    width: ${props.chart}%;
    height: 25px;
    border-radius: 20px;
    background: ${ props.chart > 70 && props.chart < 90 ? '#47A0FF' : '#60D9FF' };
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: ${chartToLeft};
    animation-duration: 1s;
    animation-fill-mode: forwards;
  `

  return (
  <div className={style.chart}>
    <StyledHumidity>
      <p className={style.start}>0</p>
      <p className={style.mid}>{props.chart}%</p>
    </StyledHumidity>
    <p className={style.end}>100</p>
  </div>
  )
}