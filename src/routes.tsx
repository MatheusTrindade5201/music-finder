import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MusicListProvider } from "./context/musicListContext"
import Login from "./pages/Login"
import MusicList from "./pages/MusicList"
import StandardPage from "./pages/StandardPage"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MusicListProvider>
        <Routes>
          <Route path="/" element={<Login />} />
              <Route path="/app" element={<StandardPage />}>
                  <Route index element={<MusicList />}/>
              </Route>
        </Routes>
      </MusicListProvider>
    </BrowserRouter>
  )
}


export default AppRoutes