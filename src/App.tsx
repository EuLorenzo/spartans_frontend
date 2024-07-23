import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { GlobalStyles } from "./global.style"

export function App() {
  return (
    <BrowserRouter>
    
      <Router />
      <GlobalStyles />
    </BrowserRouter>

    
  )
}

