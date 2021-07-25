import React from 'react';
import styles from '../styles/Setting.module.css'
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        '& > *': {
            margin: theme.spacing(2),
            width: '30ch'
        }
    }
}));

export default function Setting() {
    const classes = useStyles();
    const [value,
        setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={styles.setting_section}>
            <div className={styles.setting_container}>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
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
                                <img src='./img/user.png'/>
                                <button>Upload/Change Avatar</button>
                            </div>
                        </div>
                        <div className={styles.profile_tab_right}>
                            <div>
                            <p className={styles.profile_tab_right_title}>Edit Account Details</p>
                            <form
                                className={styles.setting_form} autoComplete="off">
                                <input className='w-100' type="text" placeholder='Name' />
                                <input className='w-100' type="email" placeholder='Email Address' />
                                <div className={styles.setting_form_small_inputs}>
                                <input type="text" placeholder='Company' />
                                <input type="text" placeholder='Country' />
                                </div>
                                <div className={styles.setting_form_small_inputs}>
                                <input type="text" placeholder='Phone Number' />
                                <input type="date" placeholder='Birthday' />
                                </div>
                                <button>Update Changes</button>
                            </form>
                            </div>
                           

                        </div>
                    </div>
                </TabPanel>

                <TabPanel value={value} index={1}>
                <div className={styles.profile_tab}>
                        <div className={styles.profile_tab_left}>
                            <div className={styles.profile_picture}>
                                <p>Profile Picture</p>
                                <img src='./img/user.png'/>
                                <button>Upload/Change Avatar</button>
                            </div>
                        </div>
                        <div className={styles.profile_tab_right}>
                            <div>
                            <p className={styles.profile_tab_right_title}>Edit Account Details</p>
                            <form
                                className={styles.setting_form} autoComplete="off">
                                <input className='w-100' type="text" placeholder='Name' />
                                <input className='w-100' type="email" placeholder='Email Address' />
                                <div className={styles.setting_form_small_inputs}>
                                <input type="text" placeholder='Company' />
                                <input type="text" placeholder='Country' />
                                </div>
                                <div className={styles.setting_form_small_inputs}>
                                <input type="text" placeholder='Phone Number' />
                                <input type="date" placeholder='Birthday' />
                                </div>
                                <button>Update Changes</button>
                            </form>
                            </div>
                           

                        </div>
                    </div>
                </TabPanel>

                <TabPanel value={value} index={2}>
                     <div className={styles.profile_tab}>
                        <div className={styles.profile_tab_left}>
                            <div className={styles.profile_picture}>
                                <p>Profile Picture</p>
                                <img src='./img/user.png'/>
                                <button>Upload/Change Avatar</button>
                            </div>
                        </div>
                        <div className={styles.profile_tab_right}>
                            <div>
                            <p className={styles.profile_tab_right_title}>Edit Account Details</p>
                            <form
                                className={styles.setting_form} autoComplete="off">
                                <input className='w-100' type="text" placeholder='Name' />
                                <input className='w-100' type="email" placeholder='Email Address' />
                                <div className={styles.setting_form_small_inputs}>
                                <input type="text" placeholder='Company' />
                                <input type="text" placeholder='Country' />
                                </div>
                                <div className={styles.setting_form_small_inputs}>
                                <input type="text" placeholder='Phone Number' />
                                <input type="date" placeholder='Birthday' />
                                </div>
                                <button>Update Changes</button>
                            </form>
                            </div>
                           

                        </div>
                    </div>
                </TabPanel>
            </div>
        </div>
    );
}
