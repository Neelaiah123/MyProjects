
import React from "react";

import { computrtdata } from "./Computerdata";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom'


const Computerpage = () => {
    return (
        <>
            <Navbar />
            <div className='pagesection'>
                {computrtdata.map((item) => {

                    return (

                        <div>
                            <Link to={`/Computerpage/${item.id}`}>
                                <div className='pageimg'>
                                    <img src={item.img} alt=" "></img>
                                </div></Link>

                            <div className='promodal'>
                                <div><strong> {item.id}</strong> </div>
                                <div> <strong> {item.company}</strong> </div>
                                <div> <strong> {item.cost}</strong> </div>
                            </div>
                        </div>
                    )
                })}

            </div>

        </>
    );

}
export default Computerpage;


