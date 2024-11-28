'use client';
import React, { useEffect, useState, useMemo } from 'react';
import { usePortfolio } from '@/app/api/query/query';
import AOS from 'aos';
import './about.css'
import { Language } from '@/app/api/api';
import { useLanguage } from '@/app/context/LanguageContext';
import Animation from '../animation/animation';



const About: React.FC = () => {
  const { language } = useLanguage();
  const [loading, setLoading] = useState(true);
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

  

  const translations = {
    ru: {
      title: "Наша веб-студия",
      description: 'Основанная в 2019 году в Нукусе, веб-студия «Softum» специализируется на предоставлении полного набора услуг по созданию веб-сайтов и разработке мобильных приложений.',
      consultation: "Получить консультацию",
      bestWorks: "Наши лучшие работы",
      allWorks: "Все работы",
      menu: "Меню",
      about: "О НАС",
      services: "УСЛУГИ", 
      portfolio: "ПОРТФОЛИО",
      feedback: "ОБРАТНОЙ СВЯЗЬ",
      clients: "НАШИ КЛИЕНТЫ",
      complexSolutions: "КОМПЛЕКСНЫЕ РЕШЕНИЯ",
      designDevelopment: "Дизайн, Разработка.",
      aboutDescription: "На протяжении 5 лет мы помогаем нашим клиентам развивать бизнес, используя передовые интернет-технологии. Мы создаем веб-сайты, которые приносят ощутимые результаты. Расскажите нам о своих идеях и целях, а мы проведем анализ рынка, вашей аудитории и конкурентов, чтобы предложить лучшее решение. Большинство наших новых проектов приходит по рекомендациям благодарных клиентов."
    },
    en: {
      title: "Our web studio",
      description:'Founded in 2019 in Nukus, the Softum web studio specializes in providing a full range of services for website creation and mobile application development.',

      consultation: "Get consultation",
      bestWorks: "Our best works",
      allWorks: "All works",
      menu: "Menu",
      about: "ABOUT US",
      services: "SERVICES",
      portfolio: "PORTFOLIO", 
      feedback: "FEEDBACK",
      clients: "OUR CLIENTS",
      complexSolutions: "COMPLEX SOLUTIONS",
      designDevelopment: "Design, Development.",
      aboutDescription: "For 5 years, we have been helping our clients grow their business using cutting-edge internet technologies. We create websites that deliver tangible results. Tell us about your ideas and goals, and we will analyze the market, your audience, and competitors to offer the best solution. Most of our new projects come from recommendations of satisfied clients."
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
                      <a href="/contact">
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
          <section>
            <div className="about-block" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300">
              <h2 className="section-title" data-aos="fade-right" data-aos-delay="200">
                {t.complexSolutions}
              </h2>
              <div style={{position: 'relative'}} data-aos="fade-right" data-aos-delay="400">
                <h1 className="main-title">
                  {t.designDevelopment}<br/>
                </h1>
                <div className="watermark">SOFTIUM</div>
              </div>
              <p className="description" data-aos="fade-right" data-aos-delay="600">
                {t.aboutDescription}
              </p>
            </div>
            <Animation /> 
          </section>
        </div>
      )}
    </>
  );
};

export default About;
