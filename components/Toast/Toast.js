import React , { useEffect }  from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function Toast( { message, type } ) {

    useEffect(() => {
        if (message) {
            toast[type](message) // toast.success(message)
        }
    }, [message,type])

    return (
    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
        )
}

export default Toast
