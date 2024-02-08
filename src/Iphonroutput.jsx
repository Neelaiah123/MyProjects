import React from "react";
import { Iphonrdata } from "./IphoneData";


const lphonroutput = () => {
    const firstfive = Iphonrdata.slice(0, 5);
    return (
        <>
            <h1>IPhones</h1>

            <div className="presection">
                {
                    firstfive.map((item) => {
                        return (
                            <div className="img-box">

                                <img className="presection-box" src={item.img} alt="AcImg"></img>
                                <div><strong>{item.id}</strong></div><br></br>
                                <div>{item.catagary}</div><br></br>
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
export default lphonroutput;