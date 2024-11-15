'use client'
import { useServices } from '@/app/api/query/query'
import './servives.css'

export default function Services() {
    const {data:services,isLoading,isError} = useServices()     
    
    function toggleDropdown(): void {
        throw new Error('Function not implemented.')
    }

    function selectLanguage(arg0: string): void {
        throw new Error('Function not implemented.')
    }

    return (
        <>
            <header className="header">
                <div className="header-block">
                    <div className="container">
                        <div className="header-block-navbar">
                            <div className="header-block-navbar-inner">
                                <div className="header-block-navbar-logo">
                                    <img src="img/logo.png" alt="logo" />
                                </div>

                                <div className="header-block-navbar-other">
                                    <div className="header-navbar-other-lang">
                                        <div className="dropdown-label" onClick={() => toggleDropdown()}>RU</div>
                                        <div className="options-dropdown" id="dropdown">
                                            <div className="option" onClick={() => selectLanguage('RU')}>RU</div>
                                            <div className="option" onClick={() => selectLanguage('EN')}>EN</div>
                                        </div>
                                    </div>

                                    <div className="header-navbar-other-contact">
                                        <div className="header-other-contact-location">
                                            <a href="#"><i className="fa-solid fa-location-dot"></i></a>
                                        </div>
                                        <div className="header-other-contact-email">
                                            <a href="#"><i className="fa-regular fa-envelope"></i></a>
                                        </div>
                                        <div className="header-other-contact-phone">
                                            <a href="#"><i className="fa-solid fa-phone"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="header-navbar-menu">
                                    <input type="checkbox" className="header-navbar-menu-input" id="menu" />
                                    <label htmlFor="menu">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </label>
                                    <ul className="header-navbar-menu-list">
                                        <li><a href="#">О НАС</a></li>
                                        <li><a href="#">УСЛУГИ</a></li>
                                        <li><a href="#">ПОРТФОЛИО</a></li>
                                        <li><a href="#">ОБРАТНОЙ СВЯЗЬ</a></li>
                                        <li><a href="#">НАШИ КЛИЕНТЫ</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="header-block-flex">
                            <div className="header-block-flex-logo">
                                <a href="#">
                                    <img src="img/logo.png" alt="logo" id="logo" />
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
                                <div className="header-right-content-lang">
                                    <a href="#" id="lang">RU</a>
                                    <a href="#" id="lang">EN</a>
                                </div>
                                <div className="header-right-content-social">
                                    <a href="#" id="social_icon"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="#" id="social_icon"><i className="fa-brands fa-square-facebook"></i></a>
                                    <a href="#" id="social_icon"><i className="fa-brands fa-instagram"></i></a>
                                </div>

                                <div className="header-right-content-email">
                                    <a href="#">
                                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="email_icon">
                                            <path d="M123.25 24.192c0-.018 0-.034-.005-.052s-.007-.063-.009-.094a1.734 1.734 0 0 0-.083-.408c-.006-.018 0-.037-.011-.055s-.01-.015-.013-.023a1.734 1.734 0 0 0-.227-.407c-.021-.028-.043-.053-.066-.08a1.755 1.755 0 0 0-.31-.294c-.012-.009-.022-.02-.034-.028a1.744 1.744 0 0 0-.414-.2c-.034-.012-.068-.022-.1-.032a1.733 1.733 0 0 0-.474-.073H6.5a1.733 1.733 0 0 0-.474.073c-.035.01-.068.02-.1.032a1.744 1.744 0 0 0-.414.2c-.012.008-.022.019-.034.028a1.755 1.755 0 0 0-.31.294c-.022.027-.045.052-.066.08a1.734 1.734 0 0 0-.227.407c0 .008-.01.015-.013.023s-.005.037-.011.055a1.734 1.734 0 0 0-.083.408c0 .032-.009.063-.009.094s-.005.034-.005.052v79.615c0 .023.006.045.007.068a1.737 1.737 0 0 0 .019.188c.008.051.015.1.027.152a1.74 1.74 0 0 0 .056.179c.017.047.033.094.054.139a1.729 1.729 0 0 0 .093.172c.024.04.048.081.075.119a1.743 1.743 0 0 0 .125.152c.033.036.066.072.1.106.021.019.037.042.059.061s.036.017.052.03a1.736 1.736 0 0 0 .452.263c.035.014.071.022.107.033a1.732 1.732 0 0 0 .488.085c.012 0 .023.006.035.006H121.501c.012 0 .023-.006.034-.006a1.732 1.732 0 0 0 .489-.085c.035-.011.07-.019.1-.033a1.736 1.736 0 0 0 .453-.263c.016-.013.036-.017.052-.03s.038-.042.059-.061c.036-.034.069-.069.1-.106a1.743 1.743 0 0 0 .125-.152c.027-.038.051-.078.075-.119a1.729 1.729 0 0 0 .093-.172c.021-.045.037-.092.054-.139a1.74 1.74 0 0 0 .056-.179c.012-.05.019-.1.027-.152a1.737 1.737 0 0 0 .019-.188c0-.023.007-.045.007-.068zM45.8 60.316l17.058 14.677a1.751 1.751 0 0 0 2.283 0L82.2 60.316l35.512 41.741H10.289zM8.25 99.052V28.007l34.9 30.026zm76.6-41.019 34.9-30.026v71.045zm31.931-32.091L81.276 56.493c-.006.005-.014.008-.02.014l-.019.02L64 71.358 46.763 56.527l-.019-.02-.02-.014-35.507-30.551z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="header-block-main">
                            <div className="header-block-main-center">
                                <div className="header-main-center-title">
                                    <h1>Наши услуги</h1>
                                </div>
                                <div className="header-main-center-light">
                                    <p>Мы предоставляем полный спектр услуг по разработке и продвижению цифровых продуктов</p>
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

            <section className="services">
                <div className="container">
                    <div className="services-title" data-aos="fade-up" data-aos-duration="700">
                        <h1>Наши услуги</h1>
                    </div>

                    <div className="services-block">
                        <div className="services-block-inner" data-aos="fade-up" data-aos-duration="700">
                            <h2 data-aos="fade-up" data-aos-duration="700">UX/UI DESIGN</h2>
                            <div className="services-block-inner-logo" data-aos="fade-up" data-aos-duration="700">
                                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" data-aos="fade-up" data-aos-duration="700">
                                    <path d="M43.1934 23.9629L33.0449 18.1211L33.0332 6.60742L21.8711 0.185547L10.7207 6.63672L10.7324 18.1973L0.730469 23.9922L0.748047 36.8711L11.9102 43.2988L21.9531 37.4805L32.0547 43.2988L43.1992 36.8477L43.1934 23.9629ZM21.8711 2.89258L30.0977 7.62695L21.877 12.373L13.6504 7.64453L21.8711 2.89258ZM11.8809 20.2422L20.1074 24.9766L11.8867 29.7227L3.66016 24.9941L11.8809 20.2422ZM12.4785 40.2578L11.9102 40.5859L11.3066 40.2402L3.0918 35.5117L3.08008 26.0137L11.3066 30.7422L11.8926 31.082L12.4785 30.7422L20.7051 25.9961L20.7168 35.4941L12.4785 40.2578ZM21.9004 23.2363L21.2969 22.8906L13.082 18.1621L13.0703 8.66406L21.2969 13.3867L21.8828 13.7266L22.4688 13.3867L30.6953 8.64062L30.707 18.1387L22.4688 22.9082L21.9004 23.2363ZM40.8613 35.4883L32.623 40.2578L32.0547 40.5859L31.4512 40.2402L23.2363 35.5117L23.2305 25.3398L32.0371 20.2422L40.3516 25.0293C40.5449 25.0352 40.7383 25.1348 40.8438 25.3105L40.8555 25.3164V25.334C40.9551 25.5156 40.9492 25.7266 40.8555 25.8906L40.8613 35.4883Z" fill="white" />
                                </svg>
                            </div>
                            <div className="services-block-inner-text" data-aos="fade-up" data-aos-duration="700">
                                <p>Softium предоставляет UX/UI дизайн, создавая удобные и привлекательные интерфейсы для повышения успеха вашего продукта.</p>
                            </div>
                        </div>

                        <div className="services-block-inner" data-aos="fade-up" data-aos-duration="700">
                            <h2 data-aos="fade-up" data-aos-duration="700">РАЗРАБОТКА САЙТОВ</h2>
                            <div className="services-block-inner-logo" data-aos="fade-up" data-aos-duration="700">
                                <svg width="50" height="38" viewBox="0 0 50 38" fill="none" xmlns="http://www.w3.org/2000/svg" data-aos="fade-up" data-aos-duration="700">
                                    <path d="M45.1094 0.0214844H4.92578C2.66406 0.0214844 0.824219 1.86133 0.824219 4.12305V33.4199C0.824219 35.6816 2.66406 37.5215 4.92578 37.5215H45.1035C47.3652 37.5215 49.2051 35.6816 49.2051 33.4199V4.12305C49.2109 1.86133 47.3711 0.0214844 45.1094 0.0214844ZM46.8672 33.4199C46.8672 34.3867 46.0762 35.1777 45.1094 35.1777H4.92578C3.95898 35.1777 3.16797 34.3867 3.16797 33.4199V12.332H46.8613V33.4199H46.8672ZM46.8672 11.1602H3.17383V4.12305C3.17383 3.15625 3.96484 2.36523 4.93164 2.36523H45.1094C46.0762 2.36523 46.8672 3.15625 46.8672 4.12305V11.1602Z" fill="white" />
                                </svg>
                            </div>
                            <div className="services-block-inner-text" data-aos="fade-up" data-aos-duration="700">
                                <p>Softium занимается созданием современных, адаптивных сайтов, которые эффективно представляют ваш бизнес в сети и привлекают клиентов.</p>
                            </div>
                        </div>

                        <div className="services-block-inner" data-aos="fade-up" data-aos-duration="700">
                            <h2 data-aos="fade-up" data-aos-duration="700">РАЗРАБОТКА ПРИЛОЖЕНИЙ</h2>
                            <div className="services-block-inner-logo" data-aos="fade-up" data-aos-duration="700">
                                <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg" data-aos="fade-up" data-aos-duration="700">
                                    <path d="M39.6133 16.3047H28.0762V4.58594C28.0762 2.13672 26.084 0.144531 23.6348 0.144531H5.125C2.67578 0.144531 0.683594 2.13672 0.683594 4.58594V38.8867C0.683594 41.3359 2.67578 43.3281 5.125 43.3281H39.6074C42.0566 43.3281 44.0488 41.3594 44.0488 38.9395V20.6992C44.0547 18.2734 42.0625 16.3047 39.6133 16.3047ZM23.6406 40.9844H5.125C3.9707 40.9844 3.02734 40.0469 3.02734 38.8867V15.9648L3.0332 15.85C3.0332 15.1727 3.0332 15.4668 3.0332 15.3063C3.0332 15.0637 3.0332 15.1047 3.0332 14.7754V4.5918C3.0332 3.4375 3.9707 2.49414 5.13086 2.49414H23.6406C24.7949 2.49414 25.7383 3.43164 25.7383 4.5918V17.4883C25.7326 17.8938 25.7356 18.0151 25.7324 17.8C25.7383 18.1609 25.7383 17.7812 25.7383 18.4375V18.8453V18.9004V38.8926C25.7324 40.0469 24.7949 40.9844 23.6406 40.9844ZM41.7109 38.9395C41.7109 40.0703 40.7734 40.9844 39.6133 40.9844H27.5547C27.8887 40.3574 28.082 39.6484 28.082 38.8867L28 20.8C28 20.4297 28 20.3922 28 20.2V19.6V18.6484H39.6133C40.7676 18.6484 41.7109 19.5684 41.7109 20.6934V38.9395Z" fill="white" />
                                </svg>
                            </div>
                            <div className="services-block-inner-text" data-aos="fade-up" data-aos-duration="700">
                                <p>Softium разрабатывает функциональные мобильные и веб-приложения, которые ускоряют рост вашего бизнеса и улучшают пользовательский опыт.</p>
                            </div>
                        </div>

                        <div className="services-block-inner" data-aos="fade-up" data-aos-duration="700">
                            <h2 data-aos="fade-up" data-aos-duration="700">МАРКЕТИНГ</h2>
                            <div className="services-block-inner-logo" data-aos="fade-up" data-aos-duration="700">
                                <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg" data-aos="fade-up" data-aos-duration="700">
                                    <path d="M43.332 1.33398C42.4297 0.613281 41.2519 0.220703 40.0098 0.220703H14.3047C13.0625 0.220703 11.8789 0.619141 10.9824 1.33398C10.0215 2.10156 9.46484 3.19141 9.46484 4.32227V7.19336H5.01758C2.75586 7.19336 0.916016 9.0332 0.916016 11.2949V39.2207C0.916016 41.4824 2.75586 43.3223 5.01758 43.3223H32.1992C34.4609 43.3223 36.3008 41.4824 36.3008 39.2207V36.3496H40.0098C41.2519 36.3496 42.4355 35.9512 43.332 35.2363C44.293 34.4688 44.8496 33.3789 44.8496 32.248V4.32227C44.8496 3.19141 44.293 2.10156 43.332 1.33398ZM33.957 15.7422H3.25977V11.2949C3.25977 10.3281 4.05078 9.53711 5.01758 9.53711H32.1992C33.166 9.53711 33.957 10.3281 33.957 11.2949V15.7422ZM33.957 39.2207C33.957 40.1875 33.166 40.9785 32.1992 40.9785H5.01758C4.05078 40.9785 3.25977 40.1875 3.25977 39.2207V16.9141H33.957V39.2207ZM42.5059 32.248C42.5059 33.2031 41.3633 34.0059 40.0098 34.0059H36.3008V11.2949C36.3008 9.0332 34.4609 7.19336 32.1992 7.19336H11.8086V4.32227C11.8086 3.36719 12.9512 2.56445 14.3047 2.56445H40.0098C41.3633 2.56445 42.5059 3.36719 42.5059 4.32227V32.248Z" fill="white" />
                                </svg>
                            </div>
                            <div className="services-block-inner-text" data-aos="fade-up" data-aos-duration="700">
                                <p>Softium разрабатыв��ет эффективные маркетинговые стратегии для продвижения вашего бренда и привлечения клиентов через цифровые каналы.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}