import React from "react"
import "../assets/style/styles.css";

const Button =( { handleBtnClick, children,btnStyle})=>{

    return(
        <div onClick={handleBtnClick} className={btnStyle} > 
            {/* <ion-icon name="logo-whatsapp" ></ion-icon> */}
            {/* <ion-icon name="chatbubble-ellipses"></ion-icon> */}
            {children}
        </div>
    )
}
export default Button 