const Inf = ({temp, windy}) => {
    return ( 
    <div className="col-sm">
        <spam key={temp}>
          {temp + " \xB0C"}
          <br />
          { windy + "km/h"}
        </spam>
        </div>
        )
    
}
export default  Inf