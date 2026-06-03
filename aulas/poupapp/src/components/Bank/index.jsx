import { IconBank } from "../Icons"

import styles from './bank.module.css'

const formater = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL"})

export const Bank = ({bank}) => {
    return (
        <div className={styles.item}>
            <div className={styles.name}>
                <IconBank/> {bank.bank}
            </div>
            <div className={styles.balance}>
                <p>Saldo</p> <p>{formater.format(bank.balance)}</p>
            </div>
        </div> 
    )
}