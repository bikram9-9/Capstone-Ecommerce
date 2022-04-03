import Home from '../src/Routes/Home/home.component' 
import {Routes,Route} from 'react-router-dom'
import Navigation from '../src/Routes/Navigation/navigation.component.jsx'
import Cart from '../src/Pages/Cart'
import Shop from '../src/Pages/Shop'
import Authentication from './Routes/Authentication/authentication.component'
import Homepage from './Pages/Homepage'



function App() {
  return (
    <Routes>
      <Route path='/' className='navBar' element={<Navigation/>}>
        <Route  index element={<Homepage/>}/>
        <Route  path='shop' element={<Shop/>}/>
        <Route  path='cart' element={<Cart/>}/>
        <Route  path='auth' element={<Authentication/>}/>
      </Route>
    </Routes>
  );
}

export default App;
