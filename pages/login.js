import {useState, useEffect} from 'react'
import styles from '../styles/Login.module.css'
import {useAuthDispatch, useAuthState} from '../lib/Auth_Context/AuthContext'
import {ActionTypes} from '../lib/Auth_Context/reducer'
import { useRouter } from 'next/router';

function Login() {

    const dispatch = useAuthDispatch();

    const {error} = useAuthState();

    const router = useRouter();

    // default user
    const userAdmin = {
        username: "admin",
        password: "123"
    }

    // state for handleChange & get information from localeStorage.getItem
    const [form,setForm] = useState({
         password: "",
         username: ""
        })

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    // for LOGIN
    function handleSubmit(e) {
        e.preventDefault();
            if (form.username === userAdmin.username && form.password === userAdmin.password) {
                dispatch({
                    type: ActionTypes.LOGIN_SUCCESS,
                    payload: {
                        username: form.username,
                        password: form.password
                    }
                }),
                localStorage.setItem("loginkey",JSON.stringify(form));
                router.push('/');
            } else{
                dispatch({
                    type: ActionTypes.LOGIN_ERROR,
                    payload: {
                        error: 'Your Username or Password is incorrect!'
                    }
                })
                alert('Username: admin , Password: 123')
            }
    }


    useEffect(() => {
        const token = localStorage.getItem("loginkey");
        // console.log(token);
        if (token) {
            setForm(JSON.parse(token))
        }
    }, [])





    return (
       <section className={styles.login_page}>
            <div className={styles.login_form_left}>
            <form onSubmit={handleSubmit}>
            <h5>Login To Your Account</h5>
            { error && <p className={styles.error_text}> {error} </p>}
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
        <div className={styles.login_form_right}>
            <video src="/video/Crypto3D.mp4" loop autoPlay></video>
        </div>
       </section>
    )
}

export default Login
