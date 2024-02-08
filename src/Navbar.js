

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='navsection'>
                <div className='title'>
                    <h2>E-Mart</h2>
                </div>
                <div className='serach'>
                    <input type='text' placeholder='search....'></input>

                </div>
                <div className='user'>
                    <div className='user-diatilas'>
                        SingIn/SignUp

                    </div>
                    <div className='cart'>Cart

                    </div>
                </div>
            </div>
            <div className='submenu'>
                <ul>
                    <Link to='./Ac'><li>Ac</li></Link>
                    <Link to="/Computer"><li>COMPUTER</li></Link>
                    <Link to="/Iphones"><li>IPHONES</li></Link>
                    <li>TOYS</li>
                    <li>WATCHES</li>
                    <li>MEAN WAR</li>
                    <li>BOOKS</li>
                    <li>TABS</li>
                    <li>FRIDGE</li>
                    <li>TV'S</li>
                    <li>SPEAKERS</li>
                    <li>BAGS</li>
                    <li>CREAMS</li>

                </ul>
            </div>
        </>
    )
}

export default Navbar
