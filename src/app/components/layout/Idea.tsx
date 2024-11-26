'use client'
import { useContact } from "@/app/api/query/query";
import { IContact } from "@/app/api/query/query"; 
import { useLanguage } from '@/app/context/LanguageContext';
import { Language } from '@/app/api/api';

export default function Idea() {
    const { language } = useLanguage();
    const { data: contactData, isLoading: isContactLoading, isError: isContactError } = useContact(language as Language);

    const translations = {
        ru: {
            title: "Есть идеи?",
            consultation: "Консультация",
            call: "Позвонить",
            loading: "Загрузка...",
            error: "Ошибка загрузки контактных данных"
        },
        en: {
            title: "Have ideas?",
            consultation: "Consultation",
            call: "Call us",
            loading: "Loading...",
            error: "Error loading contact data"
        }
    };

    const t = translations[language as keyof typeof translations];

    if (isContactLoading) return <div>{t.loading}</div>;
    if (isContactError) return <div>{t.error}</div>;

    const buttonClick = () => {
        const telegramUsername = 'w3bC0d3r';
        const telegramUrl = `tg://resolve?domain=${telegramUsername}`;
        const webTelegramUrl = `https://t.me/${telegramUsername}`;

        window.open(telegramUrl, '_blank');

        setTimeout(() => {
            window.open(webTelegramUrl, '_blank');
        }, 500);
    }

    const openTelegram = () => {
        const telegramUsername = 'w3bC0d3r';
        const telegramUrl = `tg://resolve?domain=${telegramUsername}`;
        const webTelegramUrl = `https://t.me/${telegramUsername}`;

        window.open(telegramUrl, '_blank');

        setTimeout(() => {
            window.open(webTelegramUrl, '_blank');
        }, 500);
    }

    const getConsultation = () => {
        window.location.href = '/contact';
    }

    return (
        <section className="idea">
            <div className="container">
                <div className="idea-title" data-aos="fade-up" data-aos-duration="700">
                    <h1>{t.title}</h1>
                </div>
                <div className="idea-block">
                    <div className="idea-block-flex">
                        <div className="idea-block-flex-email">
                            {contactData && contactData.length > 0 && (
                                <>
                                    <a 
                                        href={`mailto:${contactData[0].email}`} 
                                        data-aos="fade-up" 
                                        data-aos-duration="700"
                                    >
                                        {contactData[0].email}
                                    </a>

                                </>
                            )}
                        </div>
                        <div className="idea-block-flex-numbers">
                            {contactData && contactData.length>0 && (
                                <>
                                    <a 
                                        key={1}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            openTelegram();
                                        }}
                                        href="#"
                                    >
                                        {contactData[0].phone_number}
                                    </a>
                                </>
                            )}
                        </div>
                        <nav className="idea-block-flex-navi">
                            <button  style={{cursor: 'pointer'}}
                                data-aos="fade-up" 
                                data-aos-duration="700" 
                                onClick={getConsultation}
                            >
                                {t.consultation}
                            </button>

                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}