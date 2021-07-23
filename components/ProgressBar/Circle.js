import styles from './ProgressBar.module.css'



function Circle({value , type }) {
    return (
        <>
        { type === 'income' && 
        <div className={`${styles.progress} ${styles.income}`}>
            <span className={styles.progress_left}>
                <span className={styles.progress_bar}></span>
            </span>
            <span className={styles.progress_right}>
                <span className={styles.progress_bar}></span>
            </span>
            <div className={styles.progress_value}>{value}</div>
            
        </div>}

        { type === 'expense' && 
        <div className={`${styles.progress} ${styles.expense}`}>
            <span className={styles.progress_left}>
                <span className={styles.progress_bar}></span>
            </span>
            <span className={styles.progress_right}>
                <span className={styles.progress_bar}></span>
            </span>
            <div className={styles.progress_value}>{value}</div>
            
        </div>}

        { type === 'bonus' && 
        <div className={`${styles.progress} ${styles.bonus}`}>
            <span className={styles.progress_left}>
                <span className={styles.progress_bar}></span>
            </span>
            <span className={styles.progress_right}>
                <span className={styles.progress_bar}></span>
            </span>
            <div className={styles.progress_value}>{value}</div>
            
        </div>}
        </>
    )
}

export default Circle