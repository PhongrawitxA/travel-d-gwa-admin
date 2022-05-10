import React, { createContext, useState } from 'react'
export const SampleContext = createContext()
const SampleContextProvider = (props) => {
    const Url = "https://traveldgwa-backend.herokuapp.com/"
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