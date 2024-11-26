'use client';
import {useAddress, useContact} from "../../api/query/query";
import {  MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from '../../context/LanguageContext';
import { Language } from '../../api/api';

const SocialIcon = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li data-aos="fade-up" data-aos-duration="600">
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-80 transition-opacity"
    >
      {children}
    </Link>
  </li>
);

const LinkList = ({ links }: { links: Array<{ href: string; text: string; onClick?: (e: React.MouseEvent) => void }> }) => (
  <ul className="footer-block-links-list">
    {links.map((link, index) => (
      <li key={index} data-aos="fade-up" data-aos-duration={600 + index * 50}>
        <a href={link.href} onClick={link.onClick}>{link.text}</a>
      </li>
    ))}
  </ul>
);

export default function Footer() {
  const { language } = useLanguage();
  const { data: addressData, isLoading: isAddressLoading, isError: isAddressError } = useAddress(language as Language);
  const { data: contactData, isLoading: isContactLoading, isError: isContactError } = useContact(language as Language);

  const translations = {
    ru: {
      about: "О НАС",
      services: "УСЛУГИ",
      portfolio: "ПОРТФОЛИО",
      feedback: "ОБРАТНОЙ СВЯЗЬ",
      clients: "НАШИ КЛИЕНТЫ",
      design: "UX/UI DESIGN",
      websites: "РАЗРАБОТКА САЙТОВ",
      apps: "РАЗРАБОТКА ПРИЛОЖЕНИЙ",
      onMap: "На карте",
      copyright: "© SOFTIUM 2024"
    },
    en: {
      about: "ABOUT US",
      services: "SERVICES",
      portfolio: "PORTFOLIO",
      feedback: "FEEDBACK",
      clients: "OUR CLIENTS",
      design: "UX/UI DESIGN",
      websites: "WEBSITE DEVELOPMENT",
      apps: "APP DEVELOPMENT",
      onMap: "On map",
      copyright: "© SOFTIUM 2024"
    }
  };

  const t = translations[language as keyof typeof translations];

  if (isAddressLoading || isContactLoading) return <div>Loading...</div>;
  if (isAddressError || isContactError) return <div>Error</div>;

  const socialIcons = [
    { 
      href: "https://t.me/w3bC0d3r", 
      svg: <svg width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M29.0865 1.05554C29.4836 0.884119 29.9181 0.824993 30.345 0.884323C30.7719 0.943654 31.1754 1.11927 31.5136 1.39289C31.8519 1.6665 32.1124 2.02813 32.2682 2.44011C32.4241 2.85209 32.4693 3.29939 32.3994 3.73539L28.7556 26.4088C28.4021 28.5959 26.0629 29.8501 24.1076 28.7607C22.4721 27.8493 20.0429 26.4451 17.8578 24.9799C16.7653 24.2465 13.4187 21.8978 13.8301 20.2266C14.1835 18.7977 19.8067 13.428 23.0199 10.2357C24.2811 8.98144 23.706 8.2579 22.2166 9.41158C18.5181 12.276 12.5801 16.632 10.6168 17.8583C8.88478 18.9395 7.98187 19.124 6.90224 18.9395C4.93252 18.6032 3.10579 18.0824 1.61484 17.4479C-0.399871 16.5908 -0.301862 13.7494 1.61323 12.9221L29.0865 1.05554Z" fill="white" />
      </svg>
    },
    {
      href: "https://www.linkedin.com/in/softium-web-studio-78065b2b5/",
      svg: <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="linkedin_icon"
      >
        <path
            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
      </svg>
    }
  ];

  const handleTelegramClick = (phoneNumber: string) => {
    const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
    const telegramUrl = `tg://resolve?phone=${cleanNumber}`;
    const webTelegramUrl = `https://web.telegram.org/k/#/+${cleanNumber}`;

    window.open(telegramUrl, '_blank');

    setTimeout(() => {
      window.open(webTelegramUrl, '_blank');
    }, 500);
  };

  const linkGroups = [
    [
      {href: "/about", text: t.about},
      {href: "/services", text: t.services},
      {href: "/portfolio", text: t.portfolio},
      { href: "/contact", text: t.feedback },
      { href: "/#clients", text: t.clients },
    ],
    [
      { href: "/design", text: t.design },
      { href: "/websites", text: t.websites },
      { href: "/apps", text: t.apps },
    ],
    [
      { href: `mailto:${contactData[0].email}`, text: contactData[0].email },
      { 
        href: "#",
        text: contactData[0].phone_number,
        onClick: (e: React.MouseEvent) => {
          e.preventDefault();
          handleTelegramClick(contactData[0].phone_number);
        }
      },
      { 
        href: "#",
        text: contactData[1].phone_number,
        onClick: (e: React.MouseEvent) => {
          e.preventDefault();
          handleTelegramClick(contactData[1].phone_number);
        }
      },
    ],
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-block">
          <div className="footer-block-social">
            <ul className="footer-block-social-list">
              {socialIcons.map((icon, index) => (
                <SocialIcon key={index} href={icon.href}>
                  {icon.svg || icon}
                </SocialIcon>
              ))}
            </ul>
          </div>
          <div className="footer-block-links">
            {linkGroups.map((group, index) => (
              <LinkList key={index} links={group} />
            ))}
          </div>
        </div>
      </div>
      <div className="footer-down">
        <div className="footer-bottom">
          <div className="footer-bottom-name">
            <p>{t.copyright}</p>
          </div>
          <div className="footer-bottom-nav">
            <div className="footer-bottom-nav-map">
              <div className="footer-nav-map-icon">
                <Link href="#"><MapPin /></Link>
              </div>
              <div className="footer-nav-map-text">
                <p>{addressData[0].address_name}</p>
              </div>
              <div className="footer-nav-map-link">
                <Link href={addressData[0].address_url}>{t.onMap}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}