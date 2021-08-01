
//style
import style from './Stats.module.css'

const Stats = ({total}) => {
    return (
        <div>
            <p className={style.message}>Hey! You had been saved : {total} contacts. </p>
        </div>
    )
}

export default Stats