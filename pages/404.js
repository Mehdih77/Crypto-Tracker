import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/404.module.css'

function NotFoundPage() {

    const router = useRouter()

    // For Pushing Back User to Home page
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }, [])
   

    return (
        <img className={styles.img} src="/img/404.jpg" alt="404 Error NotFoundPage" />
    )
}

export default NotFoundPage
