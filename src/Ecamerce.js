

import React from "react";
import Landing from "./Landing";
import "./index.css"
import { Routes, Route } from 'react-router-dom'


import AcPage from "./AcPage";

import Computerpage from "./ComputerPage";
import Iphonepage from "./Iphonepage";



function Index() {
    return <div>
        <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='/Ac' element={<AcPage />}></Route>
            <Route path="/Computer" element={< Computerpage />}></Route>
            <Route path="/Iphones" element={<Iphonepage />}></Route>

            {/* <Route path='/Ac/:id' element={<Acsingle />}></Route> */}
        </Routes>
    </div>
}

export default Index;