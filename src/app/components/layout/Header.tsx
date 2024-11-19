"use client";
import { useEffect, useState } from "react";
import { Mail, MapPin, Phone, Instagram } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLanguage } from "@/app/context/LanguageContext";
import { useAddress, useContact } from "@/app/api/query/query";
import { Language } from "@/app/api/api";

const translations = {
  ru: {
    menu: "Меню",
    about: "О НАС",
    services: "УСЛУГИ",
    portfolio: "ПОРТФОЛИО",
    contact: "ОБРАТНАЯ СВЯЗЬ",
    clients: "НАШИ КЛИЕНТЫ",
  },
  en: {
    menu: "Menu",
    about: "ABOUT",
    services: "SERVICES",
    portfolio: "PORTFOLIO",
    contact: "CONTACT",
    clients: "OUR CLIENTS",
  }
};

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { data: contactData } = useContact(language);
  const { data: addressData } = useAddress(language);

  const handleLanguageChange = (newLang: 'ru' | 'en') => {
    setLanguage(newLang);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const getPageTitle = () => {
    switch (pathname) {
      case "/portfolio":
        return t.portfolio;
      case "/services":
        return t.services;
      case "/about":
        return t.about;
      case "/contact":
        return t.contact;
      case "/clients":
        return t.clients;
      default:
        return t.portfolio;
    }
  };

  const redirectToMainPage = () => {
    router.push("/");
  };

  useEffect(() => {
    const initializeStyles = () => {
      document.body.classList.remove("page-transition");

      document.body.style.opacity = "0.99";

      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-in-out",
      });

      setTimeout(() => {
        document.body.style.opacity = "1";
        AOS.refresh();
      }, 100);
    };

    document.body.classList.add("page-transition");

    setTimeout(initializeStyles, 50);

    return () => {
      document.body.classList.remove("page-transition");
      document.body.style.opacity = "1";
    };
  }, [pathname]);

  const redirectToService = (e: React.MouseEvent) => {
    e.preventDefault();
    document.body.classList.add("page-transition");

    setTimeout(() => {
      router.push("/services");
    }, 100);
  };

  const formatTelegramUrl = (phoneNumber: string) => {
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    return `https://t.me/${cleanNumber}`;
  };

  return (
    <header>
      <div className="header-block-navbar">
        <div className="header-block-navbar-inner">
          <div className="header-block-navbar-logo">
            <Image src="/img/logo.png" alt="logo" width={50} height={50} />
          </div>
          <div className="header-block-navbar-other">
            <div className="header-navbar-other-lang">
              <div className="dropdown-label" onClick={toggleDropdown}>
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
              </div>
            </div>
            <div className="header-navbar-other-contact">
              {addressData?.[0] && (
                <Link 
                  href={addressData[0].address_url} 
                  className="header-other-contact-location" 
                  style={{color:"white"}}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin />
                </Link>
              )}
              {contactData?.[0] && (
                <Link 
                  href={`mailto:${contactData[0].email}`} 
                  className="header-other-contact-email"  
                  style={{color:"white"}}
                >
                  <Mail />
                </Link>
              )}
              {contactData?.[0] && (
                <Link 
                  href={formatTelegramUrl(contactData[0].phone_number)}
                  className="header-other-contact-phone"  
                  style={{color:"white"}}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone />
                </Link>
              )}
            </div>
          </div>
          <nav className="header-navbar-menu">
            <input
              type="checkbox"
              className="header-navbar-menu-input"
              id="menu"
            />
            <label htmlFor="menu">
              <span></span>
              <span></span>
              <span></span>
            </label>
            <ul className="header-navbar-menu-list">
              <li>
                <a href="/about">{t.about}</a>
              </li>
              <li>
                <a href="/services" onClick={redirectToService}>
                  {t.services}
                </a>
              </li>
              <li>
                <a href="/portfolio">{t.portfolio}</a>
              </li>
              <li>
                <Link href="/contact">{t.contact}</Link>
              </li>
              <li>
                <Link href="/clients">{t.clients}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="header-block-flex">
        <div className="header-block-flex-logo">
          <a href="/">
            <Image
              src="/img/logo.png"
              alt="logo"
              width={50}
              height={50}
              id="logo"
            />
            <p id="logo_title">SOFTIUM</p>
          </a>
        </div>
        <div className="header-block-flex-number">
          {contactData?.[0] && (
            <Link 
              href={formatTelegramUrl(contactData[0].phone_number)}
              id="call_number"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>+998</span> 99 099 00 11
            </Link>
          )}
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
          <div className="header-fixed-menu-link">
            <Link href="#" id="fixed_link">
              {getPageTitle()}
            </Link>
          </div>
          <ul className="header-fixed-menu-list">
            <li>
              <Link href="/about">{t.about}</Link>
            </li>
            <li>
              <a href="/services">{t.services}</a>
            </li>
            <li>
              <a href="/portfolio">{t.portfolio}</a>
            </li>
            <li>
              <Link href="/contact">{t.contact}</Link>
            </li>
            <li>
              <Link href="/clients">{t.clients}</Link>
            </li>
          </ul>
        </div>
        <div className="header-block-right-content">
          <div className="header-right-content-lang">
            <Link 
              href="#" 
              id="lang" 
              className={language === 'ru' ? 'active' : ''}
              onClick={() => handleLanguageChange('ru')}
            >
              RU
            </Link>
            <Link 
              href="#" 
              id="lang" 
              className={language === 'en' ? 'active' : ''}
              onClick={() => handleLanguageChange('en')}
            >
              EN
            </Link>
          </div>
          <div className="header-right-content-social">
            <Link href="#" id="social_icon">
              <Instagram />
            </Link>
          </div>
          <div className="header-right-content-email">
            {contactData?.[0] && (
              <Link href={`mailto:${contactData[0].email}`}>
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  id="email_icon"
                >
                  <path d="M123.25 24.192c0-.018 0-.034-.005-.052s-.007-.063-.009-.094a1.734 1.734 0 0 0-.083-.408c-.006-.018 0-.037-.011-.055s-.01-.015-.013-.023a1.734 1.734 0 0 0-.227-.407c-.021-.028-.043-.053-.066-.08a1.755 1.755 0 0 0-.31-.294c-.012-.009-.022-.02-.034-.028a1.744 1.744 0 0 0-.414-.2c-.034-.012-.068-.022-.1-.032a1.733 1.733 0 0 0-.474-.073H6.5a1.733 1.733 0 0 0-.474.073c-.035.01-.068.02-.1.032a1.744 1.744 0 0 0-.414.2c-.012.008-.022.019-.034.028a1.755 1.755 0 0 0-.31.294c-.022.027-.045.052-.066.08a1.734 1.734 0 0 0-.227.407c0 .008-.01.015-.013.023s-.005.037-.011.055a1.734 1.734 0 0 0-.083.408c0 .032-.009.063-.009.094s-.005.034-.005.052v79.615c0 .023.006.045.007.068a1.737 1.737 0 0 0 .019.188c.008.051.015.1.027.152a1.74 1.74 0 0 0 .056.179c.017.047.033.094.054.139a1.729 1.729 0 0 0 .093.172c.024.04.048.081.075.119a1.743 1.743 0 0 0 .125.152c.033.036.066.072.1.106.021.019.037.042.059.061s.036.017.052.03a1.736 1.736 0 0 0 .452.263c.035.014.071.022.107.033a1.732 1.732 0 0 0 .488.085c.012 0 .023.006.035.006H121.501c.012 0 .023-.006.034-.006a1.732 1.732 0 0 0 .489-.085c.035-.011.07-.019.1-.033a1.736 1.736 0 0 0 .453-.263c.016-.013.036-.017.052-.03s.038-.042.059-.061c.036-.034.069-.069.1-.106a1.743 1.743 0 0 0 .125-.152c.027-.038.051-.078.075-.119a1.729 1.729 0 0 0 .093-.172c.021-.045.037-.092.054-.139a1.74 1.74 0 0 0 .056-.179c.012-.05.019-.1.027-.152a1.737 1.737 0 0 0 .019-.188c0-.023.007-.045.007-.068zM45.8 60.316l17.058 14.677a1.751 1.751 0 0 0 2.283 0L82.2 60.316l35.512 41.741H10.289zM8.25 99.052V28.007l34.9 30.026zm76.6-41.019 34.9-30.026v71.045zm31.931-32.091L81.276 56.493c-.006.005-.014.008-.02.014l-.019.02L64 71.358 46.763 56.527l-.019-.02-.02-.014-35.507-30.551z" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
