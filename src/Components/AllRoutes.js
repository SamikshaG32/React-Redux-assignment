import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DisplayAllEmployee from './DisplayAllEmployee';
import EditEmployee from './EditEmployee';
import AddEmployee from './AddEmployee';
import ViewEmployee from './ViewEmployee';
import FabricCanvas from '../FabricCanvas';

function AllRoutes () {
   return (
    <Router>
      <Routes>
        <Route path='/' element={<DisplayAllEmployee />}></Route>
        <Route path='/add' element={<AddEmployee />}></Route>
        <Route path='/edit/:id' element={<EditEmployee />}></Route>
        <Route path='/view/:id' element={<ViewEmployee />}></Route>
        <Route path='/view/fabricCanvass' element={<FabricCanvas />}></Route>
      </Routes>
    </Router>
   )
}

export default AllRoutes;