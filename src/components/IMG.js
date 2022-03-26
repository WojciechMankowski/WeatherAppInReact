import React from "react"; 


const IMG = ({icon}) => {
    let url_icon = `http://openweathermap.org/img/wn/${icon}@2x.png`
    return <img src={url_icon} className="img-thumbnail" alt={icon}/>
}
export default IMG