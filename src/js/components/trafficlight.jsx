import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalkingArrowRight } from '@fortawesome/free-solid-svg-icons';

const Trafficlight = () => {
    const [Color, setColor] = useState("red");

    const changeTrafficLight = () => {
        if (Color === "red") setColor("yellow");
        else if (Color === "yellow") setColor("green");
        else setColor("red");
    }
    
    return (
        <div className="traffic-light-container">
            <div className="top-stem"></div>
            <div className="structure">
                <div className={`light bg-danger ${Color === "red" ? "on" : ""}`} onClick={() => setColor("red")} >
                </div>
                <div className={`light bg-warning ${Color === "yellow" ? "on" : ""}`} onClick={() => setColor("yellow")} >
                </div>
                <div className={`light bg-success ${Color === "green" ? "on" : ""}`} onClick={() => setColor("green")} >
                </div>
                <div className="mt-3">
                    <button className="btn btn-primary" onClick={changeTrafficLight}>
                        <FontAwesomeIcon icon={faPersonWalkingArrowRight} />                    </button>
                </div>

            </div>
        </div>

    );
};

export default Trafficlight;