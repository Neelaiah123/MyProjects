import React from "react";
import { computrtdata } from "./Computerdata";



const Computeroutput = () => {
    const firstfive = computrtdata.slice(0, 5);
    return (
        <>

            <h1>Computers</h1>

            <div className="presection">
                {
                    firstfive.map((item) => {
                        return (
                            <div className="img-box">

                                <img className="presection-box" src={item.img} alt="ComputerImg"></img>
                                <div className="namessize"><strong>{item.id}</strong></div>
                                <div>{item.company}</div>
                                <div>{item.cost}</div>

                            </div>

                        )
                    }
                    )
                };
            </div>
        </>
    )

};
export default Computeroutput;