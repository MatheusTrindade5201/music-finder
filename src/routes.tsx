import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DicoverMusicPage } from "./pages/DiscoverMusic"
import { MusicListProvider } from "./context/musicListContext"
import Login from "./pages/Login"
import MusicList from "./pages/MusicList"
import StandardPage from "./pages/StandardPage"
import { useAuthentication } from "./context/authenticationContext"

const AppRoutes = () => {

  const { token, getCurrentToken } = useAuthentication()
  const currentToken = getCurrentToken() 
  

  return (
    <BrowserRouter>
        <MusicListProvider>
          <Routes>
              <Route path="/" element={<Login />} />
              {currentToken === token ? 
              <Route path="/app" element={<StandardPage />}>
                <Route path="/app/music-list" element={<MusicList />}/>
                <Route path="/app/discover" element={<DicoverMusicPage />} />
              </Route> :
              <Route path="/*" element={<p>Você não está logado</p>} />
            }
              
          </Routes>
        </MusicListProvider>
    </BrowserRouter>
  )
}


export default AppRoutes