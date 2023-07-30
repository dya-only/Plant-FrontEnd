import style from './Navi.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGripLines} from '@fortawesome/free-solid-svg-icons'

export default function Navigator() {
  const onClickMenu = () => {

  }

  return (
    <nav className={style.nav}>
      <FontAwesomeIcon className={style.icon} icon={faGripLines} onClick={onClickMenu}/>
    </nav>
  )
}