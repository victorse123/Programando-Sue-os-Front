import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './views/landingpage';
import Home from './views/home';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <div>
      <Routes>
        <Route exact path='/' element ={<LandingPage/>}/>
        <Route exact path='/' element ={<Home/>}/>
      </Routes>
      </div>
    </BrowserRouter>
    </>
      
  )
}

export default App









































///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
{/* <Route exact path='/home' element ={<Home/>}/>
        <Route exact path='/home/:id' element ={<Detail/>}/>
        
        <Route exact path='/user/profile' element ={<UserProfile/>}/>
        <Route exact path='/user/profile/edit' element ={<UserEditProfile/>}/>

        <Route exact path='/create' element ={<ProtectedRoute Component={Create}/>}/>
        <Route exact path='/admin/dashboard' element ={<ProtectedRoute Component={AdminDashboard}/>}/>
        <Route exact path='/admin/editProperty/:id' element ={<ProtectedRoute Component={AdminEditProperty}/>}/>
        <Route exact path='/admin/sales' element ={<ProtectedRoute Component={AdminSalesManagement}/>}/> */}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </> */}