import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import { UserProvider } from './context/user.context';
import {  } from 'react-router-dom';
import SignUp from '../src/Pages/SignUp/SignUp'
import Navbar from './Components/NavigationBar/navigation-bar.components';
import SignIn from './Components/SignIn/sign-in.fcomponent';
import ShopPage from './Pages/Shop/shopPage';
import  {ProductsProvider} from './context/product.context'
import {CartProvider} from './context/cart.context'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
     <ProductsProvider>
       <CartProvider>
            <Navbar/>
            <Routes>
              <Route path="/" element={<App/>}/>
              <Route path="signup" element={<SignUp/>}/>
              <Route path="signIn" element={<SignIn/>}/>
              <Route path="shop" element={<ShopPage/>}/>
            </Routes>
        </CartProvider>
      </ProductsProvider>
      </UserProvider>
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
