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
                <div className='my-credit-card'>
                    <p className='my-credit-card-name'>Primary Card</p>
                    <i className="far fa-credit-card"></i>
                    <p className='my-credit-card-number'><span>4567</span><span>3542</span><span>8569</span><span>1107</span></p>
                    <div className='my-credit-card-bottom'>
                    <p>valid: 06/28</p>
                    <i>VISA</i>
                    </div>
                </div>
                <div className='charts'>
                <Line_Home  />
                </div>
                <div className='recent-activity'>
                    <div className='recent-activity-top'>
                    <h5 className='recent-activity-title'>Recent Activity</h5>
                    <button className="fas fa-plus-circle"></button>
                    </div>
                    <div className='recent-activity-bottom'>
                        <div className='recent-activity-details'>
                            <i class="fab fa-bitcoin"></i>
                            <p className='recent-activity-name'>Sold BitCoin</p>
                            <p className='recent-activity-qty'> <span className='recent-activity-qty-green'>+</span> $12000</p>
                        </div>
                        <div className='recent-activity-details'>
                            <i class="fab fa-ethereum"></i> 
                            <p className='recent-activity-name'>Buy Ethereum</p>
                            <p className='recent-activity-qty'> <span className='recent-activity-qty-red'>-</span> $8000</p>
                        </div>
                        <div className='recent-activity-details'>
                            <i class="fas fa-euro-sign"></i> 
                            <p className='recent-activity-name'>Save Euro</p>
                            <p className='recent-activity-qty'> <span className='recent-activity-qty-green'>+</span> $12000</p>
                        </div>
                        <div className='recent-activity-details'>
                            <i class="fab fa-bitcoin"></i>
                            <p className='recent-activity-name'>Sold BitCoin</p>
                            <p className='recent-activity-qty'> <span className='recent-activity-qty-green'>+</span> $12000</p>
                        </div>
                        <div className='recent-activity-details'>
                            <i class="fas fa-euro-sign"></i> 
                            <p className='recent-activity-name'>Save Euro</p>
                            <p className='recent-activity-qty'> <span className='recent-activity-qty-green'>+</span> $12000</p>
                        </div>
                        <div className='recent-activity-details'>
                            <i class="fab fa-ethereum"></i> 
                            <p className='recent-activity-name'>Buy Ethereum</p>
                            <p className='recent-activity-qty'> <span className='recent-activity-qty-red'>-</span> $8000</p>
                        </div>
                        <div className='recent-activity-details'>
                            <i class="fas fa-euro-sign"></i> 
                            <p className='recent-activity-name'>Save Euro</p>
                            <p className='recent-activity-qty'> <span className='recent-activity-qty-green'>+</span> $12000</p>
                        </div>
                        <div className='recent-activity-details'>
                            <i class="fab fa-ethereum"></i> 
                            <p className='recent-activity-name'>Buy Ethereum</p>
                            <p className='recent-activity-qty'> <span className='recent-activity-qty-red'>-</span> $8000</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

