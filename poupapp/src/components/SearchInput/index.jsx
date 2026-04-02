import { IconSearch } from "../Icons"
import styles from "./search.module.css"

export const SearchInput = (props) => {
    return (
        <div className={styles.container}>
            <IconSearch/>
            <input className={styles.input} {...props}/>
        </div>
    )
}
