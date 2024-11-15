'use client';
import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getPortfolio } from '@/app/api/query/query';

interface PortfolioItem {
  portfolio_title: string;
  portfolio_description: string;
  portfolio_img: string;
  portfolio_url: string;
}

const Portfolio: React.FC = () => {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const data = await getPortfolio();
        setPortfolio(data);
      } catch (error) {
        console.error('Error fetching portfolio:', error);
        setError('Error loading portfolio');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  const renderPortfolioItems = useMemo(() => {
    return portfolio.map((item, index) => (
      <div key={index} className="work-block-content-inner" data-aos="fade-up" data-aos-duration="700">
        <div className="work-content-inner-photo">
          <Image 
            src={item.portfolio_img}
            alt={item.portfolio_title}
            width={300}
            height={200}
            unoptimized={true}
            loading='lazy'
          />
        </div>
        <div className="work-content-inner-text">
          <h3>{item.portfolio_title}</h3>
          <p>{item.portfolio_description}</p>
        </div>
      </div>
    ));
  }, [portfolio]);

  if (error) return <div>{error}</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="wrapper">
      <section className="work">
        <div className="container">
          <div className="header-block-main">
            <div className="header-block-main-center">
              <div className="header-main-center-title">
                <h1>UX/UI DESIGN</h1>
              </div>
              <div className="header-main-center-light">
                <p>В нашем портфолио представлен не полный
                  список работ. Только лишь те, которые
                  нам разрешили выставлять наши
                  клиенты.</p>
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
          
          <div className="work-block">
            <div className="work-block-title" data-aos="fade-up" data-aos-duration="700">
              <h1>Наши лучшие работы</h1>
            </div>
            <div className="work-block-content">
              {renderPortfolioItems}
            </div>
            <Link href="#" className="work-block-content-link" data-aos="fade-up" data-aos-duration="700">
              Все работы
              <span>
                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
