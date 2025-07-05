import React, { useContext, useEffect, useState } from 'react'
import { BsLungs } from "react-icons/bs";
import { MdDialpad } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Button from '../../ReusableComponent/Button';
import { FaYoutube } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";
import subpic from './Subnavpictures/subpic1.jpg'
import subnav2 from './Subnavpictures/subnav2.jpg'
import subnav3 from './Subnavpictures/subnav3.jpg'
import { FaUser } from "react-icons/fa";
import { CartContext } from '../../ReusableComponent/CartContext';
import UserPopup from '../UserProfile/UserPopup';
import { AuthContxt } from '../../UI/AuthenticationComponent/AuthContext';



function HeaderComponent() {
    const { cart } = useContext(CartContext); // Access cart from context
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); 
    let [nav, setNav] = useState('-100%')
    let {handleUserIconClick} = useContext(AuthContxt)
    

    function sidenav() {
        if (nav =='-100%') {
            setNav('0')
            
        } else {
            setNav('-100%')
            
        }
        
    }


  return (
    <div className='min-h-[30px] w-full fixed top-0 z-50'>
        <div className='h-[90px] bg-[#b7d0d6]  flex items-center p-[10px] box-border lg:hidden '>
            <div className=' gap-1 flex items-center justify-start w-[60%]  '>
                <h1  className='font-bold text-3xl text-textc '><BsLungs /></h1>
                <h1 className=' font-custom text-[1rem] text-center font-bold text-boldtext'> BABAKAZO STORE</h1>
            </div>
            <div className='flex justify-end gap-4 w-[40%] p-[20px] box-border items-center'>
                <div className='cursor-pointer text-[1.3rem] w-[60px] flex gap-3'>
                <Link 
  to={'/cart'} 
  className='relative flex items-center justify-center  rounded-md'
>
  <FaBasketShopping className='dark:text-black text-lg' />
  
  {totalItems > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
      {totalItems}
    </span>
  )}
</Link>
                    <button className=' cursor-pointer' onClick={handleUserIconClick}>
                        <FaUser />
                    </button>                            
                 </div>
                <Button
                        height='50px'
                        // width ='4000px'
                        className=' bg-textc text-2xl font-bold p-[10px] dark:text-black'
                        label = 'Ξ'
                  k      onClick = {sidenav}
                    />
                   
            </div>
        </div>




        {/* for large screen  */}
        <div className='min-h-[10px] bg-[#E3EEB2] hidden lg:grid grid-cols-[25%,75%] dark:text-black w-full overflow-x-hidden '>
            <div className=' gap-1 flex items-center justify-center'>           
                    <h1  className='font-bold text-3xl text-textc '><BsLungs /></h1>
                    <h1 className=' font-custom text-[1.2rem] font-bold text-boldtext text-center'> BABAKAZO GADGET  </h1>
            </div>
            <div className=' grid grid-cols-1 w-full '>
                <div className='grid grid-cols-3 p-[10px] border-b-[2px] border-b-white  '>
                    <div className='flex items-center p-[10px]'>
                        <h1 className='text-boldtext text-2xl font-bold'><MdDialpad /></h1>
                        <h1 className='font-custom text-[19px] font-semibold'> HELP DESK: +234 80 9402 5524</h1>
                    </div>
                    <div className='flex items-center'>
                        {/* <h1 className='text-boldtext text-2xl font-bold'><IoTimeOutline /></h1>
                        <h1 className='font-custom text-[17px] font-semibold dark:text-black'>MONDAY - FRIDAY 09:00AM-05:00PM</h1> */}
                    </div>
                    <div className='flex items-center'>
                          <h1 className='font-custom text-[19px] font-semibold'>MONDAY - FRIDAY 09:00AM-05:00PM</h1>
                    </div>
                </div>
                <div className=' grid grid-cols-[70%,30%] gap-6 items-center'>
                    <div className='p-[5px] box-border font-custom text-[20px] font-semibold'> 
                    <ul className='flex gap-[40px] justify-center'>
                            <li className='nav-item hover:border-b-[2px] hover:border-boldtext'><Link to={'/'}>HOME</Link></li>
                            <li className='nav-item hover:border-b-[2px] hover:border-boldtext'><Link to={'/Shop'}>SHOP</Link></li>

                            <li className='nav-item hover:border-b-[2px] hover:border-boldtext'><Link to={'/About'}>ABOUT</Link></li>
                           
                            <li className='nav-item hover:border-boldtext hover:border-b-[2px]'><Link to={'/Contact'}>CONTACT</Link></li>
                        </ul>
                    </div>
                    
                    <div className='grid gap-2 grid-cols-[25%,75%]'>
                        <div className='flex justify-center items-center gap-3'>
                           
                            {/* <div>
                            <Button
                                className=' text-2xl bg-textc h-[50px]  font-bold p-[10px]'
                                label = 'Ξ'
                                onClick = {sidenav}
                            /> */}
                            {/* </  div> */}
                            <button className=' cursor-pointer' onClick={handleUserIconClick}>
                                <FaUser />
                            </button>   
                                
                            <div className='cursor-pointer text-[1.3rem]'>
                            <Link 
                                    to={'/cart'} 
                                    className='relative flex items-center justify-center  rounded-md'
                                    >
                                    <FaBasketShopping className='dark:text-black text-lg' />
                                    
                                    {totalItems > 0 && (
                                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                        {totalItems}
                                        </span>
                                    )}
                                    </Link>                          
                            </div>



                        </div>
                        <div className='flex items-center justify-center  text-bodybg font-custom font-semibold text-[1.2rem] w-[90%]'>
                            <Link ><h1></h1></Link>
                        </div>
                    </div>

                </div>

            </div>
        
        </div>



                        {/* SIDENAV DISPLAY  */}

        <div onClick ={sidenav} className=' absolute bg-[#00000083] min-h-[1000px] z-[2] top-[0px] w-full flex justify-end 'style={{right:nav, transition:'0.3s',}}>

            <div className=" min-h-[1000px] w-[75%] bg-[white] flex flex-col gap-2 p-[10px]">
                <div className=' gap-4 flex items-center justify-between  '>   
                <div className='flex'>
                    <h1  className='font-bold text-2xl text-textc '><BsLungs /></h1>
                    <h1 className=' font-custom text-[1rem] font-bold text-boldtext'> ACCON SCIENTIFIC/ <br /> LAB EQUIPMENT </h1>    
                </div>        
              
                    <Button
                        height='50px'
                        width ='100px'
                        className='bg-boldtext'
                        label = '✖'
                        onClick ={sidenav}
                    
                    />
            </div>
                        {/* THIS PART OF THE SIDENAV IS HIDDEN FOR LARGE SCREEN  */}
            <section className='p-[10px] lg:hidden  dark:text-white  space-y-4'>
                <div className='border-b-[1px] border-b-white'>
                  <h1 className='font-custom font-semibold text-[19px] lg:text-[24px] hover:text-boldtext'onClick={sidenav} > <Link to={'/'}>HOME</Link> </h1>
                </div>
                <div className='flex items-center justify-between border-b-[1px] border-b-white min-h-[20px]'>
                    <h1 className='font-custom font-semibold text-[19px] lg:text-[24px] hover:text-boldtext'  onClick={sidenav}><Link to={'/About'}>ABOUT</Link></h1>
                    <h1 className='font-custom text-[25px] font-semibold'></h1>
                </div>

                <div className='flex items-center justify-between border-b-[1px] border-b-white min-h-[20px]'>
                    <h1 className='font-custom font-semibold text-[19px] lg:text-[24px] hover:text-boldtext'  onClick={sidenav}> <Link to={"/Service"}>SERVICES</Link></h1>
                    <h1 className='font-custom text-[25px] font-semibold'></h1>
                </div>


                <div className='flex items-center justify-between border-b-[1px] border-b-white min-h-[20px]'>
                    <h1 className='font-custom font-semibold text-[19px] lg:text-[24px] hover:text-boldtext'  onClick={sidenav}><Link to={"/Shop"}>SHOP</Link></h1>
                    <h1 className='font-custom text-[25px] font-semibold'></h1>
                </div>


                <div className='flex items-center justify-between border-b-[1px] border-b-white min-h-[20px]'>
                    <h1 className='font-custom font-semibold text-[19px] lg:text-[24px] hover:text-boldtext'  onClick={sidenav}> <Link to={"/FAQ"}>FAQs</Link></h1>
                    <h1 className='font-custom text-[25px] font-semibold'></h1>
                </div>


                <div className='flex items-center justify-between border-b-[1px] border-b-white'>
                    <h1 className='font-custom font-semibold text-[19px] lg:text-[24px] hover:text-boldtext '  onClick={sidenav}><Link to={'/Team'}>TEAM</Link></h1>
                </div>
                <div className='flex items-center justify-between border-b-[1px] border-b-white'>
                    <h1 className='font-custom font-semibold text-[19px] lg:text-[24px] hover:text-boldtext '  onClick={sidenav}><Link to={'/Contact'}>CONTACT</Link></h1>
                </div>
            </section>

                    {/* THIS PART OF SIDENAV IS TO BE SHOWN ON THE LARGE SCREEN  */}
         
         

            <div className='mt-[20px] p-[10px] lg:p-[20px] space-y-4'>
                <h1 className='lg:text-2xl font-custom dark:text-white'>CONTACT US</h1>
                <h1 className='hover:text-[red] '>⭐<a href="#" className='font-light font-custom text-[17px] md:text-[20px] lg:text-3xl'> 16, Old Ojo Road, Maza-Maza, Lagos-State</a></h1>

                <h1 className='hover:text-[red] '>⭐<a href="#" className='font-light font-custom text-[17px] md:text-[20px] lg:text-3xl'> 41, Asogbon Street, Isale-Eko, Islad Lagos</a></h1>
                <h1 className='hover:text-[red] '>⭐<a href="#" className='font-light font-custom text-[17px] md:text-[20px] lg:text-3xl'> +234 80 9402 5524</a></h1>

                <h1 className='hover:text-[red] '>⭐<a href="#" className='font-light font-custom text-[17px] md:text-[20px] lg:text-3xl'> +234 80 3742 8180</a></h1>
                <h1 className='hover:text-[red] '>⭐<a href="#"className='font-light font-custom text-[17px] md:text-[20px] lg:text-3xl '> accon@gmail.com</a></h1>

                
            </div>
        

           

        

            </div>
            
          

                

         </div>
         {/* <Test/> */}
         <UserPopup/>

    </div>
  )
}

export default HeaderComponent