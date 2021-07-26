import styles from '../styles/Dashboard.module.css'

function Dashboard() {
    return (
        <div className={styles.dashboard}>
                <div className={styles.dashboard_card}>
                    <div className={styles.dashboard_card_top}>
                        <img src="./img/user.png" alt="user" />
                    </div>
                    <div className={styles.dashboard_card_middle}>
                            <p className={styles.user_name}> Mehdi <span className={styles.user_age}>24</span></p>
                            <p className={styles.user_country}> Iran </p>
                    </div>
                    <div className={styles.dashboard_card_bottom}>
                        <div className={styles.dashboard_card_bottom_body} >
                            <p>$66000</p>
                            <p>Income</p>
                        </div>
                        <div className={styles.dashboard_card_bottom_body}>
                            <p>$8000</p>
                            <p>Expense</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Dashboard
