"use client";
import { useEffect, useState } from "react";
import { useServices } from "@/app/api/query/query";
import "./servives.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Language } from '@/app/api/api';
import { useLanguage } from '@/app/context/LanguageContext';

export default function Services() {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { language } = useLanguage();
  
  const { data: services, isLoading: servicesLoading, isError } = useServices(language as Language);

  const translations = {
    ru: {
      menu: "Меню",
      about: "О НАС",
      services: "УСЛУГИ",
      portfolio: "ПОРТФОЛИО",
      feedback: "ОБРАТНОЙ СВЯЗЬ",
      clients: "НАШИ КЛИЕНТЫ",
      ourServices: "Наши услуги",
      servicesDescription: "Мы предоставляем полный спектр услуг по разработке и продвижению цифровых продуктов",
      getConsultation: "Получить консультацию",
      design: "UX/UI ДИЗАЙН",
      websites: "РАЗРАБОТКА САЙТОВ",
      apps: "РАЗРАБОТКА ПРИЛОЖЕНИЙ",
      designDescription: "Мы создаем современный и удобный дизайн для вашего проекта",
      websitesDescription: "Разрабатываем сайты любой сложности",
      appsDescription: "Создаем мобильные приложения для iOS и Android"
    },
    en: {
      menu: "Menu",
      about: "ABOUT US",
      services: "SERVICES",
      portfolio: "PORTFOLIO",
      feedback: "FEEDBACK",
      clients: "OUR CLIENTS",
      ourServices: "Our Services",
      servicesDescription: "We provide a full range of services for the development and promotion of digital products",
      getConsultation: "Get Consultation",
      design: "UX/UI DESIGN",
      websites: "WEBSITE DEVELOPMENT",
      apps: "APP DEVELOPMENT",
      designDescription: "We create modern and user-friendly design for your project",
      websitesDescription: "We develop websites of any complexity",
      appsDescription: "We create mobile applications for iOS and Android"
    }
  };

  const t = translations[language as keyof typeof translations];

  useEffect(() => {
    document.body.style.background = '#222222';
    
    const timer = setTimeout(() => {
      setMounted(true);
      
      AOS.init({
        duration: 1000,
        once: true,
        mirror: true,
        offset: 50,
      });
      
      setTimeout(() => {
        setIsLoading(false);
      }, 500); 
    }, 100);

    return () => {
      clearTimeout(timer);
      document.body.style.background = '';
    };
  }, []);

  if (!mounted || isLoading) {
    return (
      <div className={`loading-screen ${!isLoading ? 'fade-out' : ''}`}>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  function toggleDropdown(): void {
    throw new Error("Function not implemented.");
  }

  function selectLanguage(arg0: string): void {
    throw new Error("Function not implemented.");
  }
  const servicesData = services?.service
    ? Array.isArray(services.service)
      ? services.service
      : []
    : [];
  console.log(servicesData);
  // const handleLogoClick = () => {
  //   router.push("/");
  //   window.location.reload();
  // };

  return (
    <>
      <header className="header">
        <div className="header-block">
          <div className="container">
            <div className="header-block-flex">
              <a className="header-block-flex-logo" href="/">
                <Image
                  src="/img/logo.png"
                  alt="logo"
                  id="logo"
                  width={100}
                  height={100}
                />
              </a>

              <div className="header-block-flex-number">
                <a href="tel:+998990990011" id="call_number">
                  <span>+998</span> 99 099 00 11
                </a>
              </div>
            </div>

            <div className="header-block-fixed">
              <div className="header-block-fixed-menu">
                <input
                  type="checkbox"
                  id="fixed_menu"
                  className="header-fixed-menu-input"
                />
                <label htmlFor="fixed_menu">
                  <div>
                    <span id="menu_span"></span>
                    <span id="menu_span"></span>
                    <span id="menu_span"></span>
                  </div>
                  <p id="fixed_text">{t.menu}</p>
                </label>

                <ul className="header-fixed-menu-list">
                  <li>
                    <a href="/about">{t.about}</a>
                  </li>
                  <li>
                    <a href="/services">{t.services}</a>
                  </li>
                  <li>
                    <a href="/portfolio">{t.portfolio}</a>
                  </li>
                  <li>
                    <a href="/contact">{t.feedback}</a>
                  </li>
                  <li>
                    <a href="/clients">{t.clients}</a>
                  </li>
                </ul>
              </div>

              <div className="header-block-right-content">
                <div className="header-right-content-social">
                  <a href="#" id="social_icon">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#" id="social_icon">
                    <i className="fa-brands fa-square-facebook"></i>
                  </a>
                  <a href="#" id="social_icon">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="header-block-main">
              <div className="header-block-main-center">
                <div className="header-main-center-title">
                  <h1>{t.ourServices}</h1>
                </div>
                <div className="header-main-center-light">
                  <p>
                    {t.servicesDescription}
                  </p>
                </div>

                <div className="header-main-center-btn">
                  <a href="/contact">
                    {t.getConsultation}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.37713 15.6427C3.98661 15.2522 3.98661 14.619 4.37713 14.2285L14.0224 4.58321C14.8501 4.45711 15.5628 5.16974 15.4367 5.99743L5.79135 15.6427C5.40082 16.0333 4.76766 16.0333 4.37713 15.6427Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9133 6.62159L8.89209 6.62158C8.33981 6.62158 7.89209 6.17387 7.89209 5.62158C7.89209 5.0693 8.33981 4.62158 8.89209 4.62158L13.9133 4.62159L13.9133 6.62159Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.3486 6.03584L15.3486 11.0415C15.3486 11.5938 14.9009 12.0415 14.3486 12.0415C13.7963 12.0415 13.3486 11.5938 13.3486 11.0415L13.3486 6.03583L15.3486 6.03584Z"
                        fill="white"
                      />
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
          <div className="services-title" data-aos="fade-up">
            <h1>{t.ourServices}</h1>
          </div>

          <div className="services-block">
            <Link href="/design" style={{ textDecoration: "none" }}>
              <div className="services-block-inner" data-aos="fade-up">
                <h2 data-aos="fade-up">{t.design}</h2>
                <div className="services-block-inner-logo" data-aos="fade-up">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-aos="fade-up"
                  >
                    <path
                      d="M43.1934 23.9629L33.0449 18.1211L33.0332 6.60742L21.8711 0.185547L10.7207 6.63672L10.7324 18.1973L0.730469 23.9922L0.748047 36.8711L11.9102 43.2988L21.9531 37.4805L32.0547 43.2988L43.1992 36.8477L43.1934 23.9629ZM21.8711 2.89258L30.0977 7.62695L21.877 12.373L13.6504 7.64453L21.8711 2.89258ZM11.8809 20.2422L20.1074 24.9766L11.8867 29.7227L3.66016 24.9941L11.8809 20.2422ZM12.4785 40.2578L11.9102 40.5859L11.3066 40.2402L3.0918 35.5117L3.08008 26.0137L11.3066 30.7422L11.8926 31.082L12.4785 30.7422L20.7051 25.9961L20.7168 35.4941L12.4785 40.2578ZM21.9004 23.2363L21.2969 22.8906L13.082 18.1621L13.0703 8.66406L21.2969 13.3867L21.8828 13.7266L22.4688 13.3867L30.6953 8.64062L30.707 18.1387L22.4688 22.9082L21.9004 23.2363ZM40.8613 35.4883L32.623 40.2578L32.0547 40.5859L31.4512 40.2402L23.2363 35.5117L23.2305 25.3398L32.0371 20.2422L40.3516 25.0293C40.5449 25.0352 40.7383 25.1348 40.8438 25.3105L40.8555 25.3164V25.334C40.9551 25.5156 40.9492 25.7266 40.8555 25.8906L40.8613 35.4883Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="services-block-inner-text" data-aos="fade-up">
                  <p>
                    {t.designDescription}
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/websites"
              style={{ textDecoration: "none" }}
              className="services-block-inner-link"
            >
              <div className="services-block-inner" data-aos="fade-up">
                <h2 data-aos="fade-up">{t.websites}</h2>
                <div className="services-block-inner-logo" data-aos="fade-up">
                  <svg
                    width="50"
                    height="38"
                    viewBox="0 0 50 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-aos="fade-up"
                  >
                    <path
                      d="M45.1094 0.0214844H4.92578C2.66406 0.0214844 0.824219 1.86133 0.824219 4.12305V33.4199C0.824219 35.6816 2.66406 37.5215 4.92578 37.5215H45.1035C47.3652 37.5215 49.2051 35.6816 49.2051 33.4199V4.12305C49.2109 1.86133 47.3711 0.0214844 45.1094 0.0214844ZM46.8672 33.4199C46.8672 34.3867 46.0762 35.1777 45.1094 35.1777H4.92578C3.95898 35.1777 3.16797 34.3867 3.16797 33.4199V12.332H46.8613V33.4199H46.8672ZM46.8672 11.1602H3.17383V4.12305C3.17383 3.15625 3.96484 2.36523 4.93164 2.36523H45.1094C46.0762 2.36523 46.8672 3.15625 46.8672 4.12305V11.1602Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="services-block-inner-text" data-aos="fade-up">
                  <p>
                    {t.websitesDescription}
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/apps" style={{ textDecoration: "none" }}>
              <div className="services-block-inner" data-aos="fade-up">
                <h2 data-aos="fade-up">{t.apps}</h2>
                <div className="services-block-inner-logo" data-aos="fade-up">
                  <svg
                    width="45"
                    height="44"
                    viewBox="0 0 45 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-aos="fade-up"
                  >
                    <path
                      d="M39.6133 16.3047H28.0762V4.58594C28.0762 2.13672 26.084 0.144531 23.6348 0.144531H5.125C2.67578 0.144531 0.683594 2.13672 0.683594 4.58594V38.8867C0.683594 41.3359 2.67578 43.3281 5.125 43.3281H39.6074C42.0566 43.3281 44.0488 41.3594 44.0488 38.9395V20.6992C44.0547 18.2734 42.0625 16.3047 39.6133 16.3047ZM23.6406 40.9844H5.125C3.9707 40.9844 3.02734 40.0469 3.02734 38.8867V15.9648L3.0332 15.85C3.0332 15.1727 3.0332 15.4668 3.0332 15.3063C3.0332 15.0637 3.0332 15.1047 3.0332 14.7754V4.5918C3.0332 3.4375 3.9707 2.49414 5.13086 2.49414H23.6406C24.7949 2.49414 25.7383 3.43164 25.7383 4.5918V17.4883C25.7326 17.8938 25.7356 18.0151 25.7324 17.8C25.7383 18.1609 25.7383 17.7812 25.7383 18.4375V18.8453V18.9004V38.8926C25.7324 40.0469 24.7949 40.9844 23.6406 40.9844ZM41.7109 38.9395C41.7109 40.0703 40.7734 40.9844 39.6133 40.9844H27.5547C27.8887 40.3574 28.082 39.6484 28.082 38.8867L28 20.8C28 20.4297 28 20.3922 28 20.2V19.6V18.6484H39.6133C40.7676 18.6484 41.7109 19.5684 41.7109 20.6934V38.9395Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="services-block-inner-text" data-aos="fade-up">
                  <p>
                    {t.appsDescription}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
