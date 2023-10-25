
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import './fonts/key-tab-metal-font/KeyTabMetal-MOAJ.ttf'

import GearForm from './components/GearForm.jsx'
import Main from './components/Main.jsx'
import { useState } from 'react'

import GearList from './components/GearList.jsx'
import EditGear from './components/EditGear.jsx'
import GearPage from './components/GearPage'

function App() {
    const [mainUser, setMainUser] = useState({
      _id:'',
      firstName:'',
      lastName:'',
      email:''

    })

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />}/>
          <Route path="/gearlist" element={<GearList mainUser = {mainUser} setMainUser={setMainUser}/>}/>
          <Route path="/gearform" element={<GearForm/>}/>
          <Route path="/gear/edit/:id" element={<EditGear />}/>
          <Route path="/gear/:id" element={<GearPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
