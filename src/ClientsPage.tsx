"use client";
import { useState, useRef } from 'react';
import { useCustomerFeedback } from '@/app/api/query/query';
import { Language } from '@/app/api/api';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slide.css';
import { useLanguage } from '@/app/context/LanguageContext';

interface VideoPlayerProps {
  video: string;
  isPlaying: boolean;
  onPlayClick: () => void;
}

const VideoPlayer = ({ video, isPlaying, onPlayClick }: VideoPlayerProps) => {
  const { language } = useLanguage();
  const translations = {
    en: {
      browserNotSupported: "Your browser does not support the video tag."
    },
    ru: {
      browserNotSupported: "Ваш браузер не поддерживает видео тег."
    }
  };
  const t = translations[language as keyof typeof translations];

  return (
    <div className="client-block-video">
      <video 
        src={video}
        controls={isPlaying}
        playsInline
        className="client-video"
      >
        {t.browserNotSupported}
      </video>
      
      {!isPlaying && (
        <div className="client-block-video-btn" onClick={onPlayClick}>
          <span>
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.4716 7.10167C18.3662 8.13195 18.3662 10.7989 16.4716 11.8292L5.03235 18.0498C3.19103 19.0512 0.928223 17.7478 0.928223 15.6861V3.24481C0.928223 1.18301 3.19104 -0.12026 5.03234 0.881043L16.4716 7.10167Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      )}
    </div>
  );
};

interface VideoModalProps {
  video: string;
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal = ({ video, isOpen, onClose }: VideoModalProps) => {
  const { language } = useLanguage();
  const translations = {
    en: {
      browserNotSupported: "Your browser does not support the video tag."
    },
    ru: {
      browserNotSupported: "Ваш браузер не поддерживает видео тег."
    }
  };
  const t = translations[language as keyof typeof translations];
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!isOpen) return null;

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-content" onClick={e => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose}>×</button>
        <video
          ref={videoRef}
          src={video}
          controls
          autoPlay
          playsInline
          className="video-modal-player"
        >
          {t.browserNotSupported}
        </video>
      </div>
    </div>
  );
};

export default function ClientsPage() {
  const { language } = useLanguage();
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [modalVideo, setModalVideo] = useState<string | null>(null);
  const { data: customerFeedback, isLoading, isError } = useCustomerFeedback(language as Language);

  const handlePlayClick = (videoUrl: string) => {
    setPlayingVideo(videoUrl);
    setModalVideo(videoUrl);
  };

  const handleCloseModal = () => {
    setModalVideo(null);
    setPlayingVideo(null);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const translations = {
    ru: {
      loading: "Загрузка...",
      error: "Ошибка при загрузке видео",
      title: "Клиенты о нас",
      browserNotSupported: "Ваш браузер не поддерживает видео"
    },
    en: {
      loading: "Loading...",
      error: "Error loading videos",
      title: "Clients About Us",
      browserNotSupported: "Your browser does not support the video tag"
    }
  };

  const t = translations[language as keyof typeof translations];

  if (isLoading) return <div>{t.loading}</div>;
  if (isError) return <div>{t.error}</div>;

  return (
    <>
      <section className="client" id="clients">
        <div className="container">
          <div className="client-title" data-aos="fade-up" data-aos-duration="700">
            <h1>{t.title}</h1>
          </div>
          <div className="client-block" data-aos="fade-up" data-aos-duration="700">
            <Slider {...sliderSettings}>
              {customerFeedback?.map((item: { video: string }, index: number) => (
                <div key={index}>
                  <div className="slider-item-padding">
                    <VideoPlayer
                      video={item.video}
                      isPlaying={playingVideo === item.video}
                      onPlayClick={() => handlePlayClick(item.video)}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      
      <VideoModal
        video={modalVideo || ''}
        isOpen={modalVideo !== null}
        onClose={handleCloseModal}
      />
    </>
  );
}
