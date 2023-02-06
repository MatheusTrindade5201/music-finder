import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}


export default AppRoutes