import styles from '../styles/colortext.module.css'

export function ColorTitle({ children }) {
    return (
        <h1 className={styles.title}>
            {children}
        </h1>
    )
}