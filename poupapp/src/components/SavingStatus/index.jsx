import styles from "./savings-status.module.css"
import { IconSavings } from "../Icons"
import { ProgressBar } from "../ProgressBar"

export const SavingsStatus = ({ percent }) => {
    return (
        <div className={styles.container}>
            <p>
                <IconSavings/> Economizar
            </p>
            <ProgressBar percent={percent}/>
        </div>
    )
}