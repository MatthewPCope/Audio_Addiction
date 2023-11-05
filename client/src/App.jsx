
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import './fonts/key-tab-metal-font/KeyTabMetal-MOAJ.ttf'
import './fonts/vanessa-font/VanessaRegular-VKVw.ttf'
import './fonts/the-rockers-font/TheRockers-qZnz5.ttf'
import GearForm from './components/GearForm.jsx'
import Main from './components/Main.jsx'
import { useState } from 'react'
import WishForm from './components/WishForm.jsx'
import GearList from './components/GearList.jsx'
import EditGear from './components/EditGear.jsx'
import GearPage from './components/GearPage.jsx'
import WishList from './components/WishList.jsx'
import EditWish from './components/EditWish.jsx'
import WishPage from './components/WishPage.jsx'
import LotteryForm from './components/LotteryForm.jsx'
import LotteryList from './components/LotteryList.jsx'
import LotteryPage from './components/LotteryPage.jsx'
import EditLottery from './components/EditLottery.jsx'

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
          <Route path="/wishform" element={<WishForm/>}/>
          <Route path="/wishlist" element={<WishList/>}/>
          <Route path="/wish/edit/:id" element={<EditWish/>}/>
          <Route path="/wishpage/:id" element={<WishPage/>}/>
          <Route path="/lotteryform" element={<LotteryForm/>}/>
          <Route path="/lotterylist" element={<LotteryList/>}/>
          <Route path="/lottery/edit/:id" element={<EditLottery/>}/>
          <Route path="/lotterypage/:id" element={<LotteryPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
