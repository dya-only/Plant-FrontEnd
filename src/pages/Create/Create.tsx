import style from './Create.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Create = () => {
    return (
        <div className={style.main}>
            <button className={style.create}>
                <FontAwesomeIcon className={style.plus} icon={faPlus} />
            </button>
        </div>
    )
}

export default Create