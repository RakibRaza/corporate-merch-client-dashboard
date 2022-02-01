import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import { useState } from 'react'

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const handleClick = () => {
    setShowSidebar(!showSidebar)
  }
  const removeSidebar = () => {
    setShowSidebar(false)
  }
  return (
    <>
      <Header handleClick={handleClick} />
      <Sidebar removeSidebar={removeSidebar} showSidebar={showSidebar} />
      {children}
    </>
  )
}

export default Layout;
