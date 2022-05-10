import React, { createContext, useState } from 'react'
export const SampleContext = createContext()
const SampleContextProvider = (props) => {
    const Url = "http://localhost:8080"
    return (
         <SampleContext.Provider 
            value={{
                Url
             }}>
               {props.children}
         </SampleContext.Provider>
    )
}
export default SampleContextProvider