import styles from './forecast-item.module.css'

export const ForecastItem = ({ date, min, max, condition, description, weekday }) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.weekday}> {weekday} </h3>
            <p> ({date}) </p>
            <img src={`./icons-weather/${condition}.svg`} alt={description} />
            <p> {min}/{max}º</p>
        </div>
    )
}