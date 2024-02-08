import { useState } from "react";
import { createContext, useContext } from "react";

const NotificationContext = createContext({
    showNotification: ()=>{
    }
})



const Notification = ({notificationData})=>{
    //estilos para mejorar
    const color = {
        success: 'green',
        error: 'red',
        warning: 'orange',
        info: 'blue'
    }
    const notificationStyles = {
    backgroundColor: color[notificationData.type],
    color:'white',
    padding: '10px',
    borderRadius: '10px',
    position:'fixed',
    top: '200px'
    }

    return (
        <div style={notificationStyles}>
            <h4>{notificationData.type}</h4>
            <p>{notificationData.text}</p>
        </div>
    )
}

export const NotificationProvider = ({children})=>{
    const [notificationData, setNotificationData] = useState({
        type: 'success',
        text: ''
    })

    const showNotification=(type, text) =>{
        setNotificationData({type, text})
        setTimeout(()=>{
            setNotificationData({type, text: ''})
        },3000)
    }   

    return(
        <NotificationContext.Provider value={{showNotification}}>
            {notificationData.text && <Notification notificationData={notificationData}/>}
            {children}
        </NotificationContext.Provider>

    )
}

export const useNotification =()=>{
    return useContext(NotificationContext)
}