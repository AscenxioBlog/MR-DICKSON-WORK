import React from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FcCellPhone } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import Button from '../../ReusableComponent/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import emailjs from "@emailjs/browser";
// import SweetAlert from 'sweetalert-react';
 

function ContactComponent2() {
    let [loading, setLoading] = useState(true);
    let [mapurl , setMapurl] = useState('');

    useEffect(()=>{
        
    let mapp = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth"

    setMapurl(mapp);
    setLoading(false);

    },[]);
 


     const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        website: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_gemtnqr", 
            "template_9us6h0d", 
            formData, 
            "POzmPkkWklvfEh5IY"
        )
        .then((response) => {
            console.log("Email sent successfully!", response);
            alert("Message sent successfully!");
    //         <SweetAlert
    //     show={this.state.show}
    //     title="Demo"
    //     text="SweetAlert in React"
    //     onConfirm={() => this.setState({ show: false })}
    //   />

             // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        website: "",
        message: "",
      });
        })
        .catch((error) => {
            console.error("Email sending failed:", error);
            alert("Failed to send message. Try again!");
        });
    };


  return (
    <div>
        <div className='min-h-[300px] w-full bg-bodybg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[40%,60%] md:gap-[40px]'>
            <div className='min-h-[200px]  w-full p-[10px] box-border'>
                <div className='min-h-[200px] w-full bg-bodybg hover:border-[2px] border-green-300'>
                    <div className='flex flex-col items-center'>
                        <HiOutlineLocationMarker className='text-4xl font-extrabold font-custom' />
                        <h1 className='text-2xl font-extrabold font-custom text-boldtext'>Address Line</h1>
                    </div>
                    <div className='text-center font-custom text-[1.2rem] font-light  dark:text-black'>
                       <h1> Bowen St,New York,Ny</h1>
                       <h1>103301, USA</h1>
                    </div>
                    
                </div>
                <div className='min-h-[200px] w-full bg-bodybg hover:border-[2px] border-green-300 mt-[20px]'>
                    <div className='flex flex-col items-center'>
                        <FcCellPhone className='text-2xl font-extrabold font-custom' />
                        <h1 className='text-2xl font-extrabold font-custom text-boldtext'>Phone Number</h1>
                    </div>
                    <div className='text-center font-custom text-[1.2rem] font-light dark:text-black'>
                        <h1>+234 90 4488 4589</h1>
                        <h1>+234 90 4488 4589</h1>
                    </div>
                </div>
                <div className='mt-[20px] min-h-[200px] w-full bg-bodybg hover:border-[2px] border-green-300'>
                <div className='flex flex-col items-center'>
                        <FcClock className='text-4xl font-extrabold font-custom' />
                        <h1 className='text-2xl font-extrabold font-custom text-boldtext'>Opening Hours</h1>
                    </div>
                    <div className='text-center font-custom text-[1.2rem] font-light dark:text-black '>
                        <h1>Monday - Friday</h1>
                        <h1>09:00 AM - 05:00 PM</h1>
                    </div>
                </div>
            </div>
            <div className='p-[10px] dark:text-black md:p-0'>
                <form action="" onSubmit={handleSubmit}>
                    <h1  className='font-custom font-bold text-boldtext  text-[1.2rem]  mt-4'>Send us a Message:</h1>
                    <input type="text" name='name' placeholder='  Enter your Name'value={formData.name} onChange={handleChange}
                    className='h-[40px] dark:bg-white w-full md:w-[90%] lg:w-[40%] mt-10 active:outline-blue-700 hover:outline-blue-700'required /> <br />
                    {/* <input type="text" placeholder='  Enter your number ' className='h-[40px] dark:bg-white w-full md:w-[90%] mt-8 lg:w-[40%] lg:ml-10 md:mt-8 lg:mt-10 active:outline-blue-700 hover:outline-blue-700'required /> */}
                    <input type="number" name='phone' placeholder='  Enter your number ' value={formData.phone || ""} onChange={handleChange} className='h-[40px] dark:bg-white w-full md:w-[90%] mt-8 lg:w-[40%] md:mt-8 lg:mt-10 active:outline-blue-700 hover:outline-blue-700' required /> 
                    <input type="text" name='email' placeholder='  Enter your email 'value={formData.email || ""} onChange={handleChange} className='h-[40px] w-full dark:bg-white md:w-[90%] mt-8 lg:w-[40%] lg:ml-10 md:mt-8 lg:mt-10 active:outline-blue-700 hover:outline-blue-700' />
                    <textarea name="message" id="" className='w-full md:w-[90%] dark:bg-white lg:w-[84%] mt-10 h-[120px] active:outline-blue-700 hover:outline-blue-700' value={formData.message} onChange={handleChange}></textarea>
                    <Button
                     className='btn  bg-textc text-bodybg hover:bg-textc hover:bg-opacity-75 mt-8'
                     type ='submit'
                     label = ' SEND MESSAGE'
                    
                    />

                </form>
                <section className='mt-10 p-[10px]'>
                    {loading?(
                        <p>Loading Map.....</p>
                    ):(
                        <iframe src={mapurl}  style={{ width: "100%", height: "300px" }} frameborder="0"></iframe>
                    )}

                </section>




            </div>

        </div>
    </div>
  )
}

export default ContactComponent2