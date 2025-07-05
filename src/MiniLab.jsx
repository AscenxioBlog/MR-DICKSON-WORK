import React from 'react'
import MainHeader from './ConstantComponent/HeaderComponent/MainHeader'
import HomeComponent from './UI/HomeComponent/HomeComponent'
import AboutComponent from './UI/AboutComponent/AboutComponent'
// import ServiceComponent from './UI/ServicesComponent/ServiceComponent'
// import ResearchComponent from './UI/ResearchComponent/ResearchComponent'
// import TeamComponent from './UI/TeamComponent/TeamComponent'
import ContactComponent from './UI/ContactComponent/ContactComponent'
import ShopComponent from './UI/ShopComponent/ShopComponent'
import FAQComponent from './UI/FAQComponent/FAQComponent'
import CheckoutComponent from './UI/CheckoutComponent/CheckoutComponent'
// import PricingComponent from './UI/PricingComponent/PricingComponent'
import CartComponent from "./UI/CartComponent/CartComponent";
import FooterComponent from "./ConstantComponent/FooterComponent/FooterComponent";
import { Route, Routes, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Authentication from "./UI/AuthenticationComponent/Authentication";
import Admin from './UI/AdminComponent/Admin'
import AddProduct from './UI/AdminComponent/AddProduct'
import ViewAllproduct from './UI/AdminComponent/ViewAllproduct'
import ViewOrder from './UI/AdminComponent/ViewOrder'
import Dashboard from './UI/AdminComponent/Dashboard'
import AdminSignUp from './UI/AuthenticationComponent/AdminSignUp'
import Settings from './UI/AdminComponent/Setting'
import Adder from './UI/AdminComponent/Adder'
import ProductSkeleton from './ReusableComponent/ProductSkeleton'
import ProductDetails from './UI/ProductDetailsPage/ProductDetails'
import OrderHistoryPage from './UI/OrderComponents/OrderHistoryPage'
import OrderDetails from './UI/OrderComponents/OrderDetails'
import Register from './UI/AuthenticationComponent/Register'
import ForgotPassword from './UI/AuthenticationComponent/ForgotPassword'
import ResetPassword from './UI/AuthenticationComponent/ResetPassword'
import ProtectedRoute from './UI/AuthenticationComponent/ProtectedRoute'
import SuccessfulPayment from './UI/CheckoutComponent/SuccessfulPayment'
import UserDashboard from './ConstantComponent/HeaderComponent/UserDashboard'
import Index from './UI/Index/Index'
import Shop from './UI/Shop/Shop'
import SignupForm from './UI/SignupForm/SignupForm'
import LoginForm from './UI/SignupForm/LoginForm'
import NotFound from './UI/NotFound/NotFound'
import ProductPage from './UI/ProductDetailsPage/Product1'
import LoadingScreen from './UI/LoadingScreen/LoadingScreen'


function MiniLab() {
    const location = useLocation()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

        const hideHeaderFoter = location.pathname === '/Checkuser' || 
         location.pathname === '/aclab' || 
         location.pathname === '/register' || 
         location.pathname === '/login' || 
        
        location.pathname.startsWith('/accon');
  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div>
         {!hideHeaderFoter && <MainHeader />}
                <Routes>
                    <Route path="/" element={<Index />} />                     <Route path="/About" element={<AboutComponent />} />
                    {/* <Route path="/Service" element={<ServiceComponent />} /> */}
                    {/* <Route path="/Research" element={<ResearchComponent />} /> */}
                    {/* <Route path="/Team" element={<TeamComponent />} /> */}
                    <Route path="/Contact" element={<ContactComponent />} />
                    <Route path="/cart" element={<CartComponent />} />
                    <Route path="/Shop" element={<Shop />} />
                    <Route path="/FAQ" element={<FAQComponent />} />
                    {/* <Route path="/Checkout" element={<CheckoutComponent />} /> */}
                    <Route
                      path="/checkout"
                      element={
                        <ProtectedRoute>
                          <CheckoutComponent />
                        </ProtectedRoute>
                      }
                    />
                    <Route path="/checkuser" element={<LoginForm />} />
                    <Route path="/order-history" element={<OrderHistoryPage />} />
                    <Route path="/order/:orderId" element={<OrderDetails />} />
                    <Route path="/aclab" element={<AdminSignUp />} />
                    <Route path="/accon" element={<Admin />} >
                        <Route index element={<Dashboard/>}/>
                        <Route path='/accon/dashboard' element={<Dashboard/>}/>
                        <Route path='/accon/productlist' element={<ViewAllproduct/>}/>
                        <Route path='/accon/order' element={<ViewOrder/>}/>
                        <Route path='/accon/addproduct' element={<AddProduct/>}/>
                        {/* <Route path='/accon/addproduct' element={<Adder/>}/> */}
                        <Route path='/accon/settings' element={<Settings/>}/>
                    </Route>
                    <Route path="/sk" element={<ProductSkeleton />} />
                    <Route path="/singleproduct/:id" element={<ProductDetails />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/register" element={<SignupForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/password-reset" element={<ForgotPassword/>}/>
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="order-success" element={<SuccessfulPayment />} />
                    <Route path="profile" element={<UserDashboard />} />
                    <Route path="*" element={<NotFound />} />

                    {/* <Route path="/Pricing" element={<PricingComponent />} /> */}
                </Routes>

               
                {!hideHeaderFoter &&  <FooterComponent/>}
    </div>
  )
}

export default MiniLab