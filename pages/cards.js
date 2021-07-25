import styles from '../styles/Cards.module.css'
import Pie from '../components/Charts/Pie'
function Cards() {
    return (
        <>
            <div className={styles.card_container}>
                 <div className={styles.my_credit_card_1}>
                    <p className={styles.my_credit_card_name}>Primary Card</p>
                    <i className="far fa-credit-card"></i>
                    <p className={styles.my_credit_card_number}><span>4567</span><span>3542</span><span>8569</span><span>1107</span></p>
                    <div className={styles.my_credit_card_bottom}>
                    <p>valid: 06/28</p>
                    <i>VISA</i>
                    </div>
                    <div className={styles.card_1_hover}>
                        <p className={styles.card_hover_income}>Income: $45000</p>
                        <p className={styles.card_hover_expense}>Expense: $15000</p>
                        <p className={styles.card_hover_total}>Total: $30000</p>
                        <div className={styles.transaction}>
                            <p className={styles.transaction_title}>Last Transaction:</p>
                            <div>
                                <p>Buy Bitcoin</p>
                                <p>$4600</p>
                            </div>
                            <div>
                                <p>Sold Ethereum</p>
                                <p>$9600</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className={styles.my_credit_card_2}>
                    <p className={styles.my_credit_card_name}>Primary Card</p>
                    <i className="far fa-credit-card"></i>
                    <p className={styles.my_credit_card_number}><span>4567</span><span>3542</span><span>8569</span><span>1107</span></p>
                    <div className={styles.my_credit_card_bottom}>
                    <p>valid: 06/28</p>
                    <i>VISA</i>
                    </div>
                    <div className={styles.card_2_hover}>
                        <p className={styles.card_hover_income}>Income: $45000</p>
                        <p className={styles.card_hover_expense}>Expense: $15000</p>
                        <p className={styles.card_hover_total}>Total: $30000</p>
                        <div className={styles.transaction}>
                            <p className={styles.transaction_title}>Last Transaction:</p>
                            <div>
                                <p>Buy Bitcoin</p>
                                <p>$4600</p>
                            </div>
                            <div>
                                <p>Sold Ethereum</p>
                                <p>$9600</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className={styles.my_credit_card_3}>
                    <p className={styles.my_credit_card_name}>Primary Card</p>
                    <i className="far fa-credit-card"></i>
                    <p className={styles.my_credit_card_number}><span>4567</span><span>3542</span><span>8569</span><span>1107</span></p>
                    <div className={styles.my_credit_card_bottom}>
                    <p>valid: 06/28</p>
                    <i>VISA</i>
                    </div>
                    <div className={styles.card_3_hover}>
                        <p className={styles.card_hover_income}>Income: $45000</p>
                        <p className={styles.card_hover_expense}>Expense: $15000</p>
                        <p className={styles.card_hover_total}>Total: $30000</p>
                        <div className={styles.transaction}>
                            <p className={styles.transaction_title}>Last Transaction:</p>
                            <div>
                                <p>Buy Bitcoin</p>
                                <p>$4600</p>
                            </div>
                            <div>
                                <p>Sold Ethereum</p>
                                <p>$9600</p>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>

            <div className={styles.pie_chart}>
              <Pie />
              </div>
        </>
    )
}

export default Cards
