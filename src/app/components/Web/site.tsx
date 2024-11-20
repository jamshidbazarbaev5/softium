'use client';
import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePortfolio } from '@/app/api/query/query';
import AOS from 'aos';
import './web.css'
import { useRouter, usePathname } from 'next/navigation';
import { Language } from '@/app/api/api';
import { useLanguage } from '@/app/context/LanguageContext';




const Website: React.FC = () => {
  const { language } = useLanguage();
  const router = useRouter();

  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

 


  const translations = {
    ru: {
      title: "Создание сайтов",
      description:  'Создание сайтов – это ключ к расширению аудитории, усилению бренда и росту продаж. Сегодня собственный веб-сайт стал неотъемлемой частью успешного ведения бизнеса. Наша команда с более чем пятилетним опытом профессиональной разработки предлагает не просто создание сайтов, а полноценные решения, способные вывести ваш бизнес на новый уровень.',
      consultation: "Получить консультацию",
    },
    en: {
      title: "website creation",
      description: "Website creation is the key to expanding your audience, strengthening your brand and increasing sales. Today, having your own website has become an integral part of running a successful business. Our team with more than five years of experience in professional development offers not just website creation, but full-fledged solutions that can take your business to the next level.",
      consultation: "Get consultation",
    }
  };

  const t = translations[language as keyof typeof translations];


  return (
      <div className="wrapper">
        <section className="work">
          <div className="container">
            <div className="header-block-main">
              <div className="header-block-main-center">
                <div className="header-main-center-title" >
                  <h1>{t.title}</h1>
                </div>
                <div className="header-main-center-light">
                  <p>{t.description}</p>
                </div>
                <div className="header-main-center-btn" >
                  <a href="/contact">
                    {t.consultation}
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.37713 15.6427C3.98661 15.2522 3.98661 14.619 4.37713 14.2285L14.0224 4.58321C14.8501 4.45711 15.5628 5.16974 15.4367 5.99743L5.79135 15.6427C5.40082 16.0333 4.76766 16.0333 4.37713 15.6427Z" fill="white" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M13.9133 6.62159L8.89209 6.62158C8.33981 6.62158 7.89209 6.17387 7.89209 5.62158C7.89209 5.0693 8.33981 4.62158 8.89209 4.62158L13.9133 4.62159L13.9133 6.62159Z" fill="white" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M15.3486 6.03584L15.3486 11.0415C15.3486 11.5938 14.9009 12.0415 14.3486 12.0415C13.7963 12.0415 13.3486 11.5938 13.3486 11.0415L13.3486 6.03583L15.3486 6.03584Z" fill="white" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
  );
};

export default Website;
