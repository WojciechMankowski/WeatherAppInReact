
const IMG = (props) => {
    const src = `http://openweathermap.org/img/wn/${props.img}@2x.png`
    return(
        <img src={src}/>
    )
}

export default IMG