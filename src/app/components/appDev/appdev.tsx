"use client";
import "./app.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import { useLanguage } from '@/app/context/LanguageContext'

export default function Design() {
    const { language } = useLanguage();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
        });
    }, []);

    const translations = {
        ru: {
            menu: "Меню",
            portfolio: "Портфолио",
            aboutUs: "О НАС",
            services: "УСЛУГИ",
            feedback: "ОБРАТНОЙ СВЯЗЬ",
            ourClients: "НАШИ КЛИЕНТЫ",
            appDevelopment: "Разработка мобильных приложений",
            appDescription: "Мобильные технологии стали неотъемлемой частью современного бизнеса, открывая новые возможности для взаимодействия с клиентами. Наша команда профессионалов предлагает услуги по созданию гибридных мобильных приложений, которые работают как на iOS, так и на Android.",
            getConsultation: "Получить консультацию",
            whatWeOffer: "Что мы предлагаем",
            analysis: "Анализ бизнес-потребностей: определение целей и задач приложения для достижения максимальной эффективности.",
            design: "Разработку современного дизайна: создание удобного и привлекательного интерфейса, адаптированного под разные устройства.",
            testing: "Тестирование и оптимизацию: обеспечение стабильной работы приложения и отличной производительности."
        },
        en: {
            menu: "Menu",
            portfolio: "Portfolio",
            aboutUs: "ABOUT US",
            services: "SERVICES",
            feedback: "FEEDBACK",
            ourClients: "OUR CLIENTS",
            appDevelopment: "Mobile App Development",
            appDescription: "Mobile technologies have become an integral part of modern business, opening new opportunities for customer interaction. Our team of professionals offers services for creating hybrid mobile applications that work on both iOS and Android.",
            getConsultation: "Get Consultation",
            whatWeOffer: "What We Offer",
            analysis: "Business needs analysis: defining application goals and objectives to achieve maximum efficiency.",
            design: "Modern design development: creating a user-friendly and attractive interface adapted for different devices.",
            testing: "Testing and optimization: ensuring stable application operation and excellent performance."
        }
    };

    const t = translations[language as keyof typeof translations];

    return (
        <div>
            <header className="header">
                <div className="header-block">
                    <div className="container">

                        <div className="header-block-flex">
                            <div className="header-block-flex-logo">
                                <a href="/">
                                    <Image src="/img/logo.png" alt="logo" id="logo" width={100} height={100} />
                                    <p id="logo_title">SOFTIUM</p>
                                </a>
                            </div>
                            <div className="header-block-flex-number">
                                {/*<a href="tel:+998990990011" id="call_number">*/}
                                {/*    <span>+998</span> 99 099 00 11*/}
                                {/*</a>*/}
                            </div>
                        </div>
                        <div className="header-block-fixed">
                            <div className="header-block-fixed-menu">
                                <input
                                    type="checkbox"
                                    id="fixed_menu"
                                    className="header-fixed-menu-input"
                                />
                                <label htmlFor="fixed_menu">
                                    <div>
                                        <span id="menu_span"></span>
                                        <span id="menu_span"></span>
                                        <span id="menu_span"></span>
                                    </div>
                                    <p id="fixed_text">{t.menu}</p>
                                </label>
                                {/*<div className="header-fixed-menu-link">*/}
                                {/*    <a href="/portfolio" id="fixed_link">*/}
                                {/*        {t.portfolio}*/}
                                {/*    </a>*/}
                                {/*</div>*/}
                                <ul className="header-fixed-menu-list">
                                    <li><a href="/about">{t.aboutUs}</a></li>
                                    <li><a href="/services">{t.services}</a></li>
                                    <li><a href="/portfolio">{t.portfolio}</a></li>
                                    <li><a href="/contact">{t.feedback}</a></li>
                                    <li><a href="/clients">{t.ourClients}</a></li>
                                </ul>
                            </div>
                            <div className="header-block-right-content">
                                {/* <div className="header-right-content-lang">
                                    <a href="#" id="lang">
                                        RU
                                    </a>
                                    <a href="#" id="lang">
                                        EN q
                                    </a>
                                </div> */}
                                {/* <div className="header-right-content-social">
                                    <a href="#" id="social_icon">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                    <a href="#" id="social_icon">
                                        <i className="fa-brands fa-square-facebook"></i>
                                    </a>
                                    <a href="#" id="social_icon">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div> */}
                                {/* <div className="header-right-content-email">
                                    <a href="#">
                                        <svg
                                            data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 128 128"
                                            id="email_icon"
                                        >
                                            <path d="M123.25 24.192c0-.018 0-.034-.005-.052s-.007-.063-.009-.094a1.734 1.734 0 0 0-.083-.408c-.006-.018 0-.037-.011-.055s-.01-.015-.013-.023a1.734 1.734 0 0 0-.227-.407c-.021-.028-.043-.053-.066-.08a1.755 1.755 0 0 0-.31-.294c-.012-.009-.022-.02-.034-.028a1.744 1.744 0 0 0-.414-.2c-.034-.012-.068-.022-.1-.032a1.733 1.733 0 0 0-.474-.073H6.5a1.733 1.733 0 0 0-.474.073c-.035.01-.068.02-.1.032a1.744 1.744 0 0 0-.414.2c-.012.008-.022.019-.034.028a1.755 1.755 0 0 0-.31.294c-.022.027-.045.052-.066.08a1.734 1.734 0 0 0-.227.407c0 .008-.01.015-.013.023s-.005.037-.011.055a1.734 1.734 0 0 0-.083.408c0 .032-.009.063-.009.094s-.005.034-.005.052v79.615c0 .023.006.045.007.068a1.737 1.737 0 0 0 .019.188c.008.051.015.1.027.152a1.74 1.74 0 0 0 .056.179c.017.047.033.094.054.139a1.729 1.729 0 0 0 .093.172c.024.04.048.081.075.119a1.743 1.743 0 0 0 .125.152c.033.036.066.072.1.106.021.019.037.042.059.061s.036.017.052.03a1.736 1.736 0 0 0 .452.263c.035.014.071.022.107.033a1.732 1.732 0 0 0 .488.085c.012 0 .023.006.035.006H121.501c.012 0 .023-.006.034-.006a1.732 1.732 0 0 0 .489-.085c.035-.011.07-.019.1-.033a1.736 1.736 0 0 0 .453-.263c.016-.013.036-.017.052-.03s.038-.042.059-.061c.036-.034.069-.069.1-.106a1.743 1.743 0 0 0 .125-.152c.027-.038.051-.078.075-.119a1.729 1.729 0 0 0 .093-.172c.021-.045.037-.092.054-.139a1.74 1.74 0 0 0 .056-.179c.012-.05.019-.1.027-.152a1.737 1.737 0 0 0 .019-.188c0-.023.007-.045.007-.068zM45.8 60.316l17.058 14.677a1.751 1.751 0 0 0 2.283 0L82.2 60.316l35.512 41.741H10.289zM8.25 99.052V28.007l34.9 30.026zm76.6-41.019 34.9-30.026v71.045zm31.931-32.091L81.276 56.493c-.006.005-.014.008-.02.014l-.019.02L64 71.358 46.763 56.527l-.019-.02-.02-.014-35.507-30.551z" />
                                        </svg>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                        <div className="header-block-main">
                            <div className="header-block-main-center">
                                <div className="header-main-center-title">
                                    <h1>{t.appDevelopment}</h1>
                                </div>
                                <div className="header-main-center-light">
                                    <p>{t.appDescription}</p>
                                </div>
                                <div className="header-main-center-btn">
                                    <a href="/contact">
                                        {t.getConsultation}
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M4.37713 15.6427C3.98661 15.2522 3.98661 14.619 4.37713 14.2285L14.0224 4.58321C14.8501 4.45711 15.5628 5.16974 15.4367 5.99743L5.79135 15.6427C5.40082 16.0333 4.76766 16.0333 4.37713 15.6427Z"
                                                fill="white"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M13.9133 6.62159L8.89209 6.62158C8.33981 6.62158 7.89209 6.17387 7.89209 5.62158C7.89209 5.0693 8.33981 4.62158 8.89209 4.62158L13.9133 4.62159L13.9133 6.62159Z"
                                                fill="white"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15.3486 6.03584L15.3486 11.0415C15.3486 11.5938 14.9009 12.0415 14.3486 12.0415C13.7963 12.0415 13.3486 11.5938 13.3486 11.0415L13.3486 6.03583L15.3486 6.03584Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="services">
                <div className="container">
                    <div
                        className="services-title"
                        data-aos="fade-up"
                        data-aos-duration="700"
                    >
                        <h1>{t.whatWeOffer}</h1>
                    </div>

                    <div className="services-block">
                        <div className="services-block-inner">
                            {/*<h2 data-aos="fade-up" data-aos-duration="700">*/}
                            {/*    Красота*/}
                            {/*</h2>*/}
                            <div
                                className="services-block-inner-logo"
                                data-aos="fade-up"
                                data-aos-duration="700"
                            >
                                <svg
                                    width="70"
                                    height="66"
                                    viewBox="0 0 70 66"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M68.8267 58.268H56.0532V23.5999C56.0532 21.8827 54.6562 20.4857 52.9393 20.4857H29.8036V19.4041H31.3482C31.9964 19.4041 32.5216 18.8787 32.5216 18.2308V1.20811C32.5216 0.560064 31.9964 0.03479 31.3482 0.03479H25.6088C24.9606 0.03479 24.4355 0.5602 24.4355 1.20811V18.2308C24.4355 18.8789 24.9606 19.4041 25.6088 19.4041H27.457V20.4857H3.11391C1.39699 20.4859 0 21.8827 0 23.5999V60.8309C0 63.6619 2.30344 65.9652 5.13434 65.9652H18.6747H54.8796H65.2719C67.8789 65.9652 69.9999 63.8443 69.9999 61.2372V59.4413C70 58.7934 69.4746 58.268 68.8267 58.268ZM26.7822 17.0575V2.38157H30.1751V17.0576H26.7822V17.0575ZM29.8036 27.9466V26.815H49.7238V54.2855H6.32926V26.815H27.4568V27.9466C27.4568 28.3849 27.1001 28.7416 26.6615 28.7416H13.2141C11.4816 28.7416 10.0722 30.1511 10.0722 31.8836V36.5118C10.0722 38.2443 11.4816 39.6536 13.2141 39.6536H14.5309V47.2916C14.5309 48.5564 15.1718 49.7039 16.2452 50.3614C17.3456 51.0355 18.6966 51.0835 19.8594 50.4903C20.0393 50.3984 20.3386 50.2763 20.8554 50.2763C21.7118 50.2763 22.0727 50.5833 22.6708 51.0919C23.3529 51.672 24.2873 52.4666 26.0065 52.4666C27.7256 52.4666 28.6599 51.672 29.342 51.0919C29.9402 50.5833 30.3013 50.2763 31.1575 50.2763C32.0141 50.2763 32.3751 50.5833 32.9733 51.092C33.6555 51.6721 34.5898 52.4666 36.3092 52.4666C38.0286 52.4666 38.9629 51.6721 39.6452 51.092C39.8847 50.8883 40.1111 50.6959 40.3445 50.5569C41.7568 49.7163 42.6342 48.1598 42.6342 46.495V44.6989H43.8356C45.792 44.6989 47.3836 43.1074 47.3836 41.1509V35.8096C47.3836 33.8534 45.792 32.2616 43.8356 32.2616H18.0787C16.1223 32.2616 14.5307 33.8531 14.5307 35.8096V37.3069H13.214C12.7754 37.3069 12.4187 36.9502 12.4187 36.5116V31.8834C12.4187 31.445 12.7754 31.0881 13.214 31.0881H26.6614C28.394 31.0884 29.8036 29.6788 29.8036 27.9466ZM17.2687 37.3069H16.8775V35.8096C16.8775 35.1473 17.4163 34.6084 18.0787 34.6084C18.7411 34.6084 19.2799 35.1472 19.2799 35.8096V41.1509C19.2799 41.8132 18.7411 42.3521 18.0787 42.3521C17.4163 42.3521 16.8775 41.8133 16.8775 41.1509V39.6537H17.2687C17.9169 39.6537 18.442 39.1283 18.442 38.4804C18.4421 37.8322 17.9167 37.3069 17.2687 37.3069ZM21.417 34.6084H43.8357C44.498 34.6084 45.0369 35.1472 45.0369 35.8096V41.1509C45.0369 41.8132 44.4981 42.3521 43.8357 42.3521H21.417C21.5525 41.9768 21.6266 41.5724 21.6266 41.1509V35.8096C21.6266 35.3881 21.5522 34.9837 21.417 34.6084ZM40.2876 44.6988V46.4948C40.2876 47.3367 39.8496 48.1206 39.1442 48.5401C38.7412 48.7801 38.4137 49.0584 38.125 49.3041C37.5267 49.8127 37.1656 50.1197 36.3092 50.1197C35.4528 50.1197 35.0916 49.8127 34.4935 49.304C33.8112 48.7239 32.8769 47.9294 31.1575 47.9294C29.4383 47.9294 28.5039 48.724 27.8219 49.3041C27.2237 49.8127 26.8626 50.1197 26.0064 50.1197C25.15 50.1197 24.789 49.8127 24.1909 49.3041C23.5088 48.724 22.5745 47.9294 20.8552 47.9294C20.0877 47.9294 19.413 48.0832 18.7924 48.3999C18.3634 48.619 17.8691 48.6043 17.4706 48.36C17.0937 48.129 16.8775 47.7398 16.8775 47.2915V44.4892C17.2528 44.6247 17.6572 44.6988 18.0786 44.6988H40.2876ZM2.34678 23.5999C2.34678 23.1768 2.69104 22.8325 3.11404 22.8325H27.457V24.4683H5.15594C4.50775 24.4683 3.98262 24.9938 3.98262 25.6417V55.4588C3.98262 56.1068 4.50775 56.6321 5.15594 56.6321H50.8971C51.5453 56.6321 52.0704 56.1067 52.0704 55.4588V25.6415C52.0704 24.9935 51.5453 24.4682 50.8971 24.4682H29.8036V22.8324H52.9391C53.3621 22.8324 53.7064 23.1765 53.7064 23.5998V58.2678H2.34678V23.5999ZM5.13434 63.6185C3.59721 63.6185 2.34678 62.3677 2.34678 60.8306V60.6146H13.9468V61.2371C13.9468 62.1051 14.1829 62.9184 14.5928 63.6185H5.13434ZM65.272 63.6185H54.8797H18.6747C17.3616 63.6185 16.2935 62.5503 16.2935 61.2371V60.6146H54.8796H67.6531V61.2371C67.6531 62.5503 66.585 63.6185 65.272 63.6185Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <div
                                className="services-block-inner-text"
                                data-aos="fade-up"
                                data-aos-duration="700"
                            >
                                <p>{t.analysis}</p>
                            </div>
                        </div>
                        <div className="services-block-inner">
                            {/*<h2 data-aos="fade-up" data-aos-duration="700">*/}
                            {/*    Юзабилити*/}
                            {/*</h2>*/}
                            <div
                                className="services-block-inner-logo"
                                data-aos="fade-up"
                                data-aos-duration="700"
                            >
                                <svg
                                    width="70"
                                    height="70"
                                    viewBox="0 0 70 70"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M50.8969 16.2426H5.15574C4.50756 16.2426 3.98242 16.768 3.98242 17.4159V47.2331C3.98242 47.8811 4.50756 48.4064 5.15574 48.4064H50.8969C51.5451 48.4065 52.0702 47.8812 52.0702 47.2332V17.4159C52.0702 16.768 51.5451 16.2426 50.8969 16.2426ZM49.7236 46.0599H6.32906V18.5894H49.7235V46.0599H49.7236Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M68.8267 50.0423H56.0532V15.3743C56.0532 13.6572 54.6562 12.2604 52.9393 12.2604H3.11391C1.39699 12.2602 0 13.6571 0 15.3743V52.6053C0 55.4364 2.30344 57.7396 5.13434 57.7396H65.272C67.8791 57.7396 70 55.6187 70 53.0117V51.2158C70 50.5677 69.4746 50.0423 68.8267 50.0423ZM5.13434 55.3927C3.59721 55.3927 2.34678 54.1422 2.34678 52.6053V52.3891H13.9468V53.0116C13.9468 53.8796 14.1829 54.6929 14.5928 55.3927H5.13434ZM2.34678 50.0423V15.3743C2.34678 14.9513 2.69104 14.607 3.11404 14.607H52.9391C53.3621 14.607 53.7064 14.9513 53.7064 15.3743V50.0423H15.1203H2.34678ZM67.6532 53.0116C67.6532 54.3246 66.585 55.3927 65.2719 55.3927H18.6747C17.3616 55.3927 16.2935 54.3245 16.2935 53.0116V52.3891H67.6532V53.0116Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M45.5397 21.7737H10.5127C9.86449 21.7737 9.33936 22.2991 9.33936 22.947V34.2301C9.33936 34.8782 9.86477 35.4034 10.5127 35.4034H45.5397C46.1879 35.4034 46.7131 34.878 46.7131 34.2301V22.947C46.7132 22.2991 46.1879 21.7737 45.5397 21.7737ZM20.5861 33.0568H11.6861V24.1205H20.5863L20.5861 33.0568ZM44.3664 33.0568H22.9329V24.1205H44.3664V33.0568Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M19.1607 30.1278L18.3874 29.3545C18.5372 28.9906 18.6161 28.5973 18.6161 28.192C18.6161 27.377 18.2988 26.611 17.7227 26.0347C17.1463 25.4584 16.3804 25.1412 15.5654 25.1412C14.7504 25.1412 13.9845 25.4586 13.4082 26.0347C12.8318 26.6108 12.5146 27.377 12.5146 28.192C12.5146 29.0068 12.832 29.7729 13.4082 30.3493C14.0028 30.9439 14.7842 31.2414 15.5654 31.2414C15.9604 31.2414 16.3555 31.1647 16.7264 31.0125L17.5013 31.7874C17.7305 32.0164 18.0308 32.1311 18.3311 32.1311C18.6313 32.1311 18.9317 32.0165 19.1608 31.7874C19.6188 31.329 19.6188 30.5861 19.1607 30.1278ZM16.0633 28.6898C15.7884 28.9642 15.342 28.9642 15.0675 28.6898C14.9343 28.5567 14.8613 28.38 14.8613 28.192C14.8613 28.004 14.9346 27.8271 15.0675 27.6942C15.2005 27.5612 15.3771 27.488 15.5653 27.488C15.7535 27.488 15.9302 27.5613 16.063 27.6942C16.1961 27.8272 16.2692 28.0039 16.2692 28.192C16.2694 28.38 16.1962 28.5567 16.0633 28.6898Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M39.9076 37.2621H10.5127C9.86449 37.2621 9.33936 37.7876 9.33936 38.4355C9.33936 39.0834 9.86477 39.6088 10.5127 39.6088H39.9076C40.5558 39.6088 41.0809 39.0834 41.0809 38.4355C41.0809 37.7876 40.5558 37.2621 39.9076 37.2621Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M29.2691 41.5495H10.5127C9.86449 41.5495 9.33936 42.0749 9.33936 42.7228C9.33936 43.3709 9.86477 43.8961 10.5127 43.8961H29.269C29.9172 43.8961 30.4423 43.3707 30.4423 42.7228C30.4424 42.0749 29.9173 41.5495 29.2691 41.5495Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <div
                                className="services-block-inner-text"
                                data-aos="fade-up"
                                data-aos-duration="700"
                            >
                                <p>{t.design}</p>
                            </div>
                        </div>
                        {/* <div className="services-block-inner">
                            <h2 data-aos="fade-up" data-aos-duration="700">
                                Адаптивность
                            </h2>
                            <div
                                className="services-block-inner-logo"
                                data-aos="fade-up"
                                data-aos-duration="700"
                            >
                                <svg
                                    width="70"
                                    height="60"
                                    viewBox="0 0 70 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M65.1872 0.386609L47.8115 0.385925C45.1576 0.385925 42.9985 2.54569 42.9985 5.20038V10.6859H35.8339C35.8322 10.6859 35.8308 10.6857 35.8292 10.6857H9.74019C9.73719 10.6857 9.73418 10.6859 9.7309 10.6859H5.10649C2.29074 10.6859 0 12.9767 0 15.7923V46.4742C0 49.2899 2.29074 51.5807 5.10649 51.5807H23.4019L21.7888 58.1334C21.7874 58.139 21.7868 58.1447 21.7856 58.1503C21.7791 58.179 21.7739 58.2082 21.7694 58.2377C21.7672 58.2519 21.7646 58.266 21.7628 58.2803C21.7595 58.3086 21.758 58.3375 21.7568 58.3667C21.7561 58.3814 21.7547 58.3963 21.7546 58.411C21.7546 58.4139 21.7542 58.4167 21.7542 58.4194C21.7542 58.4551 21.7564 58.4903 21.7594 58.5252C21.7598 58.5297 21.7595 58.5342 21.7601 58.5387C21.7643 58.5825 21.7714 58.6257 21.7803 58.6681C21.7814 58.6735 21.7832 58.6787 21.7844 58.6843C21.7927 58.7209 21.8024 58.7568 21.8139 58.7919C21.8172 58.8019 21.8213 58.8119 21.8249 58.8219C21.8357 58.852 21.8473 58.8816 21.8604 58.9106C21.8659 58.9225 21.8718 58.9344 21.8776 58.9462C21.8908 58.9726 21.9046 58.9985 21.9193 59.0238C21.9267 59.0363 21.934 59.0486 21.9418 59.0607C21.9573 59.0852 21.9742 59.1089 21.9915 59.1321C21.9974 59.14 22.0023 59.1487 22.0086 59.1566C22.0113 59.1599 22.0145 59.163 22.0172 59.1663C22.0383 59.1925 22.0606 59.2174 22.0837 59.2418C22.0898 59.2483 22.0954 59.2553 22.1019 59.2617C22.1315 59.2915 22.1626 59.3195 22.1952 59.3459C22.2038 59.3529 22.2129 59.3591 22.2216 59.3659C22.2465 59.385 22.2718 59.4035 22.298 59.4207C22.3094 59.4281 22.3212 59.4348 22.3328 59.4418C22.3578 59.457 22.3832 59.4714 22.4096 59.4846C22.4218 59.4907 22.4339 59.4965 22.4463 59.5022C22.4732 59.5148 22.5004 59.5261 22.5284 59.5367C22.5407 59.5413 22.5529 59.546 22.5652 59.5502C22.5942 59.56 22.6237 59.5684 22.6535 59.576C22.6657 59.5792 22.6774 59.5827 22.6895 59.5853C22.7211 59.5923 22.753 59.5976 22.7856 59.6019C22.7964 59.6032 22.8071 59.6056 22.8181 59.6068C22.8612 59.6115 22.9048 59.6143 22.949 59.6143H37.3536H46.8107C47.4708 59.6143 48.0056 59.0793 48.0056 58.4194C48.0056 57.7596 47.4708 57.2246 46.8107 57.2246H38.8781L40.2673 51.5811L61.1648 51.5804C63.6841 51.5804 65.7339 49.5315 65.7339 47.0129V36.6768C68.1313 36.4042 70.0001 34.3645 70.0001 31.8955V5.19997C70.0005 2.54569 67.8412 0.386609 65.1872 0.386609ZM49.2112 5.19997C49.2112 3.86367 50.2984 2.77647 51.6348 2.77647H65.1872C66.5236 2.77633 67.6108 3.86353 67.6108 5.19997V6.60859H49.2112V5.19997ZM49.2111 8.99804H67.6107V27.9465H67.0393L61.0265 21.3298C60.8 21.0807 60.4788 20.9385 60.1422 20.9385C59.8056 20.9385 59.4845 21.0805 59.2579 21.3298L57.5508 23.208L53.3117 18.5449C53.0853 18.2959 52.7641 18.1538 52.4275 18.1538C52.0911 18.1538 51.7699 18.2958 51.5435 18.5451L49.2112 21.111L49.2111 8.99804ZM63.8103 27.9465H61.8585L59.1658 24.9846L60.1422 23.9101L63.8103 27.9465ZM49.2113 24.5685L49.2588 24.6116L52.4278 21.1251L58.6292 27.9465H49.2113V24.5685ZM45.3882 5.20051C45.3882 3.9822 46.2918 2.97362 47.463 2.80382C47.0558 3.51011 46.8213 4.32783 46.8213 5.2001V31.8952C46.8213 32.7668 47.0554 33.5844 47.4623 34.2903C46.2914 34.12 45.3881 33.1124 45.3881 31.8952V5.20051H45.3882ZM7.56074 37.5789L17.173 27.6995L29.9518 41.7549H7.56074V37.5789ZM27.6889 35.7119L30.5599 32.5527L38.9221 41.7546H33.1811V41.7547L27.6889 35.7119ZM5.72514 49.1908H5.10649C3.60845 49.1909 2.38973 47.9722 2.38973 46.4742V15.7923C2.38973 14.2943 3.60845 13.0756 5.10649 13.0756H5.72514C5.372 13.7236 5.17102 14.4663 5.17102 15.2546V47.0123C5.17102 47.8006 5.37186 48.5429 5.72514 49.1908ZM36.4172 57.2242H24.4737L25.8629 51.5807H37.8064L36.4172 57.2242ZM63.3446 47.0126C63.3446 48.2134 62.3669 49.1904 61.1652 49.1904H9.74019C8.53843 49.1904 7.56074 48.2135 7.56074 47.0126V44.1446H63.3446V47.0126ZM63.3446 41.7549H42.1511L31.4443 29.9726C31.2178 29.7235 30.8968 29.5814 30.56 29.5814C30.2234 29.5814 29.9023 29.7234 29.6759 29.9726L26.0741 33.9357L18.0865 25.1522C17.8648 24.9084 17.5522 24.7669 17.2227 24.7614C16.89 24.7603 16.5759 24.8867 16.3462 25.1229L7.56088 34.1523V15.2548C7.56088 14.0546 8.5361 13.0782 9.73568 13.0757H42.9987V31.8952C42.9987 34.5489 45.1577 36.708 47.8116 36.708L63.3448 36.7084V41.7549H63.3446ZM67.6108 31.8951C67.6108 33.2315 66.5236 34.3187 65.1872 34.3187L51.6255 34.3183C50.2933 34.3132 49.2111 33.2284 49.2111 31.8951V30.3362H67.6107V31.8951H67.6108Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <div
                                className="services-block-inner-text"
                                data-aos="fade-up"
                                data-aos-duration="700"
                            >
                                <p>
                                    Интеграцию функционала: реализация необходимых возможностей — от онлайн-заказов и
                                    платежей до уведомлений и аналитики.
                                </p>
                            </div>
                        </div> */}
                        <div className="services-block-inner">
                            {/*<h2 data-aos="fade-up" data-aos-duration="700">*/}
                            {/*    Адаптивность*/}
                            {/*</h2>*/}
                            <div
                                className="services-block-inner-logo"
                                data-aos="fade-up"
                                data-aos-duration="700"
                            >
                                <svg
                                    width="70"
                                    height="60"
                                    viewBox="0 0 70 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M65.1872 0.386609L47.8115 0.385925C45.1576 0.385925 42.9985 2.54569 42.9985 5.20038V10.6859H35.8339C35.8322 10.6859 35.8308 10.6857 35.8292 10.6857H9.74019C9.73719 10.6857 9.73418 10.6859 9.7309 10.6859H5.10649C2.29074 10.6859 0 12.9767 0 15.7923V46.4742C0 49.2899 2.29074 51.5807 5.10649 51.5807H23.4019L21.7888 58.1334C21.7874 58.139 21.7868 58.1447 21.7856 58.1503C21.7791 58.179 21.7739 58.2082 21.7694 58.2377C21.7672 58.2519 21.7646 58.266 21.7628 58.2803C21.7595 58.3086 21.758 58.3375 21.7568 58.3667C21.7561 58.3814 21.7547 58.3963 21.7546 58.411C21.7546 58.4139 21.7542 58.4167 21.7542 58.4194C21.7542 58.4551 21.7564 58.4903 21.7594 58.5252C21.7598 58.5297 21.7595 58.5342 21.7601 58.5387C21.7643 58.5825 21.7714 58.6257 21.7803 58.6681C21.7814 58.6735 21.7832 58.6787 21.7844 58.6843C21.7927 58.7209 21.8024 58.7568 21.8139 58.7919C21.8172 58.8019 21.8213 58.8119 21.8249 58.8219C21.8357 58.852 21.8473 58.8816 21.8604 58.9106C21.8659 58.9225 21.8718 58.9344 21.8776 58.9462C21.8908 58.9726 21.9046 58.9985 21.9193 59.0238C21.9267 59.0363 21.934 59.0486 21.9418 59.0607C21.9573 59.0852 21.9742 59.1089 21.9915 59.1321C21.9974 59.14 22.0023 59.1487 22.0086 59.1566C22.0113 59.1599 22.0145 59.163 22.0172 59.1663C22.0383 59.1925 22.0606 59.2174 22.0837 59.2418C22.0898 59.2483 22.0954 59.2553 22.1019 59.2617C22.1315 59.2915 22.1626 59.3195 22.1952 59.3459C22.2038 59.3529 22.2129 59.3591 22.2216 59.3659C22.2465 59.385 22.2718 59.4035 22.298 59.4207C22.3094 59.4281 22.3212 59.4348 22.3328 59.4418C22.3578 59.457 22.3832 59.4714 22.4096 59.4846C22.4218 59.4907 22.4339 59.4965 22.4463 59.5022C22.4732 59.5148 22.5004 59.5261 22.5284 59.5367C22.5407 59.5413 22.5529 59.546 22.5652 59.5502C22.5942 59.56 22.6237 59.5684 22.6535 59.576C22.6657 59.5792 22.6774 59.5827 22.6895 59.5853C22.7211 59.5923 22.753 59.5976 22.7856 59.6019C22.7964 59.6032 22.8071 59.6056 22.8181 59.6068C22.8612 59.6115 22.9048 59.6143 22.949 59.6143H37.3536H46.8107C47.4708 59.6143 48.0056 59.0793 48.0056 58.4194C48.0056 57.7596 47.4708 57.2246 46.8107 57.2246H38.8781L40.2673 51.5811L61.1648 51.5804C63.6841 51.5804 65.7339 49.5315 65.7339 47.0129V36.6768C68.1313 36.4042 70.0001 34.3645 70.0001 31.8955V5.19997C70.0005 2.54569 67.8412 0.386609 65.1872 0.386609ZM49.2112 5.19997C49.2112 3.86367 50.2984 2.77647 51.6348 2.77647H65.1872C66.5236 2.77633 67.6108 3.86353 67.6108 5.19997V6.60859H49.2112V5.19997ZM49.2111 8.99804H67.6107V27.9465H67.0393L61.0265 21.3298C60.8 21.0807 60.4788 20.9385 60.1422 20.9385C59.8056 20.9385 59.4845 21.0805 59.2579 21.3298L57.5508 23.208L53.3117 18.5449C53.0853 18.2959 52.7641 18.1538 52.4275 18.1538C52.0911 18.1538 51.7699 18.2958 51.5435 18.5451L49.2112 21.111L49.2111 8.99804ZM63.8103 27.9465H61.8585L59.1658 24.9846L60.1422 23.9101L63.8103 27.9465ZM49.2113 24.5685L49.2588 24.6116L52.4278 21.1251L58.6292 27.9465H49.2113V24.5685ZM45.3882 5.20051C45.3882 3.9822 46.2918 2.97362 47.463 2.80382C47.0558 3.51011 46.8213 4.32783 46.8213 5.2001V31.8952C46.8213 32.7668 47.0554 33.5844 47.4623 34.2903C46.2914 34.12 45.3881 33.1124 45.3881 31.8952V5.20051H45.3882ZM7.56074 37.5789L17.173 27.6995L29.9518 41.7549H7.56074V37.5789ZM27.6889 35.7119L30.5599 32.5527L38.9221 41.7546H33.1811V41.7547L27.6889 35.7119ZM5.72514 49.1908H5.10649C3.60845 49.1909 2.38973 47.9722 2.38973 46.4742V15.7923C2.38973 14.2943 3.60845 13.0756 5.10649 13.0756H5.72514C5.372 13.7236 5.17102 14.4663 5.17102 15.2546V47.0123C5.17102 47.8006 5.37186 48.5429 5.72514 49.1908ZM36.4172 57.2242H24.4737L25.8629 51.5807H37.8064L36.4172 57.2242ZM63.3446 47.0126C63.3446 48.2134 62.3669 49.1904 61.1652 49.1904H9.74019C8.53843 49.1904 7.56074 48.2135 7.56074 47.0126V44.1446H63.3446V47.0126ZM63.3446 41.7549H42.1511L31.4443 29.9726C31.2178 29.7235 30.8968 29.5814 30.56 29.5814C30.2234 29.5814 29.9023 29.7234 29.6759 29.9726L26.0741 33.9357L18.0865 25.1522C17.8648 24.9084 17.5522 24.7669 17.2227 24.7614C16.89 24.7603 16.5759 24.8867 16.3462 25.1229L7.56088 34.1523V15.2548C7.56088 14.0546 8.5361 13.0782 9.73568 13.0757H42.9987V31.8952C42.9987 34.5489 45.1577 36.708 47.8116 36.708L63.3448 36.7084V41.7549H63.3446ZM67.6108 31.8951C67.6108 33.2315 66.5236 34.3187 65.1872 34.3187L51.6255 34.3183C50.2933 34.3132 49.2111 33.2284 49.2111 31.8951V30.3362H67.6107V31.8951H67.6108Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <div
                                className="services-block-inner-text"
                                data-aos="fade-up"
                                data-aos-duration="700"
                            >
                                <p>{t.testing}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

