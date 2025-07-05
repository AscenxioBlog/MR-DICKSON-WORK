import React, { createContext } from 'react'

export const TheContext = createContext()
function ContextApp({children}) {


    

  return (
    <div>
        <TheContext.Provider>
            {children}
        </TheContext.Provider>
        
    </div>
  )
}

export default ContextApp