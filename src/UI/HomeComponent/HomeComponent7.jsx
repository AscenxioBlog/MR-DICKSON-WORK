import React, { useEffect, useRef, useState } from 'react';
import appoint from './HomePictures/appoint.png'
import Button from '../../ReusableComponent/Button';

export default function HomeComponent7() {
    const [borders, setBorders] = useState(0);
    const [bioborder, setBioBorder] = useState(0);
    const [histborder, setHistBorder] = useState(0);
    const [alleborder , setAlleBorder] = useState(0);
    const watchref = useRef(null)
    const hasStartedCounting = useRef(false);

    useEffect(() => {
      const watch = new IntersectionObserver(
        (entries) => {
          const  entry = entries[0];
            if (entry.isIntersecting && !hasStartedCounting.current) {
                hasStartedCounting.current = true;
                console.log('element is in view')
                // watch.disconnect();
            startcounters()

                
            }
        }
      );
      if (watchref.current) {
        watch.observe(watchref.current)
        
      }
    
      return () => {
        if (watchref.current) {
            watch.unobserve(watchref.current);      
        }
        
        
      };
    }, [])
    

      

    // Increment the borders percentage from 0 to what i set it using setInterval
    useEffect(() => {
        
        let counter = setInterval(() => {
          setBorders(prevBorders => {
            if (prevBorders >= 80) {
              return 80;
            }
            return prevBorders + 1;
          });
              setBioBorder(prevvBorders=>{
              if (prevvBorders >= 75) {
                  return 75;            
              }
              return prevvBorders + 1;
            });
            setHistBorder(prevBorders =>{
              if (prevBorders >= 90) {
                  return 90;     
              }
              return prevBorders + 1
            })
            setAlleBorder(prevBorders=>{
              if (prevBorders >= 55) {
                  return 55;    
              }
              return prevBorders + 1
            })
        }, 40); 
      
      
        return () => {
          clearInterval(counter); // Cleanup on unmount
        };
      }, []);

    

    return (
      <div>
        <div className='min-h-[200px] bg-bodybg w-full p-[10px] box-border'>
          <div className='min-h-[300px]  w-full'>
            <div className='flex flex-col items-center mt-12'>
              <h1 className='relative font-custom font-semibold text-[19px] text-boldtext before:w-[30px] before:h-[2px] before:bg-boldtext flex gap-1 items-center after:w-[30px] after:h-[2px] after:bg-boldtext'>
                WHO WE ARE
              </h1>
              <h1 className='font-custom text-4xl font-medium'>
                Why Choose Us
              </h1>
            </div>

            <div className='min-h-[400px] w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3' ref={watchref}>
                <div className=' p-[10px] flex flex-col items-center mt-[30px]'>
                    <div className=" h-[200px] w-[200px] bg-white rounded-[50%] flex justify-center items-center">
                            <div className="pman">
                                    {/* Circular Progress Container */}
                                <div className="progress-circle flex justify-center items-center" style={{ "--percentage": borders }}>
                                    <div className=" h-[160px] w-[160px] bg-white rounded-[50%] flex justify-center items-center">
                                        <h1 className="text-4xl font-semibold font-custom">{borders}%</h1>
                                                
                                    </div>                  
                                </div>
                            </div>
                    </div>
                        <div className='mt-[10px]'>
                        <h1 className='font-custom text-3xl font-medium'>MEDICAL RESEARCH</h1>
                        </div>
               </div>

              <div className=' p-[10px] flex flex-col items-center mt-[30px]'>
                <div className=" h-[200px] w-[200px] bg-white rounded-[50%] flex justify-center items-center">
                    <div className='h-[180px] w-[180px] bg-[gray] rounded-[50%]'>
                        <div className='h-[180px]  w-[180px] rounded-[50%] flex justify-center items-center bioborder' style={{'--bioborder':bioborder}}>
                            <div className=' h-[160px] w-[160px] bg-white rounded-[50%] flex justify-center items-center' >
                                <h1 className='text-4xl font-semibold font-custom'>{bioborder}%</h1>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='mt-[10px]'>
                        <h1 className='font-custom text-3xl font-medium'>BIOTECHNOLOGY</h1>
                     </div>
              </div>
              <div className=' p-[10px] flex flex-col items-center mt-[30px]'>
                    <div className=' h-[200px] w-[200px] bg-white rounded-[50%] flex justify-center items-center'>
                        <div className='h-[180px] w-[180px] bg-[gray] rounded-[50%]'>
                            <div className='h-[180px]  w-[180px] rounded-[50%] flex justify-center items-center histborder'style={{'--histborder':histborder}}>
                                <div className=' h-[160px] w-[160px] bg-white rounded-[50%] flex justify-center items-center' >
                                <h1 className='text-4xl font-semibold font-custom'>{histborder}%</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[10px]'>
                        <h1 className='font-custom text-3xl font-medium'>HISTOPATOLGY</h1>
                     </div>
              </div>
              <div className=' p-[10px] flex flex-col items-center mt-[30px] '>
                     <div className=' h-[200px] w-[200px] bg-white rounded-[50%] flex justify-center items-center'>
                        <div className='h-[180px] w-[180px] bg-[gray] rounded-[50%]'>
                            <div className='h-[180px]  w-[180px] rounded-[50%] flex justify-center items-center alleborder'style={{'--alleborder':alleborder}}>
                                <div className=' h-[160px] w-[160px] bg-white rounded-[50%] flex justify-center items-center' >
                                <h1 className='text-4xl font-semibold font-custom'>{alleborder}%</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[10px]'>
                        <h1 className='font-custom text-3xl font-medium'>ALLERGOLOGY</h1>
                     </div>

              </div>
            </div>
          </div>
          <div className='min-h-[600px] w-full grid grid-cols-1 p-[10px] lg:grid lg:grid-cols-[70%,30%] lg:relative'>
            <div className='min-h-[200px] w-full  bg- lg:relative'>
                <img src={appoint} height='100%' width='100%' alt="" />

            </div>
            <div className='min-h-[200px] bg-white w-full lg:hidden'>
                <div className='p-[10px] min-h-[50px] '>
                    <h1 className='font-custom font-semibold text-2xl'> Book your visit </h1>
                </div>
                <section className='p-[10px] box-border'>
                    <form action="">
                        <input type="text" placeholder=' Your name' className='h-[50px] w-[100%] dark:bg-bodybg hover:outline-[green]' required/>
                        <input type="email" placeholder='  Mail' className='h-[50px] w-[100%] dark:bg-bodybg mt-[20px] hover:outline-[green]' required/>
                        <input type="text" placeholder='  Medical Research' className='h-[50px] w-[100%] dark:bg-bodybg mt-[20px] hover:outline-[green]' required/>
                        <input type="date"  className='h-[50px] w-[100%] mt-[20px] hover:outline-[green] dark:bg-bodybg' required/>
                        <textarea name="" id="" placeholder=' Type your message' className='mt-[20px] dark:bg-bodybg h-[140px] w-full hover:outline-[green]'></textarea>
                        <section className='min-h-[100px] md:flex items-center justify-between'>
                            <div>
                                <Button
                                type ='submit'
                                className ='btn  bg-textc hover:bg-textc text-bodybg w-[200px]'
                                label = 'BOOK NOW'
                                // onClick={()=>alert('Your Details has Been Submitted')}
                                
                                />
                            </div>
                            <div>
                                <h1>24/7 Emergency Service: <span className='text-textc'> +234 90 3349 0389</span> </h1>
                            </div>

                        </section>

                      
                    </form> 
                </section>
            </div>


                    {/* this part is for large screen */}
            <div className='min-h-[200px] bg-bodybg  hidden lg:block relative'>

            </div>
            <div className='min-h-[100px] bg-white hidden absolute w-[50%] right-[100px] top-[50px] lg:block'>
                <div className='p-[10px] min-h-[50px] '>
                    <h1 className='font-custom font-semibold text-2xl'> Book your visit </h1>
                </div>
                <section className='p-[10px] box-border'>
                    <form action="">
                        <input type="text" placeholder=' Your name' className='h-[50px] w-[100%]  dark:bg-bodybg hover:outline-[green]' required/>
                        <input type="email" placeholder='  Mail' className='h-[50px] w-[100%] dark:bg-bodybg mt-[20px] hover:outline-[green]' required/>
                        <input type="text" placeholder='  Medical Research' className='h-[50px] dark:bg-bodybg w-[100%] mt-[20px] hover:outline-[green]' required/>
                        <input type="date"  className='h-[50px] w-[100%] mt-[20px] hover:outline-[green] dark:bg-bodybg' required/>
                        <textarea name="" id="" placeholder=' Type your message' className='mt-[20px] h-[140px] dark:bg-bodybg w-full hover:outline-[green]'></textarea>
                        <section className='min-h-[100px] md:flex items-center justify-between'>
                            <div>
                                <Button
                                type ='submit'
                                className ='btn hover:bg-textc hover:opacity-60 bg-textc text-bodybg w-[200px]'
                                label = 'BOOK NOW'
                                // onClick={()=>alert('Your Details has Been Submitted')}
                                
                                />
                            </div>
                            <div>
                                <h1>24/7 Emergency Service: <span className='text-textc'> +234 90 3349 0389</span> </h1>
                            </div>

                        </section>

                      
                    </form>
                </section>
            </div>

          </div>
        </div>
      </div>
    );
}
