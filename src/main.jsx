
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SearchPage from './RouteVariable/routevariable.jsx'
import {  createBrowserRouter, RouterProvider,} from "react-router-dom";
import CategoryRoute from './CatagoryRoute/Categoryroute.jsx';
import ShoppingRoute from './ShoppingRoute/Shoppingroute.jsx';
import AccountNav from './BottomNav/Components/AccountNav.jsx';
import {Provider} from 'react-redux'
import store from './store.js'
import Setting from './pages/settings/setting.jsx'
import RegisterPage from './components/account/Register.jsx'
import Nav from './nav-bor/header.jsx';
import Footer from './Footer-section/footer.jsx';
import SignInPage from './components/account/Sign.jsx';
import ChangePassword from './components/account/changePassword.jsx';
import FloatingButton from './components/floatingButton/Flotingbutton.jsx';


  const router = createBrowserRouter(
    [
    {
      path: "/",
      element: <App/>,
    },
    {
    path:"/account/register",
    element:<RegisterPage/>
    },
    {
      path:"/account/signIn",
      element:<SignInPage/>
      },
      {
        path:"/account/changePassword",
        element:<ChangePassword/>
    },
    {
      path:"/category/:categoryName",
      element:<CategoryRoute/>
    },
   {
    path:"/shopping/:productId",
    element:<ShoppingRoute/>
   },
    {
      path:"/settings",
      element:<Setting/>
    },
    {
      path:"/account",
      element:<AccountNav/>
    },
    {
      path:"/home",
      element:<App/>
    },
    {
      path:"/shop1",
      element:<CategoryRoute/>
    },
    {
      path:"/home1",
      element:<App/>
    },
    {
      path:"/Search/:id",
      element:<SearchPage/>
    },
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Nav/>
    <FloatingButton/>
      <RouterProvider router={router} />
      <Footer/>
  </Provider>,
)
