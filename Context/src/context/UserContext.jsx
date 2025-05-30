import React from 'react'

export const DataContext = React.createContext();
// this is the context that will be used to provide data to components
// it is created using React.createContext() and can be used to share data across components without prop drilling

const UserContext = ({children}) => {
        // console.log(props)
    const name = "Nitin";

  return (
    <div>
        <DataContext.Provider value={name}>
            {children}
        </DataContext.Provider>       
    </div>
  )
}

export default UserContext