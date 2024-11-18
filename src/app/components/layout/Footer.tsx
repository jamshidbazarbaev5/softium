'use client';
import { useAddress } from "@/app/api/query/query";
import { Github, MapPin } from "lucide-react";
import Link from "next/link";

const SocialIcon = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li data-aos="fade-up" data-aos-duration="600">
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-80 transition-opacity"
    >
      {children}
    </a>
  </li>
);

const LinkList = ({ links }: { links: Array<{ href: string; text: string }> }) => (
  <ul className="footer-block-links-list">
    {links.map((link, index) => (
      <li key={index} data-aos="fade-up" data-aos-duration={600 + index * 50}>
        <Link href={link.href}>{link.text}</Link>
      </li>
    ))}
  </ul>
);

export default function Footer() {
  const { data, isLoading, isError } = useAddress();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const socialIcons = [
    { href: "#", svg: <svg width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M29.0865 1.05554C29.4836 0.884119 29.9181 0.824993 30.345 0.884323C30.7719 0.943654 31.1754 1.11927 31.5136 1.39289C31.8519 1.6665 32.1124 2.02813 32.2682 2.44011C32.4241 2.85209 32.4693 3.29939 32.3994 3.73539L28.7556 26.4088C28.4021 28.5959 26.0629 29.8501 24.1076 28.7607C22.4721 27.8493 20.0429 26.4451 17.8578 24.9799C16.7653 24.2465 13.4187 21.8978 13.8301 20.2266C14.1835 18.7977 19.8067 13.428 23.0199 10.2357C24.2811 8.98144 23.706 8.2579 22.2166 9.41158C18.5181 12.276 12.5801 16.632 10.6168 17.8583C8.88478 18.9395 7.98187 19.124 6.90224 18.9395C4.93252 18.6032 3.10579 18.0824 1.61484 17.4479C-0.399871 16.5908 -0.301862 13.7494 1.61323 12.9221L29.0865 1.05554Z" fill="white" /></svg> },
    { href: "#", svg: <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.4162 8.00999C11.0429 8.00999 7.51349 11.5394 7.51349 15.9127C7.51349 20.2859 11.0429 23.8154 15.4162 23.8154C19.7895 23.8154 23.3189 20.2859 23.3189 15.9127C23.3189 11.5394 19.7895 8.00999 15.4162 8.00999ZM15.4162 21.0489C12.588 21.0489 10.28 18.7409 10.28 15.9127C10.28 13.0845 12.588 10.7765 15.4162 10.7765C18.2444 10.7765 20.5524 13.0845 20.5524 15.9127C20.5524 18.7409 18.2444 21.0489 15.4162 21.0489ZM23.6426 5.8445C22.6215 5.8445 21.7969 6.66905 21.7969 7.69017C21.7969 8.71119 22.6215 9.53575 23.6426 9.53575C24.6636 9.53575 25.4882 8.7151 25.4882 7.69017C25.4885 7.44766 25.4409 7.20757 25.3484 6.98347C25.2557 6.75947 25.1197 6.55585 24.9483 6.3844C24.7768 6.21296 24.5733 6.07705 24.3492 5.9844C24.1251 5.89175 23.885 5.84422 23.6426 5.8445ZM30.8209 15.9127C30.8209 13.7858 30.8402 11.6781 30.7207 9.55501C30.6013 7.08906 30.0387 4.90051 28.2354 3.09726C26.4284 1.29015 24.2436 0.731455 21.7777 0.612013C19.6508 0.492562 17.5431 0.511827 15.4201 0.511827C13.2931 0.511827 11.1855 0.492562 9.06242 0.612013C6.59647 0.731455 4.40789 1.294 2.60464 3.09726C0.797538 4.90436 0.23884 7.08906 0.119398 9.55501C-5.28637e-05 11.682 0.0192124 13.7896 0.0192124 15.9127C0.0192124 18.0358 -5.28637e-05 20.1472 0.119398 22.2703C0.23884 24.7362 0.801389 26.9249 2.60464 28.728C4.41175 30.5352 6.59647 31.0939 9.06242 31.2133C11.1893 31.3328 13.297 31.3135 15.4201 31.3135C17.547 31.3135 19.6546 31.3328 21.7777 31.2133C24.2436 31.0939 26.4322 30.5313 28.2354 28.728C30.0426 26.921 30.6013 24.7362 30.7207 22.2703C30.844 20.1472 30.8209 18.0396 30.8209 15.9127ZM27.4301 24.9983C27.1489 25.6996 26.8098 26.2236 26.2665 26.763C25.7233 27.3063 25.2031 27.6453 24.5018 27.9266C22.4751 28.7319 17.6625 28.5508 15.4162 28.5508C13.1699 28.5508 8.35349 28.7319 6.3267 27.9304C5.62549 27.6492 5.10149 27.3102 4.56202 26.7668C4.01873 26.2236 3.67966 25.7034 3.39838 25.0022C2.59694 22.9716 2.77803 18.159 2.77803 15.9127C2.77803 13.6663 2.59694 8.84989 3.39838 6.82319C3.67966 6.12199 4.01873 5.59789 4.56202 5.05845C5.10531 4.51905 5.62549 4.17612 6.3267 3.89485C8.35349 3.09341 13.1699 3.2745 15.4162 3.2745C17.6625 3.2745 22.4789 3.09341 24.5057 3.89485C25.2069 4.17612 25.731 4.51519 26.2704 5.05845C26.8137 5.6018 27.1527 6.12199 27.434 6.82319C28.2354 8.84989 28.0543 13.6663 28.0543 15.9127C28.0543 18.159 28.2354 22.9716 27.4301 24.9983Z" fill="white" /></svg> },
  ];

  const linkGroups = [
    [
      { href: "/about", text: "О НАС" },
      { href: "/services", text: "УСЛУГИ" },
      { href: "/portfolio", text: "ПОРТФОЛИО" },
      { href: "/contact", text: "ОБРАТНОЙ СВЯЗЬ" },
      { href: "/clients", text: "НАШИ КЛИЕНТЫ" },
    ],
    [
      { href: "/design", text: "UX/UI DESIGN" },
      { href: "/websites", text: "РАЗРАБОТКА САЙТОВ" },
      { href: "/apps", text: "РАЗРАБОТКА ПРИЛОЖЕНИЙ" },
    ],
    [
      { href: "#", text: "info@softium.com" },
      { href: "#", text: "+998 99 999 99 99" },
      { href: "#", text: "+998 99 999 99 99" },
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
            <p>© SOFTIUM 2024</p>
          </div>
          <div className="footer-bottom-nav">
            <div className="footer-bottom-nav-map">
              <div className="footer-nav-map-icon">
                <Link href="#"><MapPin /></Link>
              </div>
              <div className="footer-nav-map-text">
                <p>{data[0].address_name}</p>
              </div>
              <div className="footer-nav-map-link">
                <Link href={data[0].address_url}>На карте</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}