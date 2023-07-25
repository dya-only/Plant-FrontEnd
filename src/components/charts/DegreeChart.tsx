import Styled, {keyframes} from 'styled-components'
import style from './chart.module.css'

export default function DegreeChart(props: { chart: any }) {
  const chartToLeft = keyframes`
    from {
      width: 0;
    }
    to {
      width: ${props.chart + 30}%;
    }
  `

  const StyledDegree = Styled.div`
    z-index: 20;
    height: 25px;
    border-radius: 20px;
    background: ${15 < props.chart && props.chart < 25 ? '#ffc547' : '#ff7759'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: ${chartToLeft};
    animation-duration: 1s;
    animation-fill-mode: forwards;
  `

  return (
    <div className={style.chart}>
      <StyledDegree>
        <p className={style.start}>0°C</p>
        <p className={style.mid}>{props.chart}°C</p>
      </StyledDegree>
      <p className={style.end}>70°C</p>
    </div>
  )
}