import "./web.css";
import Image from 'next/image';

export default function Site() {
    return (
        <>
           <header className="header">
                <div className="header-block">
                    <div className="container">
                       
                        <div className="header-block-flex">
                            <div className="header-block-flex-logo">
                                <a href="#">
                                    <Image src="/img/logo.png" alt="logo" id="logo" width={100} height={100} />
                                    <p id="logo_title">SOFTIUM</p>
                                </a>
                            </div>
                            <div className="header-block-flex-number">
                                <a href="tel:+998990990011" id="call_number">
                                    <span>+998</span> 99 099 00 11
                                </a>
                            </div>
                        </div>

                        <div className="header-block-fixed">
                            <div className="header-block-fixed-menu">
                                <input type="checkbox" id="fixed_menu" className="header-fixed-menu-input" />
                                <label htmlFor="fixed_menu">
                                    <div>
                                        <span id="menu_span"></span>
                                        <span id="menu_span"></span>
                                        <span id="menu_span"></span>
                                    </div>
                                    <p id="fixed_text">Меню</p>
                                </label>

                               

                                <ul className="header-fixed-menu-list">
                                    <li><a href="#">О НАС</a></li>
                                    <li><a href="#">УСЛУГИ</a></li>
                                    <li><a href="#">ПОРТФОЛИО</a></li>
                                    <li><a href="#">ОБРАТНОЙ СВЯЗЬ</a></li>
                                    <li><a href="#">НАШИ КЛИЕНТЫ</a></li>
                                </ul>
                            </div>

                            <div className="header-block-right-content">
                               
                                <div className="header-right-content-social">
                                    <a href="#" id="social_icon"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="#" id="social_icon"><i className="fa-brands fa-square-facebook"></i></a>
                                    <a href="#" id="social_icon"><i className="fa-brands fa-instagram"></i></a>
                                </div>

                              
                            </div>
                        </div>

                        <div className="header-block-main">
                            <div className="header-block-main-center">
                                <div className="header-main-center-title">
                                    <h1>Создание сайтов</h1>
                                </div>
                                <div className="header-main-center-light">
                                    <p>Создание сайтов – это ключ к расширению аудитории, усилению бренда и росту продаж. Сегодня собственный веб-сайт стал неотъемлемой частью успешного ведения бизнеса. Наша команда с более чем пятилетним опытом профессиональной разработки предлагает не просто создание сайтов, а полноценные решения, способные вывести ваш бизнес на новый уровень.</p>
                                </div>

                                <div className="header-main-center-btn">
                                    <a href="#">
                                        Получить консультацию
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.37713 15.6427C3.98661 15.2522 3.98661 14.619 4.37713 14.2285L14.0224 4.58321C14.8501 4.45711 15.5628 5.16974 15.4367 5.99743L5.79135 15.6427C5.40082 16.0333 4.76766 16.0333 4.37713 15.6427Z" fill="white" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.9133 6.62159L8.89209 6.62158C8.33981 6.62158 7.89209 6.17387 7.89209 5.62158C7.89209 5.0693 8.33981 4.62158 8.89209 4.62158L13.9133 4.62159L13.9133 6.62159Z" fill="white" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M15.3486 6.03584L15.3486 11.0415C15.3486 11.5938 14.9009 12.0415 14.3486 12.0415C13.7963 12.0415 13.3486 11.5938 13.3486 11.0415L13.3486 6.03583L15.3486 6.03584Z" fill="white" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <a href="#about" style={{ zIndex: 999 }}>
                            <div className="scroll-downs">
                                <div className="mousey">
                                    <div className="scroller"></div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </header>

        </>
      
    )
}