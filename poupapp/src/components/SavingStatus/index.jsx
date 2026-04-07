import styles from "./savings-status.module.css"
import { IconSavings } from "../Icons"

export const SavingsStatus = ({ percetn }) => {
    return (
        <div className={styles.container}>
            <p>
                <IconSavings/> Economizar
            </p>
        </div>
    )
}