import style from '@/styles/Header.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LinkButton from './LinkButton'

const Header = () => {

    const [ open, setOpen ] = useState<boolean>(false)

    const navigate = useNavigate()

    return (
        <header className={style.header}>
            <div className={style.header__content}>
                <span className={style.header__logo} />
                <div onClick={() => setOpen(open ? false : true)} className={style.header__profile}>
                    <div  className={style.header__profile_container}>
                        <img className={style.picture} src='/src/assets/images/profile_icon.svg'/>
                        <p className={style.username}>Usuário01</p>
                    </div> 
                    <button className={`${style.logout__button} ${open ? style.dropdown : ''}`} onClick={() => navigate('/')}>Sair</button>
                </div>
                <nav className={style.header__links}>
                    <LinkButton 
                        path={'/app/music-list'}
                        imagePath={'/src/assets/images/list_icon.svg'}
                        buttonText={'Lista de música'}
                    />
                    <LinkButton 
                        path={'/app/discover'}
                        imagePath={'/src/assets/images/plus_icon.svg'}
                        buttonText={'Nova música'}
                    />
                </nav>
            </div>      
        </header>
    )
}

export default Header