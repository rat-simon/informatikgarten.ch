import styles from '../styles/colortext.module.css'

export function ColorTitle({ children }) {
    const text = typeof children === 'string' ? children : '';
    return (
        <h1 className={styles.title} data-text={text}>
            {children}
        </h1>
    )
}