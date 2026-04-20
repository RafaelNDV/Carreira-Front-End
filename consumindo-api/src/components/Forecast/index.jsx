import styles from './forecast.module.css'
import { ForecastItem } from '../ForecastItem'

export const ForecastList = ({ forecast }) => {
    return (
        <div className={styles.cards}>
            {forecast.map((forecast, index) => (
                <ForecastItem key={index} {...forecast} />
            ))}
        </div>
    )
}