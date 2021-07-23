import Circle from "../components/ProgressBar/Circle";
import Line_Home from '../components/Charts/Line_Home'
export default function Home() {

   

    return (
        <>
            <div className='home_style'>
                <div className='money'>
                <div className='money-income'>
                <div className='money-details'>
                <p>Total Income</p>
                <p>$1200</p>
                <p>During last month</p>
                </div>
                <Circle type={'income'} value={'60%'} />
                </div>

                <div className='money-expense'>
                <div className='money-details'>
                <p>Total Expense</p>
                <p>3600K</p>
                <p>During 2 months</p>
                </div>
                <Circle type={"expense"} value={'55%'} /></div>

                <div className='money-bonus'>
                <div className='money-details'>
                <p>Total Bonus</p>
                <p>7500K</p>
                <p>During 5 months</p>
                </div>
                <Circle type={"bonus"} value={'70%'} /></div>
                
                </div>
                <div className='charts'>
                <Line_Home  />
                </div>
            </div>
        </>
    );
}

