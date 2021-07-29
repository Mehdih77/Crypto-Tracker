import React from 'react';
import styles from '../styles/Setting.module.css'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import Image from 'next/image'
import { useEffect } from 'react';

function TabPanel(props) {
    const {
        children,
        value,
        index,
        ...other
    } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}`};
}

export default function Setting() {

    const [accountForm, setAccountForm] = React.useState({
        name: '',
        email:'',
        company:'',
        country:'',
        phone:'',
        birthday:''
    })
    function handleChangeAccountForm(e) {
        setAccountForm({
            ...accountForm,
            [e.target.name]: e.target.value,
        })
    }
    function handleButtonAccountForm() {
        localStorage.setItem('accountform', JSON.stringify(accountForm))
    }

    // Update and GET item from LocaleStorage
    useEffect(() => {
        const token = localStorage.getItem('accountform')
        const switchers = localStorage.getItem('switcher')
        if (token) {
            setAccountForm(JSON.parse(token))
        }
        if (switchers) {
            setSwitcher(JSON.parse(switchers))
        }
    }, [])


    // Password 
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      // Tabs Change
    const [value,setValue] = React.useState(0);
    const handleChangeTab = (event , newValue) => {
        setValue(newValue);
    };
    // Delete Account Alert
    function handleDeleteAccount(){
        if (confirm('Are You Sure To Delete Your Account?')) {
            alert('Your Account Deleted')
        } else {
            alert(' :) ')
        }
    }
    // CheckBox
        const [state, setState] = React.useState({
          checkedA: true,
          checkedB: true,
          checkedC: false,
          checkedD: false
        });
        const handleChangeCheckBox = (event) => {
          setState({ ...state, [event.target.name]: event.target.checked });
        };
        //Switchers
        const [switcher, setSwitcher] = React.useState({
            checkedA: true,
            checkedB: false,
            checkedC: true,
            checkedD: true,
            checkedE: true,
            checkedF: false,
          });

          const handleChangeSwitcher = (event) => {
            // localStorage.setItem('switcher', JSON.stringify(switcher))
            setSwitcher({ 
                ...switcher,
                 [event.target.name]: event.target.checked 
                });
                console.log(switcher);
          };


    return (
        <div className={styles.setting_section}>
            <div className={styles.setting_container}>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChangeTab} aria-label="simple tabs example">
                        <Tab label="Profile" {...a11yProps(0)}/>
                        <Tab label="security" {...a11yProps(1)}/>
                        <Tab label="notification" {...a11yProps(2)}/>
                    </Tabs>
                </AppBar>

                <TabPanel value={value} index={0}>
                    <div className={styles.profile_tab}>
                        <div className={styles.profile_tab_left}>
                            <div className={styles.profile_picture}>
                                <p>Profile Picture</p>
                               <div className={styles.profile_picture_img}><Image width={130} height={130} src='/img/user.png' alt='user'/></div>
                                <button className={styles.tab1_button}>Upload/Change Avatar</button>
                            </div>
                        </div>
                        <div className={styles.profile_tab_right}>
                            <div>
                            <p className={styles.profile_tab_right_title}>Edit Account Details</p>
                            <form onSubmit={handleButtonAccountForm}
                                className={styles.setting_form} autoComplete="off">
                                <input onChange={handleChangeAccountForm} value={accountForm.name} className='w-100' name='name' type="text" placeholder='Name' />
                                <input onChange={handleChangeAccountForm} value={accountForm.email} className='w-100' name='email' type="email" placeholder='Email Address' />
                                <div className={styles.setting_form_small_inputs}>
                                <input onChange={handleChangeAccountForm} value={accountForm.company} type="text" name='company' placeholder='Company' />
                                <input onChange={handleChangeAccountForm} value={accountForm.country} type="text" name='country' placeholder='Country' />
                                </div>
                                <div className={styles.setting_form_small_inputs}>
                                <input onChange={handleChangeAccountForm} value={accountForm.phone} type="text" name='phone' placeholder='Phone Number' />
                                <input onChange={handleChangeAccountForm} value={accountForm.birthday} type="date" name='birthday' placeholder='Birthday' />
                                </div>
                                <button type='submit' className={styles.tab1_button}>Update Changes</button>
                            </form>
                            </div>
                           

                        </div>
                    </div>
                </TabPanel>

                <TabPanel value={value} index={1}>
                <div className={styles.security_tab}>
                        <div className={styles.security_tab_left}>
                            <div className={styles.credir_card_changing}>
                                <p>Credit Cards</p>
                                <div className={styles.credir_card_img}><Image width={150} height={140} src='/img/Credit-Card-Users.png' alt='credit-card'/></div>
                                <button>Add/Remove Cards</button>
                            </div>
                        </div>
                        <div className={styles.security_tab_right}>
                            <div>
                            <p className={styles.security_tab_right_title}>Edit Account Password</p>
                                 <div className={styles.setting_form} >
                                        <div className={styles.current_password}>   
                                        <input placeholder='Current Password' className={styles.password_input} type={values.showPassword ? 'text' : 'password'} onChange={handleChange('password')}  />
                                        <button className={styles.password_button} aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}>{values.showPassword ? <Visibility /> : <VisibilityOff />}</button>
                                            
                                        </div>
                                        <div className={styles.new_password}>   
                                        <input placeholder='New Password' className={styles.password_input} type={values.showPassword ? 'text' : 'password'} onChange={handleChange('password')}  />
                                        <button className={styles.password_button} aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}>{values.showPassword ? <Visibility /> : <VisibilityOff />}</button>
                                            
                                        </div>
                                        <div className={styles.renew_password}>   
                                        <input placeholder='Re-enter New Password' className={styles.password_input} type={values.showPassword ? 'text' : 'password'} onChange={handleChange('password')}  />
                                        <button className={styles.password_button} aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}>{values.showPassword ? <Visibility /> : <VisibilityOff />}</button>
                                            
                                        </div>
                                 <button className={styles.change_password_button}>Change Password</button>
                                 </div>

                            </div>
                           

                        </div>
                    </div>
                    <div className={styles.security_tab_bottom}>
                         <p className={styles.delete_account_title}>Delete Account</p>
                         <p className={styles.delete_account_body}>To deactivate your account, first delete its resources. If you are the only owner of any teams, either assign another owner or deactivate the team.</p>
                        <button onClick={handleDeleteAccount} className={styles.delete_account_button}>Delete Account</button>
                    </div>

                </TabPanel>

                <TabPanel value={value} index={2}>
                     <div className={styles.notification_tab}>
                        <div className={styles.notification_tab_left}>
                            <div className={styles.notification_receive}>
                                <p>Subscription Preference Center </p>
                               <div className={styles.notification_receive_boxes}>
                               <FormControlLabel
                                        control={
                                        <Checkbox
                                            checked={state.checkedA}
                                            onChange={handleChangeCheckBox}
                                            name="checkedA"
                                            color="primary"
                                        />
                                        }
                                        label="Product Announcements and Updates"
                                    />
                                    <FormControlLabel
                                        control={
                                        <Checkbox
                                            checked={state.checkedB}
                                            onChange={handleChangeCheckBox}
                                            name="checkedB"
                                            color="primary"
                                        />
                                        }
                                        label="Events and Meetups"
                                    />
                                    <FormControlLabel
                                        control={
                                        <Checkbox
                                            checked={state.checkedC}
                                            onChange={handleChangeCheckBox}
                                            name="checkedC"
                                            color="primary"
                                        />
                                        }
                                        label="User Research Surveys"
                                    />
                                    <FormControlLabel
                                        control={
                                        <Checkbox
                                            checked={state.checkedD}
                                            onChange={handleChangeCheckBox}
                                            name="checkedD"
                                            color="primary"
                                        />
                                        }
                                        label="Hatch Startup Program"
                                    />
                               </div>
                            </div>
                        </div>
                        <div className={styles.notification_tab_right}>
                            <div>
                            <p className={styles.notification_tab_right_title}>ACTIVITY RELATED EMAILS</p>
                            <div className={styles.notification_tab_right_top}>
                                <p>When to email?</p>
                                <FormControlLabel
                                    control={
                                    <Switch
                                        checked={switcher.checkedA}
                                        onChange={handleChangeSwitcher}
                                        name="checkedA"
                                        color="primary"
                                    />
                                    }
                                    label="Have new notifications"
                                />
                                <FormControlLabel
                                    control={
                                    <Switch
                                        checked={switcher.checkedB}
                                        onChange={handleChangeSwitcher}
                                        name="checkedB"
                                        color="primary"
                                    />
                                    }
                                    label="You're sent a direct message"
                                />
                                <FormControlLabel
                                    control={
                                    <Switch
                                        checked={switcher.checkedC}
                                        onChange={handleChangeSwitcher}
                                        name="checkedC"
                                        color="primary"
                                    />
                                    }
                                    label="Someone adds you as a connection"
                                />
                            </div>
                            <div className={styles.notification_tab_right_bottom}>
                                        <p>When to escalate emails?</p>
                                <FormControlLabel
                                    control={
                                    <Switch
                                        checked={switcher.checkedD}
                                        onChange={handleChangeSwitcher}
                                        name="checkedD"
                                        color="primary"
                                    />
                                    }
                                    label="Upon new order"
                                />
                                <FormControlLabel
                                    control={
                                    <Switch
                                        checked={switcher.checkedE}
                                        onChange={handleChangeSwitcher}
                                        name="checkedE"
                                        color="primary"
                                    />
                                    }
                                    label="New membership approval"
                                />
                                <FormControlLabel
                                    control={
                                    <Switch
                                        checked={switcher.checkedF}
                                        onChange={handleChangeSwitcher}
                                        name="checkedF"
                                        color="primary"
                                    />
                                    }
                                    label="Member registration"
                                />
                            </div>
                            </div>
                           
                        </div>
                    </div>
                </TabPanel>
            </div>
        </div>
    );
}
