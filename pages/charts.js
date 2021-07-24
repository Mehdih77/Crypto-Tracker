import styles from '../styles/Charts.module.css'
import Pie from '../components/Charts/Pie'
import HorizontalBar from '../components/Charts/HorizontalBar'
import BarChart from '../components/Charts/BarChart'

function Charts() {
    return (
        <>
        <div className={styles.pie_chart}>
            <Pie />
        </div>
        <div className={styles.horizontal_bar}>
            <HorizontalBar />
        </div>
        <div className={styles.bar_chart}>
            <BarChart />
        </div>
        </>
    )
}

export default Charts;
