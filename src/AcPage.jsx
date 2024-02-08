import React from 'react'
import { Acdata } from './AcData'
import "./index.css"
import Navbar from './Navbar'
import { Link } from 'react-router-dom'


const AcPage = () => {
    return (
        <>
            <Navbar />
            <div className='pagesection'>
                {Acdata.map((item) => {

                    return (

                        <div>
                            <Link to={`/Ac/${item.id}`}>
                                <div className='pageimg'>
                                    <img src={item.img} alt=" "></img>
                                </div></Link>

                            <div className='promodal'>
                                {item.id}, {item.company},{item.cost}
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default AcPage
