import React, {useState} from "react";
import "./App.css";

const Quarter = () => {
    const [quarter, setQuarter] = useState(1)

    let game = () => {
      if(quarter > 3){
        setQuarter(1)
      } else {
        setQuarter(quarter + 1)
      }
    }
    return (
        <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <button onClick={game}>Quarter</button>
      </div>
    );
}

export default Quarter;