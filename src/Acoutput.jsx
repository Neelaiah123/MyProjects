import React from "react";
import { Acdata } from "./AcData";


const Acoutput = () => {
    const firstfive = Acdata.slice(0, 5);
    return (
        <>
            <h1>Ac</h1>
            <div className="presection">
                {
                    firstfive.map((item) => {
                        return (
                            <div className="img-box">

                                <img className="presection-box" src={item.img} alt="AcImg"></img>
                                <div><strong>{item.id}</strong></div>
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
export default Acoutput;