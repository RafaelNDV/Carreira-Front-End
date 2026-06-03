import styles from './forecast-item.module.css'
import { useState } from 'react'

export const ForecastItem = ({ date, min, max, condition, description, weekday }) => {

    let dayWeek = ''

    const markWeekDay = () => {
        if (weekday == 'Seg'){
            dayWeek = 'Segunda'
        }
        else if (weekday == 'Ter'){
            dayWeek = 'Terça'
        }
        else if(weekday == 'Qua'){
            dayWeek = 'Quarta'
        }
        else if(weekday == 'Qui'){
            dayWeek = 'Quinta'
        }
        else if(weekday == 'Sex'){
           dayWeek = 'Sexta'
        }
        else if(weekday == 'Sáb'){
            dayWeek = 'Sábado'
        }
        else if(weekday == 'Dom'){
            dayWeek = 'Domingo'
        }
    }

    markWeekDay()

    return (
        <div className={styles.container}>
            <h3 className={styles.weekday}> {dayWeek} </h3>
            <p> ({date}) </p>
            <img src={`./icons-weather/${condition}.svg`} alt={description} />
            <p> {min}/{max}º</p>
        </div>
    )
}