import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DicoverMusicPage } from "./pages/DiscoverMusic"
import { MusicListProvider } from "./context/musicListContext"
import Login from "./pages/Login"
import MusicList from "./pages/MusicList"
import StandardPage from "./pages/StandardPage"
import MusicDetailPage from "./pages/MusicDetails"

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MusicListProvider>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/app" element={<StandardPage />}>
              <Route path="/app/music-list" element={<MusicList />}/>
              <Route path="/app/discover" element={<DicoverMusicPage />} />
              <Route path="/app/:id" element={<MusicDetailPage />}/>
            </Route>
        </Routes>
      </MusicListProvider>
    </BrowserRouter>
  )
}


export default AppRoutes