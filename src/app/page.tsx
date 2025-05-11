"use client";
import './main.css'
import Image from "next/image";
import { useEffect, useRef, useState, memo, useCallback } from "react";
import { usePathname } from "next/navigation";
import { initAnimation } from "./utils/animation";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePartner, usePortfolio } from "./api/query/query";
import { useRouter } from 'next/navigation';
import { Language } from './api/api';
import { useLanguage } from './context/LanguageContext';
import Partners from './components/Partners';
import ClientsPage from "@/ClientsPage";

declare global {
  interface Window {
    startNoise: () => void;
    stopNoise: () => void;
    jQuery: typeof jQuery;
  }
}
interface PortfolioItem {
  portfolio_title: string;
  portfolio_description: string;
  portfolio_img: string;
  portfolio_url: string;
}
interface PartnersItem {
  partner_img: string;
}

interface ArrowProps {
  onClick?: () => void;
  currentSlide?: number;
  slideCount?: number;
}

// const PrevArrow = ({ onClick }: ArrowProps) => (
//   <div className={`${styles.arrow} ${styles.prevArrow}`} onClick={onClick}>
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//       <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   </div>
// );

// const NextArrow = ({ onClick }: ArrowProps) => (
//   <div className={`${styles.arrow} ${styles.nextArrow}`} onClick={onClick}>
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//       <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//     </svg>
//   </div>
// )


export default function MainPage() {
  const { language, setLanguage } = useLanguage();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);


  const {
    data: portfolioData,
    isLoading: isPortfolioLoading,
    isError: isPortfolioError,
  } = usePortfolio(language as Language);

  const {
    data: partners,
    isLoading: isPartnersLoading,
    isError: isPartnersError,
  } = usePartner(language as Language);

  const pathname = usePathname();
  const slickInitialized = useRef(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileLanguageOpen, setIsMobileLanguageOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = useCallback((newLang: 'ru' | 'en') => {
    setLanguage(newLang);
    setIsMobileLanguageOpen(false);
    setIsMobileMenuOpen(false);
  }, [setLanguage]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    document.body.style.opacity = '0.99';

    const loadScript = async (src: string): Promise<void> => {
      if (document.querySelector(`script[src="${src}"]`)) {
        return Promise.resolve();
      }

      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject();
        document.head.appendChild(script);
      });
    };

    const initializeAnimations = async () => {
      try {
        if (typeof window === "undefined") return;

        if (!window.jQuery) {
          await loadScript("https://code.jquery.com/jquery-3.6.0.min.js");
        }

        const $ = window.jQuery;
        if (!$) return;
        
        if (typeof initAnimation === "function") {
          initAnimation($('body'));
        }
        if (typeof window.startNoise === "function") {
          window.startNoise();
        }

        // Initialize AOS after everything is loaded
        AOS.init({
          offset: 100,
          duration: 600,
          once: true,
          debounceDelay: 50,
          throttleDelay: 99
        });

        // Remove loading state
        setIsLoading(false);
        document.body.style.opacity = '1';
        AOS.refresh();
      } catch (error) {
        console.error("Error initializing animations:", error);
        setIsLoading(false); // Remove loading state even if there's an error
      }
    };

    const timeoutId = setTimeout(() => {
      initializeAnimations();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (typeof window.stopNoise === "function") {
        window.stopNoise();
      }
    };
  }, [pathname]);

  const PortfolioItem = memo(({ portfolio_title, portfolio_description, portfolio_img, portfolio_url }: PortfolioItem) => {
    return (
        <a
            href={portfolio_url}
            target="_blank"
            rel="noopener noreferrer"
            className="work-block-content-inner"
            data-aos="fade-up"
            data-aos-duration="700"
            style={{textDecoration:'none'} }>
          <div className="work-content-inner-photo">
            <Image
                src={portfolio_img}
                alt={portfolio_title}
                width={300}
                height={200}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
            />
          </div>
          <div className="work-content-inner-text">
            <h3 style={{color: '#fff'}}>{portfolio_title}</h3>
            <p style={{color: '#fff'}}>{portfolio_description}</p>
          </div>
        </a>
    );
  });

  PortfolioItem.displayName = 'PortfolioItem';

  // const PartnersItem: React.FC<PartnersItem> = ({ partner_img }) => (
  //   <div className="partner-block-content-inner">
  //     {partner_img ? (
  //       <Image
  //         src={partner_img}
  //         alt="Partner logo"
  //         width={300}
  //         height={100}
  //         loading="lazy"
  //         loader={({ src }) => src}
  //       />
  //     ) : (
  //       <div>No image available</div>
  //     )}
  //   </div>
  // );
  console.log(partners);

  const translations = {
    ru: {
      webStudio: "Веб-студия",
      slogan: "Softium — программируем будущее вместе!",
      description: "Softium — это команда профессионалов в сфере разработки сайтов, дизайна и IT-решений. Мы создаем современные, функциональные и визуально привлекательные проекты, которые помогают бизнесу расти и выделяться в цифровом мире. т идей до готового продукта — программируем успех вашего бизнеса.",
      getConsultation: "Получить консультацию",
      aboutUs: "О нас",
      aboutDescription: "Softium — это команда опытных разработчиков, дизайнеров и IT-специалистов, которые создают инновационные цифровые решения для бизнеса. Мы занимаемся разработкой сайтов, дизайном, веб-приложениями и многими другими направлениями, связанными с программированием. Наша цель — помочь вам воплотить идеи в жизнь, используя современные технологии для роста и успеха вашего бизнеса.",
      moreAboutUs: "Подробнее о нас",
      ourTechnologies: "Наши технологи",
      techDescription: "Мы эксперты в веб-технологиях, которых достаточно для создания полного и максимально функционального веб-сайта для вашего бизнеса.",
      ourBestWorks: "Наши лучшие работы",
      allWorks: "Все работы",
      clientsAboutUs: "Клиенты о нас",
      ourPartners: "Наши партнеры",
      services: "Наши услуги",
      uxuiDesign: "UX/UI DESIGN",
      uxuiDesc: "Softium предоставляет UX/UI дизайн, создавая удобные и привлекательные интерфейсы для повышения успеха вашего продукта.",
      webDev: "РАЗРАБОТКА САЙТОВ",
      webDevDesc: "Softium занимается созданием современных, адаптивных сайтов, которые эффективно представляют ваш бизнес в сети и привлекают клиентов.",
      appDev: "РАЗРАБОТКА ПРИЛОЖЕНИЙ",
      appDevDesc: "Softium разрабатывает функциональные мобильные и веб-приложения, которые ускоряют рост вашего бизнеса и улучшают пользовательский опыт.",
      marketing: "МАРКЕТИНГ",
      marketingDesc: "Softium разрабатывает эффективные маркетинговые стратегии для продвижения вашего бренда и привлечения клиентов через цифровые каналы.",
      clientsFromUs: "Клиенты о нас",
    },
    en: {
      webStudio: "Web Studio",
      slogan: "Softium — programming the future together!",
      description: "Softium is a team of professionals in website development, design, and IT solutions. We create modern, functional, and visually appealing projects that help businesses grow and stand out in the digital world. From ideas to finished product — we program your business success.",
      getConsultation: "Get Consultation",
      aboutUs: "About Us",
      aboutDescription: "Softium is a team of experienced developers, designers, and IT specialists who create innovative digital solutions for business. We develop websites, design, web applications, and many other programming-related areas. Our goal is to help you bring ideas to life using modern technologies for your business growth and success.",
      moreAboutUs: "More About Us",
      ourTechnologies: "Our Technologies",
      techDescription: "We are experts in web technologies that are sufficient to create a complete and maximally functional website for your business.",
      ourBestWorks: "Our Best Works",
      allWorks: "All Works",
      clientsAboutUs: "Clients About Us",
      ourPartners: "Our Partners",
      services: "Our Services",
      uxuiDesign: "UX/UI DESIGN",
      uxuiDesc: "Softium provides UX/UI design, creating user-friendly and attractive interfaces to enhance your product's success.",
      webDev: "WEBSITE DEVELOPMENT",
      webDevDesc: "Softium creates modern, responsive websites that effectively represent your business online and attract customers.",
      appDev: "APP DEVELOPMENT",
      appDevDesc: "Softium develops functional mobile and web applications that accelerate your business growth and improve user experience.",
      marketing: "MARKETING",
      marketingDesc: "Softium develops effective marketing strategies to promote your brand and attract customers through digital channels.",
      clientsFromUs: "Clients About Us",
    }
  };

  const t = translations[language as keyof typeof translations];

  return (
    <>
      {isLoading && (
        <div className="loading-container">
          <div className="loading-spinner" />
        </div>
      )}
      <div className={`wrapper ${!isLoading ? 'loaded' : ''}`}>
        <header className="header">
          <div className="header-block">
            <div className="container">
              <div className="header-block-navbar">
                <div className="header-block-navbar-inner">

                  <div className="header-block-navbar-other">
                    <div className="header-navbar-other-lang">
                      {/* <div className="dropdown-label" onClick={toggleDropdown}>
                      {language.toUpperCase()}
                    </div>
                    <div className={`options-dropdown ${isDropdownOpen ? 'show' : ''}`}>
                      <div
                        className={`option ${language === 'ru' ? 'active' : ''}`}
                        onClick={() => {
                          handleLanguageChange('ru');
                          setIsDropdownOpen(false);
                        }}
                      >
                        RU
                      </div>
                      <div
                        className={`option ${language === 'en' ? 'active' : ''}`}
                        onClick={() => {
                          handleLanguageChange('en');
                          setIsDropdownOpen(false);
                        }}
                      >
                        EN
                      </div>
                    < /div> */}
                    </div>

                    <div className="header-navbar-other-contact">
                      <div className="header-other-contact-location">
                        <a href="#">
                          <i className="fa-solid fa-location-dot"></i>
                        </a>
                      </div>
                      <div className="header-other-contact-email">
                        <a href="#">
                          <i className="fa-regular fa-envelope"></i>
                        </a>
                      </div>
                      <div className="header-other-contact-phone">
                        <a href="#">
                          <i className="fa-solid fa-phone"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="header-block-main">
                <div className="header-block-main-center">
                  <div className="header-main-center-small">
                    <span>{t.webStudio}</span>
                  </div>
                  <div className="header-main-center-title">
                    <h1>SOFTIUM</h1>
                  </div>
                  <div className="header-main-center-light">
                    <p>&quot;{t.slogan}&quot;</p>
                  </div>

                  <div className="header-main-center-text">
                    <p>
                      <span>{t.description}</span>
                    </p>
                  </div>

                  <div className="header-main-center-btn">
                    <a href="/contact">{t.getConsultation}</a>
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

              <canvas id="c" width="1900" height="1000"></canvas>
              <canvas
                  id="noise"
                  className="noise"
                  width="1536"
                  height="423"
              ></canvas>
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
                    data-aos-easing="ease-in-sine"
                >
                  <svg
                      width="194"
                      height="388"
                      viewBox="0 0 194 388"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M-110.842 62.75C-110.842 28.4393 -83.0279 0.625 -48.7173 0.625H53.3024C87.613 0.625 115.427 28.4393 115.427 62.75V80.1354H78.6774V62.75C78.6774 48.7358 67.3166 37.375 53.3024 37.375H-48.7173C-62.7315 37.375 -74.0923 48.7358 -74.0923 62.75V176.389H88.3023C103.283 176.389 115.427 188.533 115.427 203.514V325.25C115.427 359.561 87.6131 387.375 53.3024 387.375H-48.7173C-83.0279 387.375 -110.842 359.561 -110.842 325.25V306.336H-74.0923V325.25C-74.0923 339.264 -62.7315 350.625 -48.7173 350.625H53.3024C67.3166 350.625 78.6774 339.264 78.6774 325.25V213.139H-83.7173C-98.698 213.139 -110.842 200.995 -110.842 186.014V62.75Z"
                        fill="#292929"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M-131.25 306.371C-165.561 306.371 -193.375 278.556 -193.375 244.246V142.226C-193.375 107.915 -165.561 80.101 -131.25 80.101H-110.808V98.476V116.851H-131.25C-145.264 116.851 -156.625 128.212 -156.625 142.226V244.246C-156.625 258.26 -145.264 269.621 -131.25 269.621H-17.6108V188.312V107.226C-17.6108 92.2453 -5.46655 80.101 9.51419 80.101L131.25 80.101C165.561 80.101 193.375 107.915 193.375 142.226V244.246C193.375 278.556 165.561 306.371 131.25 306.371H115.393V269.621H131.25C145.264 269.621 156.625 258.26 156.625 244.246V142.226C156.625 128.212 145.264 116.851 131.25 116.851L19.1392 116.851V279.246C19.1392 294.226 6.99493 306.371 -7.98581 306.371H-131.25Z"
                        fill="#292929"
                    />
                  </svg>
                </div>
              </div>

              <div className="about-block">
                <div
                    className="about-block-content"
                    data-aos="fade-up"
                    data-aos-duration="700"
                >
                  <div className="about-block-title">
                    <h1>{t.aboutUs}</h1>
                  </div>
                  <div className="about-block-text">
                    <p>{t.aboutDescription}</p>
                  </div>

                  <div className="about-block-link">
                    <a href="/about">
                      {t.moreAboutUs}
                      <svg
                          width="16"
                          height="7"
                          viewBox="0 0 16 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.62396e-05 1C3.62396e-05 0.447715 0.447751 0 1.00004 0L14.6406 0C15.315 0.496088 15.315 1.5039 14.6406 2L1.00004 2C0.447751 2 3.62396e-05 1.55228 3.62396e-05 1Z"
                            fill="#24B8AF"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.6405 2L11.101 5.53955C10.7105 5.93008 10.0773 5.93008 9.68679 5.53955C9.29626 5.14903 9.29626 4.51586 9.68679 4.12534L13.2263 0.585783L14.6405 2Z"
                            fill="#24B8AF"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="about-right">
                <div
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                >
                  <svg
                      width="194"
                      height="388"
                      viewBox="0 0 194 388"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M83.1582 62.75C83.1582 28.4393 110.973 0.625 145.283 0.625H247.303C281.614 0.625 309.428 28.4393 309.428 62.75V80.1354H272.678V62.75C272.678 48.7358 261.317 37.375 247.303 37.375H145.283C131.269 37.375 119.908 48.7358 119.908 62.75V176.389H282.303C297.284 176.389 309.428 188.533 309.428 203.514V325.25C309.428 359.561 281.614 387.375 247.303 387.375H145.283C110.973 387.375 83.1582 359.561 83.1582 325.25V306.336H119.908V325.25C119.908 339.264 131.269 350.625 145.283 350.625H247.303C261.317 350.625 272.678 339.264 272.678 325.25V213.139H110.283C95.3025 213.139 83.1582 200.995 83.1582 186.014V62.75Z"
                        fill="#292929"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M62.75 306.371C28.4393 306.371 0.625 278.556 0.625 244.246L0.625 142.226C0.625 107.915 28.4393 80.101 62.75 80.101H83.1921V98.476V116.851H62.75C48.7358 116.851 37.375 128.212 37.375 142.226V244.246C37.375 258.26 48.7358 269.621 62.75 269.621H176.389V188.312V107.226C176.389 92.2453 188.533 80.101 203.514 80.101L325.25 80.101C359.561 80.101 387.375 107.915 387.375 142.226V244.246C387.375 278.556 359.561 306.371 325.25 306.371H309.393V269.621H325.25C339.264 269.621 350.625 258.26 350.625 244.246V142.226C350.625 128.212 339.264 116.851 325.25 116.851L213.139 116.851V279.246C213.139 294.226 200.995 306.371 186.014 306.371H62.75Z"
                        fill="#292929"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services">
          <div className="container">
            <div className="services-title" data-aos="fade-up" data-aos-duration="700">
              <h1>{t.services}</h1>
            </div>

            <div className="services-block" data-aos="fade-up" data-aos-duration="700">
              <a href='/design' style={{textDecoration: "none"}}>
                <div className="services-block-inner">
                  <h2>{t.uxuiDesign}</h2>
                  <div className="services-block-inner-logo" id="text-1985">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M43.1934 23.9629L33.0449 18.1211L33.0332 6.60742L21.8711 0.185547L10.7207 6.63672L10.7324 18.1973L0.730469 23.9922L0.748047 36.8711L11.9102 43.2988L21.9531 37.4805L32.0547 43.2988L43.1992 36.8477L43.1934 23.9629ZM21.8711 2.89258L30.0977 7.62695L21.877 12.373L13.6504 7.64453L21.8711 2.89258ZM11.8809 20.2422L20.1074 24.9766L11.8867 29.7227L3.66016 24.9941L11.8809 20.2422ZM12.4785 40.2578L11.9102 40.5859L11.3066 40.2402L3.0918 35.5117L3.08008 26.0137L11.3066 30.7422L11.8926 31.082L12.4785 30.7422L20.7051 25.9961L20.7168 35.4941L12.4785 40.2578ZM21.9004 23.2363L21.2969 22.8906L13.082 18.1621L13.0703 8.66406L21.2969 13.3867L21.8828 13.7266L22.4688 13.3867L30.6953 8.64062L30.707 18.1387L22.4688 22.9082L21.9004 23.2363ZM40.8613 35.4883L32.623 40.2578L32.0547 40.5859L31.4512 40.2402L23.2363 35.5117L23.2305 25.3398L32.0371 20.2422L40.3516 25.0293C40.5449 25.0352 40.7383 25.1348 40.8438 25.3105L40.8555 25.3164V25.334C40.9551 25.5156 40.9492 25.7266 40.8555 25.8906L40.8613 35.4883Z"
                          fill="white"/>
                    </svg>
                  </div>
                  <div className="services-block-inner-text">
                    <p>{t.uxuiDesc}</p>
                  </div>
                </div>
              </a>
              <a href='/websites' style={{textDecoration: 'none'}}>
                <div className="services-block-inner">
                  <h2>{t.webDev}</h2>
                  <div className="services-block-inner-logo">
                    <svg width="50" height="38" viewBox="0 0 50 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M45.1094 0.0214844H4.92578C2.66406 0.0214844 0.824219 1.86133 0.824219 4.12305V33.4199C0.824219 35.6816 2.66406 37.5215 4.92578 37.5215H45.1035C47.3652 37.5215 49.2051 35.6816 49.2051 33.4199V4.12305C49.2109 1.86133 47.3711 0.0214844 45.1094 0.0214844ZM46.8672 33.4199C46.8672 34.3867 46.0762 35.1777 45.1094 35.1777H4.92578C3.95898 35.1777 3.16797 34.3867 3.16797 33.4199V12.332H46.8613V33.4199H46.8672ZM46.8672 11.1602H3.17383V4.12305C3.17383 3.15625 3.96484 2.36523 4.93164 2.36523H45.1094C46.0762 2.36523 46.8672 3.15625 46.8672 4.12305V11.1602Z"
                          fill="white"/>
                    </svg>
                  </div>
                  <div className="services-block-inner-text">
                    <p>{t.webDevDesc}</p>
                  </div>
                </div>

              </a>
              <a href='/apps' style={{textDecoration: 'none'}}>
                <div className="services-block-inner">
                  <h2>{t.appDev}</h2>
                  <div className="services-block-inner-logo">
                    <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M39.6133 16.3047H28.0762V4.58594C28.0762 2.13672 26.084 0.144531 23.6348 0.144531H5.125C2.67578 0.144531 0.683594 2.13672 0.683594 4.58594V38.8867C0.683594 41.3359 2.67578 43.3281 5.125 43.3281H39.6074C42.0566 43.3281 44.0488 41.3594 44.0488 38.9395V20.6992C44.0547 18.2734 42.0625 16.3047 39.6133 16.3047ZM23.6406 40.9844H5.125C3.9707 40.9844 3.02734 40.0469 3.02734 38.8867V15.9648L3.0332 15.85C3.0332 15.1727 3.0332 15.4668 3.0332 15.3063C3.0332 15.0637 3.0332 15.1047 3.0332 14.7754V4.5918C3.0332 3.4375 3.9707 2.49414 5.13086 2.49414H23.6406C24.7949 2.49414 25.7383 3.43164 25.7383 4.5918V17.4883C25.7326 17.8938 25.7356 18.0151 25.7324 17.8C25.7383 18.1609 25.7383 17.7812 25.7383 18.4375V18.8453V18.9004V38.8926C25.7324 40.0469 24.7949 40.9844 23.6406 40.9844ZM41.7109 38.9395C41.7109 40.0703 40.7734 40.9844 39.6133 40.9844H27.5547C27.8887 40.3574 28.082 39.6484 28.082 38.8867L28 20.8C28 20.4297 28 20.3922 28 20.2V19.6V18.6484H39.6133C40.7676 18.6484 41.7109 19.5684 41.7109 20.6934V38.9395Z"
                          fill="white"/>
                    </svg>
                  </div>
                  <div className="services-block-inner-text">
                    <p>{t.appDevDesc}</p>
                  </div>
                </div>


              </a>



            </div>
          </div>
        </section>
        <section className="tech">
          <div className="container">
            <div className="tech-block">
              <div
                  className="tech-block-title"
                  data-aos="fade-up"
                  data-aos-duration="700"
              >
                <h1>{t.ourTechnologies}</h1>
              </div>

              <div
                  className="tech-block-text"
                  data-aos="fade-up"
                  data-aos-duration="700"
              >
                <p>
                  {t.techDescription}
                </p>
              </div>

              <div className="tech-block-neon">
                <div
                    className="tech-block-slider"
                    data-aos="fade-up"
                    data-aos-duration="700"
                >
                  <div className="tech-block-slider-slide">
                    <div className="tech-slider-slide-img laravel-icon">
                      <Image
                          src="/images/swift.png"
                          alt="laravel"
                          width={100}
                          height={100}
                          style={{width: "auto", height: "auto", maxWidth: "100%"}}
                      />
                    </div>
                  </div>

                  <div className="tech-block-slider-slide">
                    <div className="tech-slider-slide-img">
                      <Image
                          src="/images/typescript.png"
                          alt="figma"
                          width={100}
                          height={100}
                          style={{ width: "auto", height: "auto", maxWidth: "100%" }}
                      />
                    </div>
                  </div>

                  <div className="tech-block-slider-slide">
                    <div className="tech-slider-slide-img">
                      <Image
                          src="/images/free-icon-python-5968350.png"
                          alt="unity"
                          width={100}
                          height={100}
                          style={{ width: "auto", height: "auto", maxWidth: "100%" }}
                      />
                    </div>
                  </div>

                  <div className="tech-block-slider-slide">
                    <div className="tech-slider-slide-img">
                      <Image
                          src="/images/React.png"
                          alt="react"
                          width={100}
                          height={100}
                          style={{ width: "auto", height: "auto", maxWidth: "100%" }}
                      />
                    </div>
                  </div>

                  <div className="tech-block-slider-slide">
                    <div className="tech-slider-slide-img">
                      <Image
                          src="/images/js.png"
                          alt="javascript"
                          width={100}
                          height={100}
                          style={{ width: "auto", height: "auto", maxWidth: "100%" }}
                      />
                    </div>
                  </div>

                  <div className="tech-block-slider-slide">
                    <div className="tech-slider-slide-img">
                      <Image
                          src="/images/Android.png"
                          alt="android"
                          width={100}
                          height={100}
                          style={{ width: "auto", height: "auto", maxWidth: "100%" }}
                      />
                    </div>
                  </div>

                  <div className="tech-block-slider-slide">
                    <div className="tech-slider-slide-img">
                      <Image
                          src="/images/Angular.png"
                          alt="angular"
                          width={100}
                          height={100}
                          style={{ width: "auto", height: "auto", maxWidth: "100%" }}
                      />
                    </div>
                  </div>

                  <div className="tech-block-slider-slide">
                    <div className="tech-slider-slide-img">
                      <Image
                          src="/images/nodejs.png"
                          alt="git"
                          width={100}
                          height={100}
                          style={{ width: "auto", height: "auto", maxWidth: "100%" }}
                      />
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
              <div
                  className="work-block-title"
                  data-aos="fade-up"
                  data-aos-duration="700"
              >
                <h1>{t.ourBestWorks}</h1>
              </div>
              <div className="work-block-content" style={{ color: "white" }}>
                {isPortfolioLoading ? (
                    <div>Loading...</div>
                ) : isPortfolioError ? (
                    <div>Error loading portfolio</div>
                ) : (
                    portfolioData?.map((item: PortfolioItem, index: number) => (
                        <PortfolioItem
                            key={index}
                            portfolio_title={item.portfolio_title}
                            portfolio_description={item.portfolio_description}
                            portfolio_img={item.portfolio_img}
                            portfolio_url={item.portfolio_url}
                        />
                    ))
                )}
              </div>
              <a
                  href="/portfolio"
                  className="work-block-content-link"
                  data-aos="fade-up"
                  data-aos-duration="700"
              >
                {t.allWorks}
                <span>
                <svg
                    width="16"
                    height="11"
                    viewBox="0 0 16 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 5.49988C0 4.94759 0.447715 4.49988 1 4.49988L14.6405 4.49988C15.315 4.99597 15.3149 6.00378 14.6405 6.49988L1 6.49988C0.447716 6.49988 0 6.05216 0 5.49988Z"
                      fill="white"
                  />
                  <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.1217 5.86388L9.57121 2.31334C9.18069 1.92282 9.18069 1.28965 9.57122 0.899125C9.96174 0.5086 10.5949 0.5086 10.9854 0.899125L14.536 4.44967L13.1217 5.86388Z"
                      fill="white"
                  />
                  <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.551 6.4648L11.0115 10.0043C10.6209 10.3949 9.98777 10.3949 9.59724 10.0043C9.20672 9.61382 9.20672 8.98066 9.59724 8.59013L13.1368 5.05058L14.551 6.4648Z"
                      fill="white"
                  />
                </svg>
              </span>
              </a>
            </div>
          </div>
        </section>
        <ClientsPage/>

        <Partners language={language as Language} />
      </div>
    </>
  );
}