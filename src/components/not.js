<div className="inf">
<p className="heard">Pogoda w dniu {data.data}</p>
<span className="sunrise">
  <Sunrise />
  {` ${data.sunrise} `}
</span>
<span className="sunset">
  <Sunset /> {` ${data.sunset}`}
</span>
<br />
<div className="board">
  <div className={name}>
    <ThermometerHalf /> {data.temp + " \xB0C"}{" "}
  </div>
  <div>
    <span>Max {data.temp_max + " \xB0C "}</span>
    <span>Min {data.temp_min + " \xB0C"} </span><br/>
    <span>
      {" "}
      Odczuwalna temperatura: {data.feels_like_temp + " \xB0C"}
    </span>
  </div>
</div>
<div className="board2">
  <span>
    Siła wiatru <Wind /> {data.windy_speed} km/h
  </span> <br/>
  <span>Ciśnienie: {data.pressure} hPa</span> <br/>
  <span>Wilgodność: {data.humidity}% </span>
</div>
</div>