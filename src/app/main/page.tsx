'use client';
import './main.css'
export default function MainPage() {
    return (
        <div className="wrapper">
            <header className="header">
                <div className="header-block">
                    <div className="container">
                        <div className="header-block-navbar">
                            <div className="header-block-navbar-inner">

                                <div className="header-block-navbar-other">
                                    <div className="header-navbar-other-lang">
                                        {/* <div className="dropdown-label" onClick={() => toggleDropdown()}>RU</div> */}
                                        <div className="options-dropdown" id="dropdown">
                                            {/* <div className="option" onClick={() => selectLanguage('RU')}>RU</div> */}
                                            {/* <div className="option" onClick={() => selectLanguage('EN')}>EN</div> */}
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

                            </div>
                        </div>



                        <div className="header-block-main">
                            <div className="header-block-main-center">
                                <div className="header-main-center-small">
                                    <span>Веб-студия</span>
                                </div>
                                <div className="header-main-center-title">
                                    <h1>SOFTIUM</h1>
                                </div>
                                <div className="header-main-center-light">
                                    <p>"Softium — программируем будущее вместе!"</p>
                                </div>

                                <div className="header-main-center-text">
                                    <p>
                                        Softium — <span>это команда профессионалов в сфере разработки сайтов, дизайна и IT-решений. Мы создаем современные, функциональные и визуально привлекательные проекты, которые помогают бизнесу расти и выделяться в цифровом мире. От идей до готового продукта — программируем успех вашего бизнеса.</span>
                                    </p>
                                </div>

                                <div className="header-main-center-btn">
                                    <a href="#">Получить консультацию</a>
                                </div>
                            </div>
                        </div>

                        <a href="#about" style={{zIndex: 999}}>
                            <div className="scroll-downs">
                                <div className="mousey">
                                    <div className="scroller"></div>
                                </div>
                            </div>
                        </a>

                        <canvas id="c" width="1900" height="1000"></canvas>
                        <canvas id="noise" className="noise" width="1536" height="423"></canvas>
                        <canvas id="canvas"></canvas>
                        <canvas id="noise_sec"></canvas>
                    </div>
                </div>
            </header>
            <section className="about" id="about">
                <div className="container">
                    <div className="about-side">
                        <div className="about-left">
                            <div
                                data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                                <svg width="194" height="388" viewBox="0 0 194 388" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M-110.842 62.75C-110.842 28.4393 -83.0279 0.625 -48.7173 0.625H53.3024C87.613 0.625 115.427 28.4393 115.427 62.75V80.1354H78.6774V62.75C78.6774 48.7358 67.3166 37.375 53.3024 37.375H-48.7173C-62.7315 37.375 -74.0923 48.7358 -74.0923 62.75V176.389H88.3023C103.283 176.389 115.427 188.533 115.427 203.514V325.25C115.427 359.561 87.6131 387.375 53.3024 387.375H-48.7173C-83.0279 387.375 -110.842 359.561 -110.842 325.25V306.336H-74.0923V325.25C-74.0923 339.264 -62.7315 350.625 -48.7173 350.625H53.3024C67.3166 350.625 78.6774 339.264 78.6774 325.25V213.139H-83.7173C-98.698 213.139 -110.842 200.995 -110.842 186.014V62.75Z" fill="#292929"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M-131.25 306.371C-165.561 306.371 -193.375 278.556 -193.375 244.246V142.226C-193.375 107.915 -165.561 80.101 -131.25 80.101H-110.808V98.476V116.851H-131.25C-145.264 116.851 -156.625 128.212 -156.625 142.226V244.246C-156.625 258.26 -145.264 269.621 -131.25 269.621H-17.6108V188.312V107.226C-17.6108 92.2453 -5.46655 80.101 9.51419 80.101L131.25 80.101C165.561 80.101 193.375 107.915 193.375 142.226V244.246C193.375 278.556 165.561 306.371 131.25 306.371H115.393V269.621H131.25C145.264 269.621 156.625 258.26 156.625 244.246V142.226C156.625 128.212 145.264 116.851 131.25 116.851L19.1392 116.851V279.246C19.1392 294.226 6.99493 306.371 -7.98581 306.371H-131.25Z" fill="#292929"/>
                                </svg>
                            </div>
                        </div>

                        <div className="about-block">
                            <div className="about-block-content" data-aos="fade-up" data-aos-duration="700">
                                <div className="about-block-title">
                                    <h1>О нас</h1>
                                </div>
                                <div className="about-block-text">
                                    <p>
                                        <span>Softium</span> — это команда опытных разработчиков, дизайнеров и IT-специалистов, которые создают инновационные цифровые решения для бизнеса. Мы занимаемся разработкой сайтов, дизайном, веб-приложениями и многими другими направлениями, связанными с программированием. Наша цель — помочь вам воплотить идеи в жизнь, используя современные технологии для роста и успеха вашего бизнеса.
                                    </p>
                                </div>

                                <div className="about-block-link">
                                    <a href="#about">
                                        Подробнее о нас
                                        <svg width="16" height="7" viewBox="0 0 16 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.62396e-05 1C3.62396e-05 0.447715 0.447751 0 1.00004 0L14.6406 0C15.315 0.496088 15.315 1.5039 14.6406 2L1.00004 2C0.447751 2 3.62396e-05 1.55228 3.62396e-05 1Z" fill="#24B8AF"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M14.6405 2L11.101 5.53955C10.7105 5.93008 10.0773 5.93008 9.68679 5.53955C9.29626 5.14903 9.29626 4.51586 9.68679 4.12534L13.2263 0.585783L14.6405 2Z" fill="#24B8AF"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="about-right">
                            <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                <svg width="194" height="388" viewBox="0 0 194 388" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M83.1582 62.75C83.1582 28.4393 110.973 0.625 145.283 0.625H247.303C281.614 0.625 309.428 28.4393 309.428 62.75V80.1354H272.678V62.75C272.678 48.7358 261.317 37.375 247.303 37.375H145.283C131.269 37.375 119.908 48.7358 119.908 62.75V176.389H282.303C297.284 176.389 309.428 188.533 309.428 203.514V325.25C309.428 359.561 281.614 387.375 247.303 387.375H145.283C110.973 387.375 83.1582 359.561 83.1582 325.25V306.336H119.908V325.25C119.908 339.264 131.269 350.625 145.283 350.625H247.303C261.317 350.625 272.678 339.264 272.678 325.25V213.139H110.283C95.3025 213.139 83.1582 200.995 83.1582 186.014V62.75Z" fill="#292929"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M62.75 306.371C28.4393 306.371 0.625 278.556 0.625 244.246L0.625 142.226C0.625 107.915 28.4393 80.101 62.75 80.101H83.1921V98.476V116.851H62.75C48.7358 116.851 37.375 128.212 37.375 142.226V244.246C37.375 258.26 48.7358 269.621 62.75 269.621H176.389V188.312V107.226C176.389 92.2453 188.533 80.101 203.514 80.101L325.25 80.101C359.561 80.101 387.375 107.915 387.375 142.226V244.246C387.375 278.556 359.561 306.371 325.25 306.371H309.393V269.621H325.25C339.264 269.621 350.625 258.26 350.625 244.246V142.226C350.625 128.212 339.264 116.851 325.25 116.851L213.139 116.851V279.246C213.139 294.226 200.995 306.371 186.014 306.371H62.75Z" fill="#292929"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tech">
                <div className="container">
                    <div className="tech-block">
                        <div className="tech-block-title" data-aos="fade-up" data-aos-duration="700">
                            <h1>Наши технологии</h1>
                        </div>

                        <div className="tech-block-text" data-aos="fade-up" data-aos-duration="700">
                            <p>Мы эксперты в веб-технологиях, которых достаточно для создания полного и максимально функционального веб-сайта для вашего бизнеса.</p>
                        </div>

                        <div className="tech-block-neon">
                            <div className="tech-block-slider" data-aos="fade-up" data-aos-duration="700">
                                <div className="tech-block-slider-slide">
                                    <div className="tech-slider-slide-img laravel-icon">
                                        <img src="img/Laravel.svg.png" alt="laravel" />
                                    </div>
                                </div>

                                <div className="tech-block-slider-slide">
                                    <div className="tech-slider-slide-img">
                                        <img src="img/figma.png" alt="" />
                                    </div>
                                </div>

                                <div className="tech-block-slider-slide">
                                    <div className="tech-slider-slide-img">
                                        <img src="img/Unity.png" alt="" />
                                    </div>
                                </div>

                                <div className="tech-block-slider-slide">
                                    <div className="tech-slider-slide-img">
                                        <img src="img/React.png" alt="" />
                                    </div>
                                </div>

                                <div className="tech-block-slider-slide">
                                    <div className="tech-slider-slide-img">
                                        <img src="img/js.png" alt="" />
                                    </div>
                                </div>

                                <div className="tech-block-slider-slide">
                                    <div className="tech-slider-slide-img">
                                        <img src="img/Android.png" alt="" />
                                    </div>
                                </div>

                                <div className="tech-block-slider-slide">
                                    <div className="tech-slider-slide-img">
                                        <img src="img/Angular.png" alt="" />
                                    </div>
                                </div>

                                <div className="tech-block-slider-slide">
                                    <div className="tech-slider-slide-img">
                                        <img src="img/Git.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <canvas id="neon"></canvas>
                        </div>
                    </div>
                </div>
            </section>
            <section className="work">
                <div className="container">
                    <div className="work-block">
                        <div className="work-block-title" data-aos="fade-up" data-aos-duration="700">
                            <h1>Наши лучшие работы</h1>
                        </div>
                        <div className="work-block-content">
                            <div className="work-block-content-inner" data-aos="fade-up" data-aos-duration="700">
                                <div className="work-content-inner-photo">
                                    <img src="img/work.png" alt="work" />
                                </div>
                                <div className="work-content-inner-text">
                                    <a href="#">KARSU.UZ</a>
                                    <p>Корпоративный портал для "KARSU"</p>
                                </div>
                            </div>
                            <div className="work-block-content-inner" data-aos="fade-up" data-aos-duration="700">
                                <div className="work-content-inner-photo">
                                    <img src="img/work.png" alt="work" />
                                </div>
                                <div className="work-content-inner-text">
                                    <a href="#">KARSU.UZ</a>
                                    <p>Корпоративный портал для "KARSU"</p>
                                </div>
                            </div>
                            <div className="work-block-content-inner" data-aos="fade-up" data-aos-duration="700">
                                <div className="work-content-inner-photo">
                                    <img src="img/work.png" alt="work" />
                                </div>
                                <div className="work-content-inner-text">
                                    <a href="#">KARSU.UZ</a>
                                    <p>Корпоративный портал для &#34;KARSU"</p>
                                </div>
                            </div>
                            <div className="work-block-content-inner" data-aos="fade-up" data-aos-duration="700">
                                <div className="work-content-inner-photo">
                                    <img src="img/work.png" alt="work" />
                                </div>
                                <div className="work-content-inner-text">
                                    <a href="#">KARSU.UZ</a>
                                    <p>Корпоративный портал для "KARSU"</p>
                                </div>
                            </div>
                            <div className="work-block-content-inner" data-aos="fade-up" data-aos-duration="700">
                                <div className="work-content-inner-photo">
                                    <img src="img/work.png" alt="work" />
                                </div>
                                <div className="work-content-inner-text">
                                    <a href="#">KARSU.UZ</a>
                                    <p>Корпоративный портал для "KARSU"</p>
                                </div>
                            </div>
                            <div className="work-block-content-inner" data-aos="fade-up" data-aos-duration="700">
                                <div className="work-content-inner-photo">
                                    <img src="img/work.png" alt="work" />
                                </div>
                                <div className="work-content-inner-text">
                                    <a href="#">KARSU.UZ</a>
                                    <p>Корпоративный портал для "KARSU"</p>
                                </div>
                            </div>
                            <div className="work-block-content-inner" data-aos="fade-up" data-aos-duration="700">
                                <div className="work-content-inner-photo">
                                    <img src="img/work.png" alt="work" />
                                </div>
                                <div className="work-content-inner-text">
                                    <a href="#">KARSU.UZ</a>
                                    <p>Корпоративный портал для "KARSU"</p>
                                </div>
                            </div>
                            <div className="work-block-content-inner" data-aos="fade-up" data-aos-duration="700">
                                <div className="work-content-inner-photo">
                                    <img src="img/work.png" alt="work" />
                                </div>
                                <div className="work-content-inner-text">
                                    <a href="#">KARSU.UZ</a>
                                    <p>Корпоративный портал для "KARSU"</p>
                                </div>
                            </div>
                            <div className="work-block-content-inner" data-aos="fade-up" data-aos-duration="700">
                                <div className="work-content-inner-photo">
                                    <img src="img/work.png" alt="work" />
                                </div>
                                <div className="work-content-inner-text">
                                    <a href="#">KARSU.UZ</a>
                                    <p>Корпоративный портал для "KARSU"</p>
                                </div>
                            </div>
                        </div>
                        <a href="#" className="work-block-content-link" data-aos="fade-up" data-aos-duration="700">
                            Все работы
                            <span>
                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 5.49988C0 4.94759 0.447715 4.49988 1 4.49988L14.6405 4.49988C15.315 4.99597 15.3149 6.00378 14.6405 6.49988L1 6.49988C0.447716 6.49988 0 6.05216 0 5.49988Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.1217 5.86388L9.57121 2.31334C9.18069 1.92282 9.18069 1.28965 9.57122 0.899125C9.96174 0.5086 10.5949 0.5086 10.9854 0.899125L14.536 4.44967L13.1217 5.86388Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.551 6.4648L11.0115 10.0043C10.6209 10.3949 9.98777 10.3949 9.59724 10.0043C9.20672 9.61382 9.20672 8.98066 9.59724 8.59013L13.1368 5.05058L14.551 6.4648Z" fill="white" />
                </svg>
              </span>
                        </a>
                    </div>
                </div>
            </section>
            <section className="client">
                <div className="container">
                    <div className="client-title" data-aos="fade-up" data-aos-duration="700">
                        <h1>Клиенты о нас</h1>
                    </div>
                    <div className="client-block" data-aos="fade-up" data-aos-duration="700">
                        <div className="client-block-video">
                            <img src="img/video_1.png" alt="video_1" />
                            <div className="client-block-video-btn">
                <span>
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4716 7.10167C18.3662 8.13195 18.3662 10.7989 16.4716 11.8292L5.03235 18.0498C3.19103 19.0512 0.928223 17.7478 0.928223 15.6861V3.24481C0.928223 1.18301 3.19104 -0.12026 5.03234 0.881043L16.4716 7.10167Z" fill="white" />
                  </svg>
                </span>
                            </div>
                        </div>
                        <div className="client-block-video">
                            <img src="img/video_2.png" alt="video_2" />
                            <div className="client-block-video-btn">
                <span>
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4716 7.10167C18.3662 8.13195 18.3662 10.7989 16.4716 11.8292L5.03235 18.0498C3.19103 19.0512 0.928223 17.7478 0.928223 15.6861V3.24481C0.928223 1.18301 3.19104 -0.12026 5.03234 0.881043L16.4716 7.10167Z" fill="white" />
                  </svg>
                </span>
                            </div>
                        </div>
                        <div className="client-block-video">
                            <img src="img/video_3.png" alt="video_3" />
                            <div className="client-block-video-btn">
                <span>
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4716 7.10167C18.3662 8.13195 18.3662 10.7989 16.4716 11.8292L5.03235 18.0498C3.19103 19.0512 0.928223 17.7478 0.928223 15.6861V3.24481C0.928223 1.18301 3.19104 -0.12026 5.03234 0.881043L16.4716 7.10167Z" fill="white" />
                  </svg>
                </span>
                            </div>
                        </div>
                        <div className="client-block-video">
                            <img src="img/video_2.png" alt="video_2" />
                            <div className="client-block-video-btn">
                <span>
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4716 7.10167C18.3662 8.13195 18.3662 10.7989 16.4716 11.8292L5.03235 18.0498C3.19103 19.0512 0.928223 17.7478 0.928223 15.6861V3.24481C0.928223 1.18301 3.19104 -0.12026 5.03234 0.881043L16.4716 7.10167Z" fill="white" />
                  </svg>
                </span>
                            </div>
                        </div>
                        <div className="client-block-video">
                            <img src="img/video_1.png" alt="video_1" />
                            <div className="client-block-video-btn">
                <span>
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4716 7.10167C18.3662 8.13195 18.3662 10.7989 16.4716 11.8292L5.03235 18.0498C3.19103 19.0512 0.928223 17.7478 0.928223 15.6861V3.24481C0.928223 1.18301 3.19104 -0.12026 5.03234 0.881043L16.4716 7.10167Z" fill="white" />
                  </svg>
                </span>
                            </div>
                        </div>
                        <div className="client-block-video">
                            <img src="img/video_3.png" alt="video_3" />
                            <div className="client-block-video-btn">
                <span>
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4716 7.10167C18.3662 8.13195 18.3662 10.7989 16.4716 11.8292L5.03235 18.0498C3.19103 19.0512 0.928223 17.7478 0.928223 15.6861V3.24481C0.928223 1.18301 3.19104 -0.12026 5.03234 0.881043L16.4716 7.10167Z" fill="white" />
                  </svg>
                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="partner">
                <div className="container">
                    <div className="partner-title">
                        <h1>Наши партнеры</h1>
                    </div>
                    <div className="partner-block">
                        <div className="partner-block-group">
                            <div>
                                <div className="partner-block-group-banner">
                                    <img src="img/hp.png" alt="" />
                                </div>
                                <div className="partner-block-group-banner">
                                    <img src="img/lenovo.png" alt="" />
                                </div>
                                <div className="partner-block-group-banner">
                                    <img src="img/apple.png" alt="" />
                                </div>
                                <div className="partner-block-group-banner">
                                    <img src="img/samsung.png" alt="" />
                                </div>
                                <div className="partner-block-group-banner">
                                    <img src="img/Uzbekistan.png" alt="" />
                                </div>
                                <div className="partner-block-group-banner">
                                    <img src="img/tesla.png" alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="partner-block-group-banner">
                                    <img src="img/hp.png" alt="" />
                                </div>
                                <div className="partner-block-group-banner">
                                    <img src="img/lenovo.png" alt="" />
                                </div>
                                <div className="partner-block-group-banner">
                                    <img src="img/apple.png" alt="" />
                                </div>
                                <div className="partner-block-group-banner">
                                    <img src="img/samsung.png" alt="" />
                                </div>
                                <div className="partner-block-group-banner">
                                    <img src="img/Uzbekistan.png" alt="" />
                                </div>
                                <div className="partner-block-group-banner">
                                    <img src="img/tesla.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="partner-block-group">
                            <div>
                                <div className="partner-block-group-banner">
                                    <img src="img/hp.png" alt="" />
                                </div>
                                <div className="partner-block-group-banner">
                                    <img src="img/lenovo.png" alt="" />
                                </div>
                                <div className="partner-block-group-banner">
                                    <img src="img/apple.png" alt="" />
                                </div>
                                <div className="partner-block-group-banner">
                                    <img src="img/samsung.png" alt="" />
                                </div>
                                <div className="partner-block-group-banner">
                                    <img src="img/Uzbekistan.png" alt="" />
                                </div>
                                <div className="partner-block-group-banner">
                                    <img src="img/tesla.png" alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="partner-block-group-banner">
                                    <img src="img/hp.png" alt="" />
                                </div>
                                <div className="partner-block-group-banner">
                                    <img src="img/lenovo.png" alt="" />
                                </div>
                                <div className="partner-block-group-banner">
                                    <img src="img/apple.png" alt="" />
                                </div>
                                <div className="partner-block-group-banner">
                                    <img src="img/samsung.png" alt="" />
                                </div>
                                <div className="partner-block-group-banner">
                                    <img src="img/Uzbekistan.png" alt="" />
                                </div>
                                <div className="partner-block-group-banner">
                                    <img src="img/tesla.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="idea">
                <div className="container">
                    <div className="idea-title" data-aos="fade-up" data-aos-duration="700">
                        <h1>Есть идеи?</h1>
                    </div>
                    <div className="idea-block">
                        <div className="idea-block-flex">
                            <div className="idea-block-flex-email">
                                <a href="mailto:info@softium.com" data-aos="fade-up" data-aos-duration="700">info@softium.com</a>
                                <a href="mailto:info@softium.com" data-aos="fade-up" data-aos-duration="700">info@softium.com</a>
                            </div>
                            <div className="idea-block-flex-numbers">
                                <a href="tel:+998999999999" data-aos="fade-up" data-aos-duration="700">+998 99 999 99 99</a>
                                <a href="tel:+998999999999" data-aos="fade-up" data-aos-duration="700">+998 99 999 99 99</a>
                                <a href="tel:+998999999999" data-aos="fade-up" data-aos-duration="700">+998 99 999 99 99</a>
                            </div>
                            <nav className="idea-block-flex-navi">
                                <button data-aos="fade-up" data-aos-duration="700">Консультация</button>
                                <button data-aos="fade-up" data-aos-duration="700">Позвонить</button>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}