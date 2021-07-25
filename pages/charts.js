import styles from '../styles/Charts.module.css'
import HorizontalBar from '../components/Charts/HorizontalBar'
import BarChart from '../components/Charts/BarChart'
import SmallCharts1 from '../components/Charts/SmallCharts1'
import SmallCharts2 from '../components/Charts/SmallCharts2'
import SmallCharts3 from '../components/Charts/SmallCharts3'

function Charts() {
    return (
        <>

        <div className={styles.right_charts}>
            <div className={styles.small_chart}>
            <div className={styles.small_chart_title}>
                <p>Total Income</p>
                <p>65%</p>
            </div>
            <SmallCharts1 />
            </div>
            <div className={styles.small_chart}>
            <div className={styles.small_chart_title}>
                <p>Total Expense</p>
                <p>30%</p>
            </div>
            <SmallCharts2 />
            </div>
            <div className={styles.small_chart}>
            <div className={styles.small_chart_title}>
                <p>Total Bonus</p>
                <p>85%</p>
            </div>
            <SmallCharts3 />
            </div>
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
