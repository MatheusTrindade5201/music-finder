import style from '@/styles/Header.module.css'
import LinkButton from './LinkButton'

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header__content}>
                <span className={style.header__logo} />
                <div className={style.header__profile}>
                    <img className={style.picture} src='src/assets/images/profile_icon.svg'/>
                    <p className={style.username}>Usiário01</p>
                </div> 
                <nav className={style.header__links}>
                    <LinkButton 
                        path={'/music-list'}
                        imagePath={'src/assets/images/list_icon.svg'}
                        buttonText={'Lista de música'}
                    />
                    <LinkButton 
                        path={'/dicovery'}
                        imagePath={'src/assets/images/plus_icon.svg'}
                        buttonText={'Nova música'}
                    />
                </nav>
            </div>      
        </header>
    )
}

export default Header