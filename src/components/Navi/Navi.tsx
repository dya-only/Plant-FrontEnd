import {Link} from "react-router-dom"
import style from './Navi.module.css'

const Navi = () => {
    return (
        <nav className={style.nav}>
            <Link className={style.title} to={'/'}>PLANT</Link>
        </nav>
    )
}

export default Navi