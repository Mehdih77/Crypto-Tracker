import {useState} from 'react'
import styles from './Login.module.css'

function Login({loginTo}) {
    const [details,setDetails] = useState({
         username: '',
         password: ''
        }
         )

    function handleChange(e) {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        loginTo(details)
    }

    return (
        <div className={styles.login_form}>
            <form onSubmit={handleSubmit}>
            <h5>Login To Your Account</h5>
                <input
                    placeholder='Username'
                    type="text"
                    name='username'
                    onChange={handleChange}
                    autoComplete='off'/>
                <input
                    placeholder='Password'
                    type="password"
                    name='password'
                    onChange={handleChange}/>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login
