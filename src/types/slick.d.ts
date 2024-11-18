interface JQuery {
    slick(options?: {
        autoplay?: boolean;
        infinite?: boolean;
        slidesToShow?: number;
        slidesToScroll?: number;
        arrows?: boolean;
        prevArrow?: string;
        nextArrow?: string;
        responsive?: Array<{
            breakpoint: number;
            settings: {
                slidesToShow?: number;
                slidesToScroll?: number;
                prevArrow?: string;
                nextArrow?: string;
            };
        }>;
    }): JQuery;
    slick(command: string): void;
} 