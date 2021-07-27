import Circle from "../components/ProgressBar/Circle";
import Line_Home from '../components/Charts/Line_Home'
import { useRouter } from "next/router";
import {get , post} from '../lib/http'
import React, {useState, useEffect} from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const getServerSideProps = async () => {

    const getActivitys = await get('/activitys').then(response => response.data)
    // const res = await fetch('http://localhost:5000/activitys');
    // const getActivitys = await res.json();
    // const res = await fetch(`http://localhost:5000/activitys/1`)
    // const getPrices = await res.json()
    return {
        props: {
        getActivitys,
        // getPrices
        }}
}
// console.log( get('/activitys').then(response => response.data));


export default function Home({getActivitys,getPrices}) {

    const router = useRouter();

    // const [getActivitys, setGetActivitys] = useState([])
    const [postActivitys, setPostActivitys] = useState({})

        //GET
        const getRecentActivitys = () => {
            getActivitys;
         }
   
         //POST
    const postRecentActivitys = async () => {
        const response = await post('/activitys', postActivitys);
        if (response) {
            getRecentActivitys()
        }
    }

    //Change Form Input Activity
    function handleChangeForm(e){
        setPostActivitys({
            ...postActivitys,
            [e.target.name] : e.target.value
        })
    }
    //Update Form Activity
    useEffect(() => {
        getRecentActivitys()
        router.push('/')
    },[getRecentActivitys()])

    // Map for activitys
    const mapRecentActivity = getActivitys.map((activity) => {
        return (
            <>
            <div key={activity.price} className='recent-activity-details'>
                    <i className={activity.logo}></i> 
                    <p className='recent-activity-name'>{activity.activity}</p>
                    <p className='recent-activity-qty'> <span className={activity.kind === '+' ? 'recent-activity-qty-green' : 'recent-activity-qty-red'}>{activity.kind}</span>${activity.price}</p>
            </div>
            </>
        )
    })
      // Open & Close Modal Form
      const [open, setOpen] = useState(false);
      const handleClickOpen = () => {
                setOpen(true);
      };
      const handleClose = () => {
                setOpen(false);
      };


/////// FIIIIIIIIIIIIIIX MEEEEEEEEEEEEEEEEEEEEEEEEE ///////////

//   const calculatePrice = getPrices.map((calc,index) => {
//          return (calc[0].price - 1000)
//   })


    return (
        <>
            <div className='home_style'>
                <div className='money'>
                <div className='money-income'>
                <div className='money-details'>
                <p>Total Income</p>
                <p>$3400 </p>
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
                    <div>
                        <button onClick={handleClickOpen} className="fas fa-plus-circle"></button>
                        <Dialog
                            open={open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-slide-title"
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle id="alert-dialog-slide-title"><p className='form-title'>Add Your Activity...</p></DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                <form onSubmit={postRecentActivitys} className='form-activity' >
                                <select onChange={handleChangeForm} className='form-add-kind' name='logo'>
                                    <option>Choose Coin Logo</option>
                                    <option value="fab fa-bitcoin">BitCoin</option>
                                    <option value="fab fa-ethereum">Ethereum</option>
                                    <option value="fas fa-euro-sign">Euro</option>
                                    <option value="fas fa-dollar-sign">Dollar</option>
                                    <option value="fas fa-yen-sign">Yen</option>
                                </select>
                                <input onChange={handleChangeForm} autoComplete='off' className='form-add-activity' type="text" name='activity' placeholder='Add Activity...' />
                                <select onChange={handleChangeForm} className='form-add-kind' name='kind'>
                                    <option>Choose + Or -</option>
                                    <option value="+">+</option>
                                    <option value="-">-</option>
                                </select>
                                <input onChange={handleChangeForm} className='form-price' type="number" name='price' placeholder='Add Price...' />
                                <button type='submit' className='form-button'>Add</button>
                                </form>
                            </DialogContentText>
                            </DialogContent>
                        </Dialog>
                        </div>
                    </div>
                    <div className='recent-activity-bottom'>
                        <div className='recent-activity-details'>
                            <i className="fab fa-bitcoin"></i>
                            <p className='recent-activity-name'>Sold BitCoin</p>
                            <p className='recent-activity-qty'> <span className='recent-activity-qty-green'>+</span> $12000</p>
                        </div>
                        <div className='recent-activity-details'>
                            <i className="fab fa-ethereum"></i> 
                            <p className='recent-activity-name'>Buy Ethereum</p>
                            <p className='recent-activity-qty'> <span className='recent-activity-qty-red'>-</span> $8000</p>
                        </div>
                        <div className='recent-activity-details'>
                            <i className="fas fa-euro-sign"></i> 
                            <p className='recent-activity-name'>Save Euro</p>
                            <p className='recent-activity-qty'> <span className='recent-activity-qty-green'>+</span> $7000</p>
                        </div>
                        <div className='recent-activity-details'>
                            <i className="fas fa-yen-sign"></i>
                            <p className='recent-activity-name'>Sold Yen</p>
                            <p className='recent-activity-qty'> <span className='recent-activity-qty-green'>+</span> $15000</p>
                        </div>
                        <div className='recent-activity-details'>
                            <i className="fas fa-dollar-sign"></i> 
                            <p className='recent-activity-name'>Save Dollar</p>
                            <p className='recent-activity-qty'> <span className='recent-activity-qty-green'>+</span> $6500</p>
                        </div>
                        {mapRecentActivity}
                    </div>
                </div>
            </div>
        </>
    );
}

