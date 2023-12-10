import './App.css';
import { Route, Routes } from "react-router-dom"
import MenuPage from './pages/MenuPage';
import ProfilePage from './pages/ProfilePage';
import NavBar from './components/navbar/NavBar';
import OrderPage from "./pages/OrderPage"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<OrderPage/>} />
        <Route path='/menu' element={<MenuPage/>}/>
        <Route path='/prof' element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
