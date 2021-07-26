import styles from '../styles/Dashboard.module.css'

function Dashboard() {
    return (
        <div className={styles.dashboard}>
                <div className={styles.dashboard_card}>
                    <div className={styles.dashboard_card_top}>
                        <img src="./img/user.png" alt="user" />
                        <button className={styles.log_in_out}>Log Out</button>
                    </div>
                    <div className={styles.dashboard_card_middle}>
                            <p className={styles.user_name}> Mehdi <span className={styles.user_age}>24</span></p>
                            <p className={styles.user_country}> Iran </p>
                    </div>
                    <div className={styles.dashboard_card_left}>
                        <p><span>Username:</span> MehdiH</p>
                        <p><span>Email:</span> mehdi.havaei77@gmail.com</p>
                        <p><span>Birthday:</span> 22-11-1998</p>
                        <p><span>Phone Number:</span> 093*****580</p>
                        <p><span>Company:</span> Nothing</p>
                    </div>
                    <div className={styles.dashboard_card_right}>
                            <p><span>Income:</span> $66000</p>
                            <p><span>Expense:</span> $8000</p>
                            <p><span>Credit Cards Added:</span> 3</p>
                            <div className={styles.dashboard_card_right_contact}>
                                <span>Contact with Mehdi:</span>
                                <div>
                                <a target='_blank' href="https://www.instagram.com/frontend.plus/"><i className="fab fa-instagram"></i></a>
                                <a href=""><i className="fab fa-telegram-plane"></i></a>
                                <a href=""><i className="fab fa-whatsapp"></i></a>
                                <a href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                    </div>
                </div>
        </div>
    )
}

export default Dashboard
