import React from "react"
type Props = {temp: number, windy: string}
const Inf = (props: Props) => {
    return ( 
    <div className="col-sm">
          {props.temp + " \xB0C"}
          <br />
          { props.windy + "km/h"}
        </div>
        )
    
}
export default  Inf