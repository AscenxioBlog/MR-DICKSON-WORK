import React from 'react'
import ContactComponent1 from './ContactComponent1'
import ContactComponent2 from './ContactComponent2'

function ContactComponent() {
  return (
    <div className='mt-[0px]  bg-white overflow-x-hidden'>
      <ContactComponent1/>
      <ContactComponent2/>
    </div>
  )
}

export default ContactComponent