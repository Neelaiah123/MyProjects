import React from "react";
import { Iphonrdata } from "./IphoneData";


const Iphonepage = () => {
    return (
        <div className="pagesection">
            {Iphonrdata.map((item) => {
                return (
                    <div className="pageimg">

                        <img src={item.img}></img>  
                      
                        <div> {item.id}</div>
                        <div>{item.catagary}</div>
                        <div> {item.cost}</div>
                        </div>
                  
                )




            })};
        </div>
    )
}

export default Iphonepage

