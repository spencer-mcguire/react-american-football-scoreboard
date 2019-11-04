import React, {useState} from "react";
import "./App.css";

const Quarter = () => {
    const [quarter, setQuarter] = useState(1)
    let count = 1;
    let game = (quarter) => {
      if(count < 4){
        return count = count + 1
      } else {
        return count = 1
      }
    }
    console.log(game(4))
    return (
        <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <button onClick = {() => setQuarter(game())}> test</button>
      </div>
    );
}

export default Quarter;