"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { usePartner } from '@/app/api/query/query';
import { Language } from '@/app/api/api';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface PartnersProps {
  language: Language;
}

const Partners: React.FC<PartnersProps> = ({ language }) => {
  const { data: partners, isLoading, error } = usePartner(language);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const translations = {
    ru: {
      ourPartners: "Наши партнеры"
    },
    en: {
      ourPartners: "Our Partners"
    }
  };

  const t = translations[language];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading partners</div>;

  return (
    <section className="partner">
      <div className="container">
        <h2 
          className="partner-title"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          {t.ourPartners}
        </h2>
        <div 
          className="partner-grid"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {partners?.map((partner: { partner_img: string }, index: number) => (
            <div 
              key={index} 
              className="partner-item"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={100 * (index + 1)}
            >
              <Image
                src={partner.partner_img}
                alt={`Partner ${index + 1}`}
                width={130}
                height={60}
                style={{ 
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
                unoptimized={true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;