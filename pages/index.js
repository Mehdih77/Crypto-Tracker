import Circle from "../components/ProgressBar/Circle";
import Line_Home from '../components/Charts/Line_Home'
import { useRouter } from "next/router";
import {get , post, del} from '../lib/http'
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

    const getActivities = await get('/Activities').then(response => response.data)

    const getExpense = await get('/Activities?kind=expense').then(response => response.data)
    const getIncome = await get('/Activities?kind=income').then(response => response.data)

    return {
        props: {
        getActivities,
        getExpense,
        getIncome
        }}
}


export default function Home({getActivities,getExpense,getIncome}) {

    const router = useRouter();

    // const [getActivities, setGetActivities] = useState([])
    const [postActivities, setPostActivities] = useState({})

        //GET
        const getRecentActivities = () => {
            getActivities;
         }
   
         //POST
        const postRecentActivities = async () => {
        const response = await post('/Activities', postActivities);
        if (response) {
            getRecentActivities()
        }
    }
        // Delete
        const deleteRecentActivities = async (id) => {
            const response = await del(`/Activities/${id}`)
            if (response) {
                getRecentActivities()
                router.push('/')
            }
        }


    //Change Form Input Activity
    function handleChangeForm(e){
        setPostActivities({
            ...postActivities,
            [e.target.name] : e.target.value
        })
    }
    //Update Form Activity
    useEffect(() => {
        getRecentActivities()
        router.push('/')
    },[])

    // Map for Activities
    const mapRecentActivity = getActivities.map((activity) => {
        return (
            <>
            <div key={activity.id} className='recent-activity-details'>
                    <i className={activity.logo}></i> 
                    <p className='recent-activity-name'>{activity.activity}</p>
                    <p className='recent-activity-qty'>
                    <span className={activity.kind === 'income' ? 'recent-activity-qty-green' : 'recent-activity-qty-red'}>
                    {activity.kind === 'income' ? '+' : '-'}
                    </span>
                    ${activity.price}</p>
                    <i onClick={() => deleteRecentActivities(activity.id)} className="fas fa-trash"></i>
            </div>
            </>
        )
    })

    // Calculate Income & Expense & Bonus
    const calcIncome = getIncome.reduce((acc,curr) => acc + Number(curr.price) ,0);
    const calcExpense = getExpense.reduce((acc,curr) => acc + Number(curr.price) ,0);
    const calcBonus = calcIncome - calcExpense;
    // Calculate Expense & bonus Percentage
    const expensePercent = ((calcExpense*100) / (calcIncome)).toFixed(0) ;
    const bonusPercent = (100 - expensePercent).toFixed(0);


      // Open & Close Modal Form
      const [open, setOpen] = useState(false);
      const handleClickOpen = () => {
                setOpen(true);
      };
      const handleClose = () => {
                setOpen(false);
      };

    return (
        <>
            <div className='home_style'>
                <div className='money'>
                <div className='money-income'>
                <div className='money-details'>
                <p>Total Income</p>
                <p>${calcIncome}</p>
                <p>During last month</p>
                </div>
                <Circle type={'income'} value={'100%'} />
                </div>
                <div className='money-expense'>
                <div className='money-details'>
                <p>Total Expense</p>
                <p>${calcExpense}</p>
                <p>During 2 months</p>
                </div>
                <Circle type={"expense"} value={`${expensePercent}%`} /></div>
                <div className='money-bonus'>
                <div className='money-details'>
                <p>Total Bonus</p>
                <p>$ {calcBonus}</p>
                <p>During 5 months</p>
                </div>
                <Circle type={"bonus"} value={`${bonusPercent}%`} /></div>
                
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
                                <form onSubmit={postRecentActivities} className='form-activity' >
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
                                    <option>Choose Income Or Expense</option>
                                    <option value="income">+ Income</option>
                                    <option value="expense">- Expense</option>
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
                        {mapRecentActivity}
                    </div>
                </div>
            </div>
        </>
    );
}

