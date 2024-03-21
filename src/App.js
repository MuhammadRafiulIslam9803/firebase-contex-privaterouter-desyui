import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Mian from './layout/Mian';
import Home from './Components/Home';
import Product from './Components/Product';
import About from './Components/About';
import Login from './Components/Login';
import REgistration from './Components/REgistration';
import PrivateRouter from './PrivateRouter/PrivateRouter';


function App() {

  const router = createBrowserRouter([
    {path: '/',
  element : <Mian></Mian> ,
  children : [
    { path : '/', element :<Home></Home>},
    { path : 'home', element :<PrivateRouter><Home></Home></PrivateRouter>},
    { path : 'product', element :<PrivateRouter><Product></Product></PrivateRouter>},
    { path : 'about', element :<About></About>},
    { path : 'login', element :<Login></Login>},
    { path : 'registretion', element :<REgistration></REgistration>},

  ]},
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
