import style from '@/styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer__content}>
                <p className={style.copyright}>© Matheus Trindade - 2023</p>
                <div className={style.footer__links}>
                    <a className={`${style.link} ${style.linkedin}`} target='_blank' href='https://www.linkedin.com/in/matheus-trindade5201/' />
                    <a className={`${style.link} ${style.github}`} target='_blank' href='https://github.com/MatheusTrindade5201' />
                </div>
            </div>
        </footer>
    )
}

export default Footer