import { GlobalStyles } from "./global.style"
import { Header } from './components/Header/Header.tsx'
import { Outlet } from "react-router-dom"

export function App() {
  return (
    <>
      <Header />
      <Outlet />
      <GlobalStyles />
    </>
  
      


    
  )
}

