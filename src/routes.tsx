import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DicoverMusicPage } from "./pages/DiscoverMusic"
import Login from "./pages/Login"
import MusicList from "./pages/MusicList"
import StandardPage from "./pages/StandardPage"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<StandardPage />}>
          <Route path="/app/music-list" element={<MusicList />}/>
          <Route path="/app/discover" element={<DicoverMusicPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default AppRoutes