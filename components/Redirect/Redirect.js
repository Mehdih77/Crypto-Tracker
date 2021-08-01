import { useRouter } from 'next/router'
import { useEffect } from 'react'

// default redirect component
function Redirect({to}) {
    const router = useRouter();

    useEffect(() => {
        router.push(to)
    }, [to]);

    return null;
}

export default Redirect
