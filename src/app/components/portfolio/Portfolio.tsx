'use client';
import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import { usePortfolio } from '@/app/api/query/query';
import AOS from 'aos';
import './portfolio.css'
import { useRouter } from 'next/navigation';
import { Language } from '@/app/api/api';
import { useLanguage } from '@/app/context/LanguageContext';

interface PortfolioItem {
  portfolio_title: string;
  portfolio_description: string;
  portfolio_img: string;
  portfolio_url: string;
}

const PortfolioItem: React.FC<PortfolioItem> = ({ portfolio_title, portfolio_description, portfolio_img, portfolio_url }) => (
  <div className="work-block-content-inner" data-aos="fade-up" data-aos-duration="700">
    <a href={portfolio_url} target="_blank" rel="noopener noreferrer" className='work-block-content-inner-link' style={{textDecoration: 'none'}}>
      <div className="work-content-inner-photo">
        <Image 
          src={portfolio_img}
          alt={portfolio_title}
          width={300}
          height={200}
          unoptimized={true}
          loading='lazy'
        />
      </div>
      <div className="work-content-inner-text">
        <h3>{portfolio_title}</h3>
        <p>{portfolio_description}</p>
      </div>
    </a>
  </div>
);

const Portfolio: React.FC = () => {
  const { language } = useLanguage();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  
  const { data: portfolio, isLoading, error } = usePortfolio(language as Language);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    if (portfolio) {
      setIsContentLoaded(true);
      AOS.refresh();
    }
  }, [portfolio]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setIsContentLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const renderPortfolioItems = useMemo(() => {
    return portfolio?.map((item: React.JSX.IntrinsicAttributes & PortfolioItem, index: React.Key | null | undefined) => (
      <PortfolioItem key={index} {...item }  />
    ));
  }, [portfolio]);

  const translations = {
    ru: {
      title: "UX/UI ДИЗАЙН",
      description: "В нашем портфолио представлен не полный список работ. Только лишь те, которые нам разрешили выставлять наши клиенты.",
      consultation: "Получить консультацию",
      bestWorks: "Наши лучшие работы",
      allWorks: "Все работы",
      menu: "Меню",
      about: "О НАС",
      services: "УСЛУГИ", 
      portfolio: "ПОРТФОЛИО",
      feedback: "ОБРАТНОЙ СВЯЗЬ",
      clients: "НАШИ КЛИЕНТЫ"
    },
    en: {
      title: "UX/UI DESIGN",
      description: "Our portfolio presents an incomplete list of works. Only those that our clients allowed us to display.",
      consultation: "Get consultation",
      bestWorks: "Our best works",
      allWorks: "All works",
      menu: "Menu",
      about: "ABOUT US",
      services: "SERVICES",
      portfolio: "PORTFOLIO", 
      feedback: "FEEDBACK",
      clients: "OUR CLIENTS"
    }
  };

  const t = translations[language as keyof typeof translations];

  if (error) return <div>Error loading portfolio</div>;

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <div className={`wrapper ${isContentLoaded ? 'loaded' : ''}`}>
          <header className="header">
            <div className="header-block">
              <div className="container">
                <div className="header-block-main">
                  <div className="header-block-main-center">
                    <div className="header-main-center-title">
                      <h1>{t.title}</h1>
                    </div>
                    <div className="header-main-center-light">
                      <p>{t.description}</p>
                    </div>
                    <div className="header-main-center-btn">
                      <a href="/contact ">
                        {t.consultation}
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M4.37713 15.6427C3.98661 15.2522 3.98661 14.619 4.37713 14.2285L14.0224 4.58321C14.8501 4.45711 15.5628 5.16974 15.4367 5.99743L5.79135 15.6427C5.40082 16.0333 4.76766 16.0333 4.37713 15.6427Z" fill="white"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M13.9133 6.62159L8.89209 6.62158C8.33981 6.62158 7.89209 6.17387 7.89209 5.62158C7.89209 5.0693 8.33981 4.62158 8.89209 4.62158L13.9133 4.62159L13.9133 6.62159Z" fill="white"/>
                          <path fillRule="evenodd" clipRule="evenodd" d="M15.3486 6.03584L15.3486 11.0415C15.3486 11.5938 14.9009 12.0415 14.3486 12.0415C13.7963 12.0415 13.3486 11.5938 13.3486 11.0415L13.3486 6.03583L15.3486 6.03584Z" fill="white"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="work">
            <div className="container">
              <div className="work-block" style={{position: 'relative', minHeight: '200px'}}>
                {isLoading && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'rgba(255, 255, 255, 0.8)',
                    zIndex: 10
                  }}>
                    <div className="loading-spinner"></div>
                  </div>
                )}
                {isContentLoaded && (
                  <>
                    <div className="work-block-title" data-aos="fade-up" data-aos-duration="700">
                      <h1>{t.bestWorks}</h1>
                    </div>
                    <div className="work-block-content">
                      {renderPortfolioItems}
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Portfolio;
