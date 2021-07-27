import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/404.module.css'
import Image from 'next/image'

function NotFoundPage() {

    const router = useRouter()

    // For Pushing Back User to Home page
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }, [router])
   

    return (
        <>
            <div className={styles.img_404} >
            <Image layout='fill' src="/img/404.jpg" alt="404 Error NotFoundPage" />
            </div>
        </>
    )
}

export default NotFoundPage
