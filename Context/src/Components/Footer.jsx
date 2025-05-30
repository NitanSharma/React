import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext';

DataContext

const Footer = () => {
    const dtatisComing  = useContext(DataContext);
  return (
    <div>Footer {dtatisComing}</div>
  )
}

export default Footer