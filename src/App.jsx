import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SideNavbar from './Components/SideNavbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import TopNavrbar from './Components/TopNavrbar'
import Dashboard from './Pages/Dashboard'
import Alerts from './Pages/Alerts'
import Badges from './Pages/Badges'
import Buttons from './Pages/Buttons'
import Cards from './Pages/Cards'
import Layout from './Pages/Layout'
import Pagination from './Pages/Pagination'
import Popover from './Pages/Popover'
import Tooltips from './Pages/Tooltips'

function App() {
  return (
    <Router>
      <div>
        <TopNavrbar />
        <div className='main-container'>
          <SideNavbar />
          <div className='content'>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/alerts' element={<Alerts />} />
              <Route path='/badges' element={<Badges />} />
              <Route path='/buttons' element={<Buttons />} />
              <Route path='/cards' element={<Cards />} />
              <Route path='/layout' element={<Layout />} />
              <Route path='/pagination' element={<Pagination />} />
              <Route path='/popover' element={<Popover />} />
              <Route path='/tooltips' element={<Tooltips />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
