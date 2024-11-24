"use client";
import { usePartner } from "../api/query/query";
import { Language } from "../api/api";
import Image from "next/image";
import styles from '../styles/Partners.module.css';
import Slider from 'react-slick';
import { useEffect, useRef } from 'react';

interface PartnersItem {
  partner_img: string;
}

// Define interface for arrow props
interface ArrowProps {
  onClick?: () => void;
  currentSlide?: number;
  slideCount?: number;
}

// Custom arrow components with proper typing
const PrevArrow = ({ onClick }: ArrowProps) => (
  <div className={`${styles.arrow} ${styles.prevArrow}`} onClick={onClick}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M15 18L9 12L15 6" stroke="#24b8af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

const NextArrow = ({ onClick }: ArrowProps) => (
  <div className={`${styles.arrow} ${styles.nextArrow}`} onClick={onClick}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M9 18L15 12L9 6" stroke="#24b8af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

export default function Partners({ language }: { language: Language }) {
  const sliderRef = useRef<Slider | null>(null);
  
  const {
    data: partners,
    isLoading,
    isError
  } = usePartner(language);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  };

  // Cleanup function
  useEffect(() => {
    return () => {
      if (sliderRef.current) {
        try {
          sliderRef.current.slickPause();
        } catch (error) {
          console.error("Error cleaning up slider:", error);
        }
      }
    };
  }, []);

  if (isLoading) return <div className={styles.loading}>Loading partners...</div>;
  if (isError) return <div className={styles.error}>Error loading partners</div>;

  return (
    <section className={styles.partner}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Our Partners</h1>
        </div>
        <div className={styles.sliderContainer}>
          <Slider ref={sliderRef} {...settings} className={styles.slider}>
            {partners?.map((partner: PartnersItem, index: number) => (
              <div key={index} className={styles.slide}>
                <div className={styles.slideContent}>
                  <Image
                    src={partner.partner_img}
                    alt={`Partner ${index + 1}`}
                    width={150}
                    height={80}
                    className={styles.slideImage}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
} 