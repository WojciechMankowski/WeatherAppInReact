
const IMG = (props: {img: string}) => {
    const src = `http://openweathermap.org/img/wn/${props.img}@2x.png`
    return(
        <img src={src}/>
    )
}

export default IMG