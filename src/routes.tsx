import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import StandardPage from "./pages/StandardPage"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<StandardPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default AppRoutes