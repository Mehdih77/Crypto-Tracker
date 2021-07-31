import {useState, useEffect} from 'react'
import styles from '../styles/Login.module.css'
import {useAuthDispatch} from '../lib/Auth_Context/AuthContext'
import {ActionTypes} from '../lib/Auth_Context/reducer'

function Login() {

    const dispatch = useAuthDispatch();

    // default user
    const userAdmin = {
        username: 'admin',
        password: "123"
    }

    // state for handleChange & get information from localeStorage.getItem
    const [form,setForm] = useState({
         username: "",
         password: ""
        })

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    // for LOGIN
    function handleSubmit(e) {
        // e.preventDefault();
            if (form.username === userAdmin.username && form.password === userAdmin.password) {
                dispatch({
                    type: ActionTypes.LOGIN_SUCCESS,
                    payload: {
                        username: form.username,
                        password: form.password
                    }
                }),
                localStorage.setItem('loginKey',JSON.stringify(form));
            }
    }


    useEffect(() => {
        const token = localStorage.getItem('loginKey');
        if (token) {
            dispatch({
                type: ActionTypes.LOGIN_REQUEST
            }),
            setForm(token)
        }
    }, [])





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
