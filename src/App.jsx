import { Route, Routes } from 'react-router'
import MainPage from './pages/MainPage'
import FurnituresView from './pages/furnitures/FurnituresView'
import AboutView from './pages/about/AboutView'
import AccessoriesView from './pages/accessories/AccessoriesView'
import DecorView from './pages/decor/DecorView'
import RugsView from './pages/rugs/RugsView'
import LightView from './pages/lights/LightView'
import NewinView from './pages/newin/NewinView'
import SiginView from './pages/signin/SigninView'
import SignupView from './pages/signup/SignupView'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/newin" element={<NewinView />}/>
        <Route path="/furnitures" element={<FurnituresView />}/>
        <Route path="/lights" element={<LightView />}/>
        <Route path="/rugs" element={<RugsView />}/>
        <Route path="/decor" element={<DecorView />}/>
        <Route path="/accessories" element={<AccessoriesView />}/>
        <Route path="/about" element={<AboutView />}/>
        <Route path="/signin" element={<SiginView />}/>
        <Route path="/signup" element={<SignupView />}/>
      </Routes>

    </>
  )
}

export default App